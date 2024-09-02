'use client'

import Image from "next/image"
import logo from "../../../../../public/images/logo.jpg";
import userIcon from "../../../../../public/images/profileUserIcon.png";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { NavBar } from "../../NavBar";
import { Cart } from "../../Cart";
import { useState } from "react";
import { ProductNode } from "@/types/products";
import { Search } from "../../Search";
import { useCart } from "@/services/hooks/useCart";
import { signOut, useSession } from "next-auth/react";

interface HeaderContentProps {
    products: ProductNode[];
}

export function HeaderContent({ products }:HeaderContentProps) {
    const { cart } = useCart();

    const { status } = useSession();

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isResponsiveNavBarOpen, setIsResponsiveNavBarOpen] = useState(false);

    return (
        <>
            <header className="py-8 px-4 lg:px-28 flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between items-center">
                <div className="flex w-full lg:w-56 justify-between lg:justify-normal items-center gap-4">
                    <div className="block lg:hidden">
                        <FaBars className="cursor-pointer transition-all duration-500 hover:text-red-600" onClick={() => setIsResponsiveNavBarOpen(true)} />
                    </div>
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl lg:text-2xl font-bold"><span className="text-red-600">Drago</span> Tech</h1>
                        <Image src={logo} width={40} height={40} alt="logo do drago tech" />
                    </div>
                    <div className="flex gap-4 lg:hidden">
                        {/* <FaHeart className="text-xs transition-all duration-500 hover:text-red-600" /> */}
                        <div className="relative">
                            {cart.length === 0 ? '' : <div className="absolute -top-[10px] left-[10px] w-4 h-4 rounded-full flex justify-center items-center text-white bg-red-600">
                                <span className="text-xs">{cart.length}</span>
                            </div>}
                            <FaShoppingCart onClick={() => setIsCartOpen(true)}  className="transition-all duration-500 hover:text-red-600" />
                        </div>
                        {status === 'authenticated' ? 
                            <Link href="/profile">
                                <Image src={userIcon} width={40} height={40} alt="icone de usuário" />
                            </Link>
                            :
                            <Link href="/signIn">
                            <FaUser className="transition-all duration-500 hover:text-red-600" />
                        </Link>}
                    </div>
                </div>
                <Search products={products} />
                <div className="hidden lg:flex gap-8">
                    {/* <div className="flex flex-col gap-1 items-center">
                        <FaHeart className="text-2xl duration-500 hover:text-red-600" />
                        <Link className="transition-all duration-500 hover:text-red-600" href="/favorites">Lista de desejos</Link>
                    </div> */}
                    <div className="flex flex-col gap-1 items-center">
                        <div className="relative">
                            {cart.length === 0 ? '' : <div className="absolute -top-[10px] left-[10px] w-5 h-5 rounded-full flex justify-center items-center text-white bg-red-600">
                                <span>{cart.length}</span>
                            </div>}
                            <FaShoppingCart onClick={() => setIsCartOpen(true)} className="cursor-pointer text-2xl duration-500 hover:text-red-600" />
                        </div>
                        <h6 className="transition-all duration-500 hover:text-red-600">Carrinho</h6>
                    </div>
                    
                        {status === 'authenticated' ? 
                            <div className="flex items-center gap-3">
                                <Link href='/profile'>
                                    <Image src={userIcon} width={40} height={40} alt="icone de usuário" />
                                </Link>
                                <span className="cursor-pointer" onClick={() => signOut()}>Sair</span>
                            </div>
                        :
                        <div className="flex flex-col gap-1 items-center">
                        <FaUser className="text-2xl duration-500 hover:text-red-600"  />
                        <div className="flex gap-1">
                            <Link className="transition-all duration-500 hover:text-red-600" href="/signIn">Login</Link>
                            <span>/</span>
                            <Link className="transition-all duration-500 hover:text-red-600" href="/signUp">Cadastro</Link>
                        </div>
                    </div>}
                </div>
            </header>
            <NavBar/>

            {isResponsiveNavBarOpen && 
            <div className={`bg-white text-black w-full h-screen fixed z-50 top-0 transition-transform duration-500 ${isResponsiveNavBarOpen ? 'left-0 animate-fadeIn' : '-left-full'} right-0`}>
                <FaTimes onClick={() => setIsResponsiveNavBarOpen(false)} className="absolute top-8 right-6 cursor-pointer transition-all duration-500 hover:text-red-600" />
                <nav className="flex w-full h-screen flex-col justify-center items-center gap-8 py-5">
                    <Link onClick={() => setIsResponsiveNavBarOpen(false)} className="transition-all duration-500 hover:text-red-600" href="/">Home</Link>
                    <Link onClick={() => setIsResponsiveNavBarOpen(false)} className="transition-all duration-500 hover:text-red-600" href="/shop">Loja</Link>
                    <Link onClick={() => setIsResponsiveNavBarOpen(false)} className="transition-all duration-500 hover:text-red-600" href="/about">Sobre</Link>
                    <Link onClick={() => setIsResponsiveNavBarOpen(false)} className="transition-all duration-500 hover:text-red-600" href="/prime">Prime</Link>
                    <Link onClick={() => setIsResponsiveNavBarOpen(false)} className="transition-all duration-500 hover:text-red-600" href="/contact">Contato</Link>
                    <Link onClick={() => setIsResponsiveNavBarOpen(false)} className="transition-all duration-500 hover:text-red-600" href="/blog">Blog</Link>
                </nav>
            </div>}
            {isCartOpen && <Cart setIsCartOpen = {setIsCartOpen} />}
        </>
    )
}