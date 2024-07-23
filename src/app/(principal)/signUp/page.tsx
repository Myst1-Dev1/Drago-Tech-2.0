import Link from "next/link";

export default function SignUp() {
    return (
        <>
            <div className="px-4 lg:px-28 py-16 flex flex-col justify-center items-center">
                <h2 className="text-xl lg:text-2xl font-bold mb-8">Cadastro</h2>
                <form className="max-w-[600px] w-full flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-5 mb-5">
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Nome" />
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="email" placeholder="Email" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 mb-5">
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="tel" placeholder="(DD) XXXXX-XXXX" />
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Endereço" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 mb-5">
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Estado" />
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Cidade" />
                    </div>
                    <input className="outline-none p-4 rounded-md w-full border border-gray-300 mb-5" type="tel" placeholder="CEP" />
                    <div className="flex flex-col lg:flex-row gap-5 mb-5">
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="number" placeholder="Senha" />
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="number" placeholder="Confirme a senha" />
                    </div>
                    <span className="mb-6 text-center">Já possui uma conta? <Link href="/signIn" className="font-bold text-red-600 transition-all duration-500 hover:text-red-900">Entrar</Link></span>
                    <button className="p-4 rounded-md w-full text-white font-bold bg-red-500 transition-all duration-500 hover:bg-red-700">Cadastrar</button>
                </form>
            </div>
        </>
    )
}