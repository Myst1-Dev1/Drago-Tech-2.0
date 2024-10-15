import { SideBar } from "@/components/blog/SideBar";
import Image from "next/image";
import postImage from "../../../../../public/images/blogPostImage.jpg"
import postAuthorImage from "../../../../../public/images/blogAuthor.jpg"
import userIcon from "../../../../../public/images/user-icon.webp"
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";

export default function ArticlePage() {
    return (
        <>
            <div className="px-4 lg:px-16 py-8 mb-20">
                    <div className="mt-8 w-full flex flex-wrap gap-8 lg:gap-0 justify-between">
                        <div className="max-w-[800px] flex flex-col gap-5">
                            <div className="h-fit flex flex-col items-center gap-5">
                                <Image className="rounded-[13px] object-cover w-full h-[330px]" src={postImage} width={800} height={330} alt="imagem do artigo" />
                                <div className="w-full flex flex-col gap-5">
                                    <h5 className="text-blog-post-title font-bold text-xl">Modern and Colorfull styles created by IA</h5>
                                    <div className="flex w-full justify-between items-center">
                                        <div className="flex gap-4 items-center">
                                            <Image src={postAuthorImage} width={50} height={50} alt="imagem do autor do artigo" />
                                            <h6 className="text-rose-500 font-bold">John Doe</h6>
                                        </div>
                                        <span className="text-blog-post-gray">12 de Novembro de 2023</span>
                                    </div>
                                    <p className="text-blog-post-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur ipsa, laudantium voluptate aliquid iste distinctio nostrum quam exercitationem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi unde blanditiis, consectetur provident similique temporibus, at excepturi iusto obcaecati debitis facere earum fugit sequi illo voluptates nulla nihil atque. Expedita.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center mt-10 border border-[#dedede] p-3 rounded-md w-full">
                                <Image src={userIcon} width={60} height={60} alt="icone de usuário" />
                                <input type="text" className="w-full outline-none bg-none" placeholder="Deixe um comentário" />
                            </div>
                            <div className="mt-8 flex flex-col gap-3 w-full">
                                <div className="flex items-center gap-4">
                                    <Image src={userIcon} width={60} height={60} alt="icone de usuário" />
                                    <h6 className="font-bold">John Doe</h6>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis inventore illum consequuntur dolore est nulla quisquam assumenda cumque commodi omnis ab laudantium veritatis, quasi, laboriosam sapiente! Tempore, harum iure?</p>
                                <FaThumbsUp className="cursor-pointer text-blog-post-gray transition-all duration-500 hover:text-rose-500" />
                            </div>
                            <div className="mt-8 flex flex-col gap-3 w-full">
                                <div className="flex items-center gap-4">
                                    <Image src={userIcon} width={60} height={60} alt="icone de usuário" />
                                    <h6 className="font-bold">John Doe</h6>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis inventore illum consequuntur dolore est nulla quisquam assumenda cumque commodi omnis ab laudantium veritatis, quasi, laboriosam sapiente! Tempore, harum iure?</p>
                                <FaThumbsUp className="cursor-pointer text-blog-post-gray transition-all duration-500 hover:text-rose-500" />
                            </div>
                            <div className="mt-5">
                                <h6 className="text-xl font-bold">Artigos Relacionados</h6>
                                <div className="mt-8 flex justify-center items-center flex-col lg:flex-row m-auto gap-5">
                                    <div className="flex gap-4">
                                        <Image className="max-w-[100px] w-full h-[100px] object-cover rounded-[13px]" src={postImage} width={100} height={100} alt="imagem do artigo" />
                                        <div className="flex flex-col gap-4">
                                            <h6 className="text-blog-post-title font-bold">Awesome Ia Translate texts in seconds</h6>
                                            <div className="flex gap-4 items-center">
                                                <Image src={postAuthorImage} width={30} height={30} alt="imagem do autor do artigo" />
                                                <h6 className="text-rose-500 font-bold">John Doe</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Image className="max-w-[100px] w-full h-[100px] object-cover rounded-[13px]" src={postImage} width={100} height={100} alt="imagem do artigo" />
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
                        <SideBar />
                </div>
            </div>
        </>
    )
}