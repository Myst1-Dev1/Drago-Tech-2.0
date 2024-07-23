import Link from "next/link";


export function NavBar() {
    return (
        <>
            <div className="bg-[#151515] w-full hidden lg:block">
                <nav className="flex justify-between items-center text-white px-28 py-5">
                    <div className="flex gap-8">
                        <Link className="transition-all duration-500 hover:text-red-600" href="/">Home</Link>
                        <Link className="transition-all duration-500 hover:text-red-600" href="/shop">Loja</Link>
                        <Link className="transition-all duration-500 hover:text-red-600" href="/about">Sobre</Link>
                        <Link className="transition-all duration-500 hover:text-red-600" href="/prime">Prime</Link>
                        <Link className="transition-all duration-500 hover:text-red-600" href="/contact">Contato</Link>
                    </div>
                    <Link className="transition-all duration-500 hover:text-red-600" href="/blog">Blog</Link>
                </nav>
            </div>
        </>
    )
}