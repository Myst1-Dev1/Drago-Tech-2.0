'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaBoxOpen, FaChartBar, FaClipboardList, FaCog, FaMoon, FaSignOutAlt, FaSun, FaTimes } from "react-icons/fa";

export function SideBar() {
    const [theme, setTheme] = useState('light');
    const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
      }, [theme]);

    const pathname = usePathname();
    
    console.log(isMobile)

    return (
        <>
            <div className="w-0 lg:w-56 relative border-r">
                <FaBars onClick={() => setIsMobile(true)} className="block lg:hidden absolute top-5 left-2 z-50" />
                <div className={`z-50 bg-white dark:bg-[#202020] border-r border-gray-300 flex flex-col justify-between max-w-56 w-full min-h-screen fixed top-0 transition-all duration-500 -left-full lg:left-0 ${isMobile ? 'left-0' : ''}`}>
                    <FaTimes onClick={() => setIsMobile(false)} className="block lg:hidden absolute right-2 top-2" />
                    <div className="p-3 flex justify-center items-center gap-3 border-b border-gray-300">
                        <h1 className="text-xl font-bold">
                            <span className="text-red-500">Drago</span> Tech
                        </h1>
                        <Image
                            className="w-10 h-10 object-cover"
                            src="/images/logo-prime.png"
                            width={40}
                            height={40}
                            alt="logo do drago tech"
                        />
                    </div>
                    <div className="flex flex-col gap-4 p-3 border-b border-gray-300">
                        <h2 className="font-bold font-mono text-xl mb-3">Menu</h2>
                        <Link onClick={() => setIsMobile(false)} href="/admin/panel" className={`flex items-center gap-3 rounded-full font-semibold transition-all duration-500 ${pathname === '/admin/panel' ? 'hover:bg-red-600 bg-red-400 text-white p-3' : 'hover:bg-red-400 hover:text-white hover:p-3'}`}>
                            <FaChartBar />
                            <h3>Painel</h3>
                        </Link>
                        <Link onClick={() => setIsMobile(false)} href="/admin/products" className={`flex items-center gap-3 rounded-full font-semibold transition-all duration-500 ${pathname === '/admin/products' ? 'hover:bg-red-600 bg-red-400 text-white p-3' : 'hover:bg-red-400 hover:text-white hover:p-3'}`}>
                            <FaBoxOpen />
                            <h3>Produtos</h3>
                        </Link>
                        <Link onClick={() => setIsMobile(false)} href="/admin/orders" className={`flex items-center gap-3 rounded-full font-semibold transition-all duration-500 ${pathname === '/admin/orders' ? 'hover:bg-red-600 bg-red-400 text-white p-3' : 'hover:bg-red-400 hover:text-white hover:p-3'}`}>
                            <FaClipboardList />
                            <h3>Pedidos</h3>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 p-3">
                        <h2 className="font-bold font-mono text-xl mb-3">Outros</h2>
                        <div className="flex items-center rounded-full gap-3 cursor-pointer transition-all duration-500 hover:text-white hover:bg-red-400 hover:p-3">
                            <FaCog />
                            <h3>Configurações</h3>
                        </div>
                        <div className="flex items-center rounded-full gap-3 cursor-pointer transition-all duration-500 hover:text-white hover:bg-red-400 hover:p-3">
                            <FaSignOutAlt />
                            <h3>Sair</h3>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="rounded-full max-w-48 w-full text-sm p-2 bg-gray-100 dark:bg-gray-400 flex gap-2">
                            <span onClick={() => setTheme('light')} className={`flex items-center gap-3 ${theme === 'light' ? 'bg-white dark:bg-gray-600' : ''} rounded-full p-2 cursor-pointer transition-all duration-500 hover:brightness-90`}><FaSun className="text-yellow-400 text-[17px]" /> Claro</span>
                            <span onClick={() => setTheme('dark')} className={`flex items-center gap-3 ${theme === 'dark' ? 'bg-white dark:bg-gray-600' : ''} rounded-full p-2 cursor-pointer transition-all duration-500 hover:brightness-90`}><FaMoon /> Escuro</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}