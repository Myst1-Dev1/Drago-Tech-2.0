import Image from "next/image";
import blogPostImage from "../../../../public/images/blogPostImage.jpg"
import blogAuthor from "../../../../public/images/blogAuthor.jpg";
import { FaComments } from "react-icons/fa";
import Link from "next/link";

export function KnowOurBlog() {
    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                <h2 className="font-bold text-2xl">Conheça o Drago Blog</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="max-w-60 m-auto mb-8 lg:m-0 flex flex-col gap-4">
                        <Image className="object-cover w-full" src={blogPostImage} width={200} height={200} alt="imagem do post do blog" />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold">Entenda de que forma a IA ajuda a otimizar a cobrança em grandes empresas</h3>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <Image src={blogAuthor} width={50} height={50} alt="imagem do autor do artigo" />
                                    <h6 className="text-rose-500">John Doe</h6>
                                </div>
                                <span className="text-gray-500 text-sm">12/11/2023</span>
                            </div>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
                            <div className="flex w-full justify-between items-center">
                                <Link href=""><button className="max-w-72 rounded-md bg-rose-500 text-white m-auto p-3 transition-all duration-500 hover:bg-rose-600">Leia Mais</button></Link>
                                <div className="flex items-center gap-2">
                                    <FaComments className="text-rose-500" />
                                    <span>01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-60 m-auto mb-8 lg:m-0 flex flex-col gap-4">
                        <Image className="object-cover w-full" src={blogPostImage} width={200} height={200} alt="imagem do post do blog" />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold">Entenda de que forma a IA ajuda a otimizar a cobrança em grandes empresas</h3>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <Image src={blogAuthor} width={50} height={50} alt="imagem do autor do artigo" />
                                    <h6 className="text-rose-500">John Doe</h6>
                                </div>
                                <span className="text-gray-500 text-sm">12/11/2023</span>
                            </div>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
                            <div className="flex w-full justify-between items-center">
                                <Link href=""><button className="max-w-72 rounded-md bg-rose-500 text-white m-auto p-3 transition-all duration-500 hover:bg-rose-600">Leia Mais</button></Link>
                                <div className="flex items-center gap-2">
                                    <FaComments className="text-rose-500" />
                                    <span>01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-60 m-auto mb-8 lg:m-0 flex flex-col gap-4">
                        <Image className="object-cover w-full" src={blogPostImage} width={200} height={200} alt="imagem do post do blog" />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold">Entenda de que forma a IA ajuda a otimizar a cobrança em grandes empresas</h3>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <Image src={blogAuthor} width={50} height={50} alt="imagem do autor do artigo" />
                                    <h6 className="text-rose-500">John Doe</h6>
                                </div>
                                <span className="text-gray-500 text-sm">12/11/2023</span>
                            </div>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
                            <div className="flex w-full justify-between items-center">
                                <Link href=""><button className="max-w-72 rounded-md bg-rose-500 text-white m-auto p-3 transition-all duration-500 hover:bg-rose-600">Leia Mais</button></Link>
                                <div className="flex items-center gap-2">
                                    <FaComments className="text-rose-500" />
                                    <span>01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-60 m-auto mb-8 lg:m-0 flex flex-col gap-4">
                        <Image className="object-cover w-full" src={blogPostImage} width={200} height={200} alt="imagem do post do blog" />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold">Entenda de que forma a IA ajuda a otimizar a cobrança em grandes empresas</h3>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <Image src={blogAuthor} width={50} height={50} alt="imagem do autor do artigo" />
                                    <h6 className="text-rose-500">John Doe</h6>
                                </div>
                                <span className="text-gray-500 text-sm">12/11/2023</span>
                            </div>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
                            <div className="flex w-full justify-between items-center">
                                <Link href=""><button className="max-w-72 rounded-md bg-rose-500 text-white m-auto p-3 transition-all duration-500 hover:bg-rose-600">Leia Mais</button></Link>
                                <div className="flex items-center gap-2">
                                    <FaComments className="text-rose-500" />
                                    <span>01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}