import Image from "next/image"
import logo from "../../../../public/images/logo.jpg";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import { NavBar } from "../NavBar";

export function Header() {
    return (
        <>
            <header className="py-8 px-28 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold"><span className="text-red-600">Drago</span> Tech</h1>
                    <Image src={logo} width={40} height={40} alt="logo do drago tech" />
                </div>
                <div className="flex items-center w-full max-w-96 border border-gray-300 rounded-md">
                    <input className="p-4 outline-none w-full" type="text" placeholder="Pesquise por seus produtos" />
                    <div className="w-10 h-10 flex justify-center items-center">
                        <FaSearch className="text-gray-500" />
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col gap-1 items-center">
                        <FaHeart className="text-2xl" />
                        <Link className="transition-all duration-500 hover:text-red-600" href="">Lista de desejos</Link>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <FaShoppingCart className="text-2xl"  />
                        <Link className="transition-all duration-500 hover:text-red-600" href="">Carrinho</Link>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <FaUser className="text-2xl"  />
                        <div className="flex gap-1">
                            <Link className="transition-all duration-500 hover:text-red-600" href="">Login</Link>
                            <span>/</span>
                            <Link className="transition-all duration-500 hover:text-red-600" href="">Cadastro</Link>
                        </div>
                    </div>
                </div>
            </header>
            <NavBar/>
        </>
    )
}