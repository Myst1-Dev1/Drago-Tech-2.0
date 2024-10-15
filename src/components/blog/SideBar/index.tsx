'use client';

import postImage from "../../../../public/images/blogPostImage.jpg"
import postAuthorImage from "../../../../public/images/blogAuthor.jpg"
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function SideBar() {
    return (
        <>
            <div className="flex flex-col gap-20 m-auto lg:m-0 px-4 lg:px-0">
                <div className="bg-white h-fit shadow-sm max-w-80 lg:max-w-96 w-full rounded-[13px] p-4">
                    <h3 className="font-bold text-xl">Artigos Populares</h3>
                    <div className="mt-5 flex gap-4">
                        <Image className="max-w-[100px] w-full h-[100px] object-cover rounded-[13px]" src={postImage} width={100} height={100} alt="imagem do artigo" />
                        <div className="flex flex-col gap-4">
                            <h6 className="text-blog-post-title font-bold">Awesome Ia Translate texts in seconds</h6>
                            <div className="flex gap-4 items-center">
                                <Image src={postAuthorImage} width={30} height={30} alt="imagem do autor do artigo" />
                                <h6 className="text-rose-500 font-bold">John Doe</h6>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex gap-4">
                        <Image className="max-w-[100px] w-full h-[100px] object-cover rounded-[13px]" src={postImage} width={100} height={100} alt="imagem do artigo" />
                        <div className="flex flex-col gap-4">
                            <h6 className="text-blog-post-title font-bold">Awesome Ia Translate texts in seconds</h6>
                            <div className="flex gap-4 items-center">
                                <Image src={postAuthorImage} width={30} height={30} alt="imagem do autor do artigo" />
                                <h6 className="text-rose-500 font-bold">John Doe</h6>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex gap-4">
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
                <div className="relative bg-white h-fit shadow-sm max-w-80 lg:max-w-96 w-full rounded-[13px] p-4">
                    <h3 className="font-bold text-xl">Categorias</h3>
                    <Swiper
                        slidesPerView={1}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".category-next-arrow",
                            prevEl: ".category-prev-arrow",
                        }}
                    >
                        <SwiperSlide>
                            <div className="mt-3 max-w-72 m-auto">
                                <Image className="m-auto w-full h-[150px] object-cover rounded-[13px]" src={postImage} width={288} height={150} alt="imagem do artigo" />
                                <div className="mt-3">
                                    <div>
                                        <h6 className="text-blog-post-title font-bold">Inteligência Artificial</h6>
                                        <span className="text-blog-post-gray mt-2">9 Artigos</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mt-3 max-w-72 m-auto">
                                <Image className="m-auto w-full h-[150px] object-cover rounded-[13px]" src={postImage} width={288} height={150} alt="imagem do artigo" />
                                <div className="mt-3">
                                    <div>
                                        <h6 className="text-blog-post-title font-bold">Javascript</h6>
                                        <span className="text-blog-post-gray mt-2">9 Artigos</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex gap-3 absolute right-12 bottom-8 z-50">
                        <div className="category-prev-arrow cursor-pointer w-[30px] h-[30px] bg-rose-500 text-white rounded-full flex justify-center items-center transition-all duration-500 hover:bg-rose-600"><FaArrowLeft /></div>
                        <div className="category-next-arrow cursor-pointer w-[30px] h-[30px] bg-rose-500 text-white rounded-full flex justify-center items-center transition-all duration-500 hover:bg-rose-600"><FaArrowRight /></div>
                    </div>
                </div>
            </div>
        </>
    )
}