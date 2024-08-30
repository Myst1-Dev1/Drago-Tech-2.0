import User from '@/Models/User';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connect from '@/utils/db';

const options = NextAuth({
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
                    console.log("Usuário encontrado:", user);

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
    }

});

export { options as GET, options as POST };