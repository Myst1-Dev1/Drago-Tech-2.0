'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBoxOpen, FaChartBar, FaClipboardList, FaSignOutAlt } from "react-icons/fa";

export function SideBar() {
    const pathname = usePathname();
    
    return (
        <>
            <div className="w-52">
                <div className="flex flex-col justify-between bg-black text-white max-w-52 w-full min-h-screen fixed top-0 left-0 p-3">
                    <div className="flex justify-center items-center gap-3">
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
                    <div className="flex flex-col gap-4">
                        <Link href="/admin/panel" className={`flex items-center gap-3 rounded-full font-semibold transition-all duration-500 ${pathname === '/admin/panel' ? 'hover:bg-red-600 bg-red-400 p-3' : 'hover:bg-red-400 hover:p-3'} text-white`}>
                            <FaChartBar />
                            <h3>Painel</h3>
                        </Link>
                        <Link href="/admin/products" className={`flex items-center gap-3 rounded-full font-semibold transition-all duration-500 ${pathname === '/admin/products' ? 'hover:bg-red-600 bg-red-400 p-3' : 'hover:bg-red-400 hover:p-3'} text-white`}>
                            <FaBoxOpen />
                            <h3>Produtos</h3>
                        </Link>
                        <Link href="/admin/orders" className={`flex items-center gap-3 rounded-full font-semibold transition-all duration-500 ${pathname === '/admin/orders' ? 'hover:bg-red-600 bg-red-400 p-3' : 'hover:bg-red-400 hover:p-3'} text-white`}>
                            <FaClipboardList />
                            <h3>Pedidos</h3>
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 transition-all duration-500 hover:bg-red-400 hover:p-3">
                        <FaSignOutAlt />
                        <h3>Sair</h3>
                    </div>
                </div>
            </div>
        </>
    )
}