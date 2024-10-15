import { HomeCarousel } from "@/components/blog/HomeCarousel";
import postImage from "../../../public/images/blogPostImage.jpg"
import postAuthorImage from "../../../public/images/blogAuthor.jpg"
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaComments } from "react-icons/fa";
import { SideBar } from "@/components/blog/SideBar";

export default function Home() {
    return (
        <>
            <HomeCarousel />

            <div className="px-4 lg:px-16 py-16">
                <h2 className="font-bold text-2xl">Últimos Artigos</h2>
                <div className="mt-8 w-full flex flex-wrap gap-8 lg:gap-0 justify-between">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-wrap items-center gap-5">
                            <Image className="rounded-[13px] object-cover w-full lg:max-w-[330px] h-[330px]" src={postImage} width={330} height={330} alt="imagem do artigo" />
                            <div className="w-full lg:max-w-96 flex flex-col gap-5">
                                <h5 className="text-blog-post-title font-bold text-xl">Modern and Colorfull styles created by IA</h5>
                                <div className="flex w-full justify-between items-center">
                                    <div className="flex gap-4 items-center">
                                        <Image src={postAuthorImage} width={50} height={50} alt="imagem do autor do artigo" />
                                        <h6 className="text-rose-500 font-bold">John Doe</h6>
                                    </div>
                                    <span className="text-blog-post-gray">12 de Novembro de 2023</span>
                                </div>
                                <p className="text-blog-post-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur ipsa, laudantium voluptate aliquid iste distinctio nostrum quam exercitationem ...</p>
                                <div className="flex w-full justify-between">
                                    <Link href="">
                                        <button className="p-3 bg-rose-500 text-white rounded-md max-w-28 font-bold w-full transition-all duration-500 hover:bg-rose-600">Leia Mais</button>
                                    </Link>
                                    <div className="flex items-center gap-3">
                                        <FaComments className="text-rose-500" />
                                        <span>01</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <Image className="rounded-[13px] object-cover w-full lg:max-w-[330px] h-[330px]" src={postImage} width={330} height={330} alt="imagem do artigo" />
                            <div className="w-full lg:max-w-96 flex flex-col gap-5">
                                <h5 className="text-blog-post-title font-bold text-xl">Modern and Colorfull styles created by IA</h5>
                                <div className="flex w-full justify-between items-center">
                                    <div className="flex gap-4 items-center">
                                        <Image src={postAuthorImage} width={50} height={50} alt="imagem do autor do artigo" />
                                        <h6 className="text-rose-500 font-bold">John Doe</h6>
                                    </div>
                                    <span className="text-blog-post-gray">12 de Novembro de 2023</span>
                                </div>
                                <p className="text-blog-post-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur ipsa, laudantium voluptate aliquid iste distinctio nostrum quam exercitationem ...</p>
                                <div className="flex w-full justify-between">
                                    <Link href="">
                                        <button className="p-3 bg-rose-500 text-white rounded-md max-w-28 font-bold w-full transition-all duration-500 hover:bg-rose-600">Leia Mais</button>
                                    </Link>
                                    <div className="flex items-center gap-3">
                                        <FaComments className="text-rose-500" />
                                        <span>01</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <Image className="rounded-[13px] object-cover w-full lg:max-w-[330px] h-[330px]" src={postImage} width={330} height={330} alt="imagem do artigo" />
                            <div className="w-full lg:max-w-96 flex flex-col gap-5">
                                <h5 className="text-blog-post-title font-bold text-xl">Modern and Colorfull styles created by IA</h5>
                                <div className="flex w-full justify-between items-center">
                                    <div className="flex gap-4 items-center">
                                        <Image src={postAuthorImage} width={50} height={50} alt="imagem do autor do artigo" />
                                        <h6 className="text-rose-500 font-bold">John Doe</h6>
                                    </div>
                                    <span className="text-blog-post-gray">12 de Novembro de 2023</span>
                                </div>
                                <p className="text-blog-post-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur ipsa, laudantium voluptate aliquid iste distinctio nostrum quam exercitationem ...</p>
                                <div className="flex w-full justify-between">
                                    <Link href="">
                                        <button className="p-3 bg-rose-500 text-white rounded-md max-w-28 font-bold w-full transition-all duration-500 hover:bg-rose-600">Leia Mais</button>
                                    </Link>
                                    <div className="flex items-center gap-3">
                                        <FaComments className="text-rose-500" />
                                        <span>01</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-10 flex justify-end gap-3">
                            <button className="bg-rose-500 text-white font-bold rounded-md p-2 transition-all duration-500 hover:bg-rose-600"><FaArrowLeft /></button>
                            <button className="bg-rose-500 text-white font-bold rounded-md p-2 transition-all duration-500 hover:bg-rose-600">1</button>
                            <button className="bg-rose-500 text-white font-bold rounded-md p-2 transition-all duration-500 hover:bg-rose-600">2</button>
                            <button className="bg-rose-500 text-white font-bold rounded-md p-2 transition-all duration-500 hover:bg-rose-600">3</button>
                            <button className="bg-rose-500 text-white font-bold rounded-md p-2 transition-all duration-500 hover:bg-rose-600"><FaArrowRight /></button>
                        </div>
                    </div>
                    <SideBar />
                </div>
            </div>
        </>
    )
}