import Image from "next/image";
import logo from "../../../../public/images/logo.jpg"
import { FaBell, FaSearch } from "react-icons/fa";
import Link from "next/link";

export function Header() {
    return (
        <>
            <header className="px-4 lg:px-16 py-8 flex justify-between w-full items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-sm lg:text-2xl font-bold"><span className="text-rose-600">Drago</span> Blog</h1>
                    <Image src={logo} width={40} height={40} alt="logo do drago blog" />
                </div>
                <div className="flex gap-10">
                    <div className="flex items-center gap-3 cursor-pointer transition-all duration-500 hover:border-b hover:border-rose-400">
                        <FaSearch className="text-rose-500" />
                        <h6 className="hidden lg:block text-[#38393C]">Pesquisar</h6>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link href="" className="text-rose-500 font-bold">Login</Link>
                        <Link href="">
                            <button className="bg-rose-500 text-white rounded-md max-w-56 flex items-center gap-3 justify-center transition-all duration-500 hover:bg-rose-600 p-3">
                                <FaBell />
                                <span className="hidden lg:block">Inscreva-se</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}