import Link from "next/link";

export default function SignIn() {
    return (
        <>
            <div className="px-4 lg:px-28 py-16 flex flex-col justify-center items-center">
                <h2 className="text-xl lg:text-2xl font-bold mb-8">Login</h2>
                <form className="max-w-96 w-full flex flex-col">
                    <input className="outline-none p-4 rounded-md w-full border border-gray-300 mb-5" type="email" placeholder="Email" />
                    <input className="outline-none p-4 rounded-md w-full border border-gray-300 mb-2" type="password" placeholder="Senha" />
                    <span className="mb-6 text-center">Nao possui uma conta? <Link href="/signUp" className="font-bold text-red-600 transition-all duration-500 hover:text-red-900">Cadastro</Link></span>
                    <button className="p-4 rounded-md w-full text-white font-bold bg-red-500 transition-all duration-500 hover:bg-red-700">Entrar</button>
                </form>
            </div>
        </>
    )
}