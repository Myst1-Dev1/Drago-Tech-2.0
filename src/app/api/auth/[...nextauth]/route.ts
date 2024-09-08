import User from '@/Models/User';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connect from '@/utils/db';
import { cookies } from 'next/headers';

const OPTIONS:NextAuthOptions = NextAuth({
    secret: process.env.AUTH_SECRET,
    providers:[
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

                } catch (error:any) {
                    console.log(error);
                }
            },
        })
    ],
    pages: {
        error:"/signIn"
    },
    callbacks: {
        async jwt({ token, user }) {
          user && (token.user = user)
          return token
        },
        async session({ session, token }) {
          session = token.user as any
          return session
        },
      },
});

export { OPTIONS as GET, OPTIONS as POST, OPTIONS };