'use client'

import Image from "next/image"
import logo from "../../../../public/images/logo.jpg";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import Link from "next/link";
import { NavBar } from "../NavBar";
import { Cart } from "../Cart";
import { useState } from "react";

export function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <header className="py-8 px-4 lg:px-28 flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between items-center">
                <div className="flex w-full lg:w-56 justify-between lg:justify-normal items-center gap-4">
                    <div className="block lg:hidden">
                        <FaBars />
                    </div>
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl lg:text-2xl font-bold"><span className="text-red-600">Drago</span> Tech</h1>
                        <Image src={logo} width={40} height={40} alt="logo do drago tech" />
                    </div>
                    <div className="flex gap-4 lg:hidden">
                        {/* <FaHeart className="text-xs transition-all duration-500 hover:text-red-600" /> */}
                        <FaShoppingCart onClick={() => setIsCartOpen(true)}  className="transition-all duration-500 hover:text-red-600" />
                        <FaUser className="transition-all duration-500 hover:text-red-600" />
                    </div>
                </div>
                <div className="flex items-center w-full max-w-full lg:max-w-[470px] border border-gray-300 rounded-md">
                    <input className="p-4 outline-none w-full" type="text" placeholder="Pesquise por seus produtos" />
                    <div className="w-10 h-10 flex justify-center items-center">
                        <FaSearch className="text-gray-500" />
                    </div>
                </div>
                <div className="hidden lg:flex gap-8">
                    {/* <div className="flex flex-col gap-1 items-center">
                        <FaHeart className="text-2xl duration-500 hover:text-red-600" />
                        <Link className="transition-all duration-500 hover:text-red-600" href="/favorites">Lista de desejos</Link>
                    </div> */}
                    <div className="flex flex-col gap-1 items-center">
                        <FaShoppingCart onClick={() => setIsCartOpen(true)} className="cursor-pointer text-2xl duration-500 hover:text-red-600" />
                        <h6 className="transition-all duration-500 hover:text-red-600">Carrinho</h6>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <FaUser className="text-2xl duration-500 hover:text-red-600"  />
                        <div className="flex gap-1">
                            <Link className="transition-all duration-500 hover:text-red-600" href="/signIn">Login</Link>
                            <span>/</span>
                            <Link className="transition-all duration-500 hover:text-red-600" href="/signUp">Cadastro</Link>
                        </div>
                    </div>
                </div>
            </header>
            <NavBar/>
            {isCartOpen && <Cart setIsCartOpen = {setIsCartOpen} />}
        </>
    )
}