import Image from "next/image"
import logo from "../../../../public/images/logo.jpg";
import payments from "../../../../public/images/payments.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
    return (
        <>
        
            <footer className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-4 mt-16 mb-8 px-4 lg:px-28">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-bold"><span className="text-red-600">Drago</span> Tech</h1>
                        <Image src={logo} width={40} height={40} alt="logo do drago tech" />
                    </div>
                    <p className="text-gray-500">lorem ipsum is simply dummy about industry</p>
                    <div className="flex justify-center items-center gap-4">
                        <FaFacebook className="transition-all duration-500 hover:text-red-600" />
                        <FaInstagram className="transition-all duration-500 hover:text-red-600" />
                        <FaTwitter className="transition-all duration-500 hover:text-red-600" />
                    </div>
                </div>
                <div className="m-auto">
                    <Image className="object-contain" src={payments} width={150} height={90} alt="pagamentos aceitos" />
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-xl">Contato</h2>
                    <h6 className="text-gray-500">dragotech@business.com</h6>
                    <h6 className="text-gray-500">21 49009890</h6>
                </div>
                <div className="flex flex-col gap-3 m-0 lg:m-auto">
                    <h2 className="font-bold text-xl">Menu</h2>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/">Home</Link>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/shop">Loja</Link>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/about">Sobre</Link>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/prime">Prime</Link>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/contact">Contato</Link>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/blog">Blog</Link>
                </div>
            </footer>
            <div className="py-6 border-t border-red-100">
                <p className="text-center py-6">© 2024, Desenvolvido por <Link className="text-red-100 transition-all duration-500 hover:text-red-600" target="_blank" href="https://jv1555-portfolio.mystdev.com.br/">Myst1 Dev</Link></p>
            </div>
        </>
    )
}