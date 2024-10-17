import Image from "next/image";
import logo from "../../../../public/images/logo.jpg"
import postImage from "../../../../public/images/blogPostImage.jpg"
import postAuthorImage from "../../../../public/images/blogAuthor.jpg"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
    return (
        <>
            <div className="px-4 py-10 lg:px-16 flex flex-col lg:flex-row justify-center items-center lg:items-baseline m-auto gap-20">
                <div className="max-w-96 h-fit flex flex-wrap flex-col gap-3 justify-center items-center">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl lg:text-2xl font-bold"><span className="text-rose-600">Drago</span> Blog</h2>
                        <Image src={logo} width={40} height={40} alt="logo do drago blog" />
                    </div>
                    <p className="text-blog-post-gray">Lorem ipsum is simply dummy about industry of the years in the technology.</p>
                    <div className="flex gap-4">
                        <FaFacebook className="text-rose-500" />
                        <FaTwitter className="text-rose-500" />
                        <FaInstagram className="text-rose-500" />
                    </div>
                </div>
                <div className="max-w-96 h-fit w-full border-l border-r border-rose-200 pr-5 pl-5">
                    <h2 className="text-blog-post-title font-bold text-xl">Links Rápidos</h2>
                    <div className="mt-4 flex flex-col gap-3">
                        <div className="border-b border-rose-200 pb-3 w-full">
                            <Link className="text-rose-400 font-bold transition-all duration-500 hover:text-rose-600" href="/blog">Home</Link>
                        </div>
                        <div className="border-b border-rose-200 pb-3 w-full">
                            <Link className="text-rose-400 font-bold transition-all duration-500 hover:text-rose-600" href="/">Loja</Link>
                        </div>
                        <div className="border-b border-rose-200 pb-3 w-full">
                            <Link className="text-rose-400 font-bold transition-all duration-500 hover:text-rose-600" href="/prime">Prime</Link>
                        </div>
                        <div className="border-b border-rose-200 pb-3 w-full">
                            <Link className="text-rose-400 font-bold transition-all duration-500 hover:text-rose-600" href="/contact">Contato</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-96">
                    <h2 className="font-bold text-blog-post-title text-xl">Artigos Recentes</h2>
                    <div className="overflow-y-scroll cartScroll mt-3 h-48">
                        <div className="mt-3 flex gap-4">
                            <Image className="w-[100px] h-[100px] object-cover rounded-[13px]" src={postImage} width={100} height={100} alt="imagem do artigo" />
                            <div className="flex flex-col gap-4">
                                <h6 className="text-blog-post-title font-bold">Awesome Ia Translate texts in seconds</h6>
                                <div className="flex gap-4 items-center">
                                    <Image src={postAuthorImage} width={30} height={30} alt="imagem do autor do artigo" />
                                    <h6 className="text-rose-500 font-bold">John Doe</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 flex gap-4">
                            <Image className="w-[100px] h-[100px] object-cover rounded-[13px]" src={postImage} width={100} height={100} alt="imagem do artigo" />
                            <div className="flex flex-col gap-4">
                                <h6 className="text-blog-post-title font-bold">Awesome Ia Translate texts in seconds</h6>
                                <div className="flex gap-4 items-center">
                                    <Image src={postAuthorImage} width={30} height={30} alt="imagem do autor do artigo" />
                                    <h6 className="text-rose-500 font-bold">John Doe</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 flex gap-4">
                            <Image className="w-[100px] h-[100px] object-cover rounded-[13px]" src={postImage} width={100} height={100} alt="imagem do artigo" />
                            <div className="flex flex-col gap-4">
                                <h6 className="text-blog-post-title font-bold">Awesome Ia Translate texts in seconds</h6>
                                <div className="flex gap-4 items-center">
                                    <Image src={postAuthorImage} width={30} height={30} alt="imagem do autor do artigo" />
                                    <h6 className="text-rose-500 font-bold">John Doe</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center py-5">© 2024, <Link href="" className="text-rose-100">Myst1 Dev</Link></p>
        </>
    )
}