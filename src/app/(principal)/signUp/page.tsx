'use client';

import { handlePhone } from "@/utils/formatPhoneInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function SignUp() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

    async function handleRegister(e:FormEvent | any) {
        e.preventDefault();

        try {
            setIsLoading(true);
            setErrorText('');

            const formData = new FormData(e.target);
            const formEntries = Object.fromEntries(formData.entries());
            const { name, email, phone, address, state, city, zipCode , password, confirmPassword } = formEntries as { [key: string]: string };

            if(password !== confirmPassword) {
                return setErrorText('As senhas não coincidem');
            }

            await fetch('/api/auth/register', {
                method:'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    phone,
                    address,
                    state,
                    city,
                    zipCode,
                    password
                }),
            }).then(async (res) => {
                const result = await res.json();

                if(result.status === 201) {
                    toast.success(result.message);
                    router.push('/signIn');
                }else {
                    return setErrorText(result.message);
                }
            });

            if(errorText !== '') return;

        } catch (error) {
            console.log('tivemos um erro ao criar a conta', error);
        }finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="px-4 lg:px-28 py-16 flex flex-col justify-center items-center">
                <h2 className="text-xl lg:text-2xl font-bold mb-8">Cadastro</h2>
                <form onSubmit={handleRegister} className="max-w-[600px] w-full flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-5 mb-5">
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Nome" name="name" />
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 mb-5">
                        <input onChange={(e) => handlePhone(e)} maxLength={15} className="outline-none p-4 rounded-md w-full border border-gray-300" type="tel" placeholder="(DD) XXXXX-XXXX" name="phone" />
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Endereço" name="address" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 mb-5">
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Estado" name="state" />
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Cidade" name="city" />
                    </div>
                    <input className="outline-none p-4 rounded-md w-full border border-gray-300 mb-5" type="tel" placeholder="CEP" name="zipCode" />
                    <div className="flex flex-col lg:flex-row gap-5 mb-5">
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="password" placeholder="Senha" name="password" />
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="password" placeholder="Confirme a senha" name="confirmPassword" />
                    </div>
                    <span className="mb-6 text-center">Já possui uma conta? <Link href="/signIn" className="font-bold text-red-600 transition-all duration-500 hover:text-red-900">Entrar</Link></span>
                    {errorText !== '' ?
                    <span className="text-red-600 mb-3 font-bold m-auto">{ errorText }</span>
                    : ''}
                    <button className="p-4 rounded-md w-full text-white font-bold bg-red-500 transition-all duration-500 hover:bg-red-700">
                        {isLoading ? 
                            <div role="status">
                            <svg aria-hidden="true" className="m-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-500 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        </div>
                        : 'Cadastrar'}
                    </button>
                </form>
            </div>
        </>
    )
}