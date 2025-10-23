import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="min-h-screen w-full flex items-center justify-center bg-white">
                <div className="flex lg:justify-between justify-center flex-wrap gap-7 lg:gap-0 items-center max-w-2xl w-full">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold">
                            <span className="text-red-500">Drago</span> Tech
                        </h1>
                        <Image
                            src="/images/logo.jpg"
                            width={40}
                            height={40}
                            alt="logo do drago tech"
                        />
                    </div>

                    <div className="h-[1px] lg:h-[250px] w-full lg:w-[1px] bg-gray-300 mx-8" />

                    <div>
                        <h2 className="text-xl font-bold text-center mb-1">Bem vindo</h2>
                        <p className="font-medium text-gray-400 text-center text-sm">
                            Acesse o painel para administrar a loja
                        </p>

                        <form action="" className="flex flex-col gap-3 mt-4">
                            <input
                                className="w-full outline-none border border-gray-300 rounded-md p-3"
                                type="email"
                                placeholder="Email"
                            />
                            <input
                                className="w-full outline-none border border-gray-300 rounded-md p-3"
                                type="password"
                                placeholder="Senha"
                            />
                            <button
                                type="submit"
                                className="bg-red-500 text-white text-lg font-bold p-3 w-full rounded-md transition-all duration-300 hover:bg-red-600"
                            >
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}