import Image from "next/image";
import blogPostImage from "../../../../public/images/blogPostImage.jpg"
import logo from "../../../../public/images/logo.jpg"
import { FaCalendarAlt, FaComment } from "react-icons/fa";
import Link from "next/link";

export function KnowOurBlog() {
    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                <h2 className="font-bold text-2xl">Conheça o Drago Blog</h2>
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-4">
                    <Link href="" className="max-w-64 m-auto mb-8 lg:m-0 flex flex-col gap-4">
                        <Image className="object-cover w-full" src={blogPostImage} width={200} height={200} alt="imagem do post do blog" />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold">Entenda de que forma a IA ajuda a otimizar a cobrança em grandes empresas</h3>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <span>2</span>
                                    <FaComment />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span>03/04/2024</span>
                                    <FaCalendarAlt />
                                </div>
                                <Image className="object-cover" src={logo} width={30} height={30} alt="logo do drago tech" />
                            </div>
                        </div>
                    </Link>
                    <Link href="" className="max-w-64 m-auto mb-8 lg:m-0 flex flex-col gap-4">
                        <Image className="object-cover w-full" src={blogPostImage} width={200} height={200} alt="imagem do post do blog" />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold">Entenda de que forma a IA ajuda a otimizar a cobrança em grandes empresas</h3>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <span>2</span>
                                    <FaComment />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span>03/04/2024</span>
                                    <FaCalendarAlt />
                                </div>
                                <Image className="object-cover" src={logo} width={30} height={30} alt="logo do drago tech" />
                            </div>
                        </div>
                    </Link>
                    <Link href="" className="max-w-64 m-auto mb-8 lg:m-0 flex flex-col gap-4">
                        <Image className="object-cover w-full" src={blogPostImage} width={200} height={200} alt="imagem do post do blog" />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold">Entenda de que forma a IA ajuda a otimizar a cobrança em grandes empresas</h3>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <span>2</span>
                                    <FaComment />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span>03/04/2024</span>
                                    <FaCalendarAlt />
                                </div>
                                <Image className="object-cover" src={logo} width={30} height={30} alt="logo do drago tech" />
                            </div>
                        </div>
                    </Link>
                    <Link href="" className="max-w-64 m-auto mb-8 lg:m-0 flex flex-col gap-4">
                        <Image className="object-cover w-full" src={blogPostImage} width={200} height={200} alt="imagem do post do blog" />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold">Entenda de que forma a IA ajuda a otimizar a cobrança em grandes empresas</h3>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <span>2</span>
                                    <FaComment />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span>03/04/2024</span>
                                    <FaCalendarAlt />
                                </div>
                                <Image className="object-cover" src={logo} width={30} height={30} alt="logo do drago tech" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )

}