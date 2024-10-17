import User from '@/Models/User';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connect from '@/utils/db';
import { cookies } from 'next/headers';

const authOptions: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: 'Credentials',
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Seu email" },
                password: { label: "Senha", type: "password", placeholder: "Sua senha" },
            },
            async authorize(credentials) {
                await connect();

                try {
                    const user = await User.findOne({ email: credentials!.email });
                    console.log("Usuário encontrado:", user?._id);
                    cookies().set('user', user?._id);

                    if (user) {
                        const validPassword = await bcrypt.compare(credentials!.password, user.password);
                        console.log("Senha válida:", validPassword);

                        if (validPassword) {
                            return user;
                        } else {
                            throw new Error("Credenciais erradas");
                        }
                    } else {
                        throw new Error("Credenciais erradas");
                    }

                } catch (error) {
                    console.error("Erro ao autorizar:", error);
                    throw new Error("Erro na autorização");
                }
            }
        }),
    ],
    pages: {
        error: "/signIn",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id; 
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user!.id = token.id;
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
