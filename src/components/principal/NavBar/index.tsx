import Link from "next/link";


export function NavBar() {
    return (
        <>
            <div className="bg-[#151515] w-full hidden lg:block">
                <nav className="flex text-white gap-8 px-28 py-5">
                    <Link className="transition-all duration-500 hover:text-red-600" href="">Home</Link>
                    <Link className="transition-all duration-500 hover:text-red-600" href="">Loja</Link>
                    <Link className="transition-all duration-500 hover:text-red-600" href="">Sobre</Link>
                    <Link className="transition-all duration-500 hover:text-red-600" href="">Prime</Link>
                    <Link className="transition-all duration-500 hover:text-red-600" href="">Contato</Link>
                    <Link className="transition-all duration-500 hover:text-red-600" href="">Blog</Link>
                </nav>
            </div>
        </>
    )
}