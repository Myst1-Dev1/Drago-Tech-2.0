'use client'

import Image from "next/image"
import logo from "../../../../../public/images/logo.jpg";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { NavBar } from "../../NavBar";
import { Cart } from "../../Cart";
import { useState } from "react";
import { ProductNode } from "@/types/products";

interface HeaderContentProps {
    products: ProductNode[];
}

export function HeaderContent({ products }:HeaderContentProps) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isResponsiveNavBarOpen, setIsResponsiveNavBarOpen] = useState(false);
    const [search, setSearch] = useState('');
    
    const productsData = products
    .map(product => ({
        ...product.produtos,
        slug: product.slug   
    })).filter((product: any) => product.productName?.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <header className="py-8 px-4 lg:px-28 flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between items-center">
                <div className="flex w-full lg:w-56 justify-between lg:justify-normal items-center gap-4">
                    <div className="block lg:hidden">
                        <FaBars onClick={() => setIsResponsiveNavBarOpen(true)} />
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
                <div className="relative flex flex-col w-full max-w-full lg:max-w-[470px]">
                    <div className="flex items-center w-full border border-gray-300 rounded-md">
                        <input 
                            className="p-4 outline-none w-full" 
                            type="text" 
                            placeholder="Pesquise por seus produtos"
                            value={search}
                            onChange={e => setSearch(e.target.value)} 
                        />
                        <div className="w-10 h-10 flex justify-center items-center">
                            <FaSearch className="text-gray-500" />
                        </div>
                    </div>
                    <div className="absolute top-[56px] left-0 right-0">
                        {search === '' ? '' : productsData.length === 0 ? 
                        <div className="w-full flex items-center gap-3 px-4 bg-white border border-l-gray-300 border-r-gray-300 border-b-gray-300 border-t-0">
                            <p className="text-slate-400">Sem produtos para sua pesquisa</p>
                        </div> 
                        : 
                        productsData.map(srcproduct => (
                            <Link key={srcproduct.id} href={`/product/${srcproduct.slug}`}>
                                <div className="w-full flex items-center gap-3 px-4 bg-white border border-l-gray-300 border-r-gray-300 border-b-gray-300 border-t-0">
                                    <Image src={srcproduct.image.node.mediaItemUrl} width={60} height={60} alt="imagem do produto pesquisado" />
                                    <p className="text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap">{srcproduct.productName}</p>
                                </div>
                            </Link>
                        ))}
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