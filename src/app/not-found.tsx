import Link from "next/link";


export default function page404() {
    return (
        <>
            <div className="bg-black text-white w-full h-screen flex justify-center items-center">
                <div className="max-w-96 m-auto flex flex-col gap-5">
                    <h2 className="font-bold text-center text-xl">Parece que você se perdeu</h2>
                    <p className="text-center text-gray-400">Retorne para uma das páginas abaixo</p>
                    <div className="flex gap-5">
                        <Link href="/">
                            <button className="bg-red-500 text-white w-40 rounded-md p-3 transition-all duration-500 hover:bg-red-600">Loja</button>
                        </Link>
                        <Link href="/blog">
                            <button className="bg-red-500 text-white w-40 rounded-md p-3 transition-all duration-500 hover:bg-red-600">Blog</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}