import Image from "next/image"
import logo from "../../../../public/images/logo.jpg";
import blogPost from "../../../../public/images/blogPostImage.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
    return (
        <>
        
            <footer className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-4 mt-28 mb-8 px-4 lg:px-28">
                <div className="flex flex-col gap-3 lg:m-0 m-auto">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold"><span className="text-red-600">Drago</span> Tech</h2>
                        <Image src={logo} width={40} height={40} alt="logo do drago tech" />
                    </div>
                    <p className="text-gray-500">lorem ipsum is simply dummy about industry</p>
                    <div className="flex justify-center items-center gap-4">
                        <FaFacebook className="transition-all duration-500 hover:text-red-600" />
                        <FaInstagram className="transition-all duration-500 hover:text-red-600" />
                        <FaTwitter className="transition-all duration-500 hover:text-red-600" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 m-auto">
                    <h2 className="font-bold text-xl">Menu</h2>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/">Home</Link>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/shop">Loja</Link>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/about">Sobre</Link>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/prime">Prime</Link>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/contact">Contato</Link>
                    <Link className="text-gray-500 transition-all duration-500 hover:text-red-600" href="/blog">Blog</Link>
                </div>
                <div className="flex flex-col gap-3 lg:m-0 m-auto">
                    <h2 className="font-bold text-xl">Contato</h2>
                    <h6 className="text-gray-500">dragotech@business.com</h6>
                    <h6 className="text-gray-500">21 49009890</h6>
                </div>
                <div className="flex flex-col gap-3 m-auto">
                    <h2 className="font-bold text-xl">Blog</h2>
                    <div className="overflow-y-scroll cartScroll h-52 flex flex-col gap-4">
                        <Link href="" className="max-w-40 flex flex-col gap-3">
                            <Image className="w-full object-cover" src={blogPost} width={160} height={160} alt="imagem de um post do blog" />
                            <h6 className="font-bold text-xs">Entenda de que forma a IA ajuda a otimizar a cobrança em grande empresas</h6>
                        </Link>
                        <Link href="" className="max-w-40 flex flex-col gap-3">
                            <Image className="w-full object-cover" src={blogPost} width={160} height={160} alt="imagem de um post do blog" />
                            <h6 className="font-bold text-xs">Entenda de que forma a IA ajuda a otimizar a cobrança em grande empresas</h6>
                        </Link>
                        <Link href="" className="max-w-40 flex flex-col gap-3">
                            <Image className="w-full object-cover" src={blogPost} width={160} height={160} alt="imagem de um post do blog" />
                            <h6 className="font-bold text-xs">Entenda de que forma a IA ajuda a otimizar a cobrança em grande empresas</h6>
                        </Link>
                    </div>
                </div>
            </footer>
            <div className="py-6 border-t border-red-100">
                <p className="text-center py-6">© 2024, Desenvolvido por <Link className="text-red-100 transition-all duration-500 hover:text-red-600" target="_blank" href="https://mystdev.com.br/">Myst1 Dev</Link></p>
            </div>
        </>
    )
}