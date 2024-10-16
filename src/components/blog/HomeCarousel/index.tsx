'use client';

import Image from "next/image";
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import postImage from "../../../../public/images/blogPostImage.jpg"
import authorImage from "../../../../public/images/blogAuthor.jpg";

export function HomeCarousel() {

    const carouselData = [
        {
            id:1,
            slide:postImage,
            title:'Lorem ipsum is simply dummy about the industry of technology',
            description:'The world of technology about the years has been increased more and more lorem industry about years has been increased more and more after years ...',
            authorImg:authorImage,
            author: 'John Doe',
            createdAt: '21 de outubro de 2023'
        },
        {
            id:2,
            slide:postImage,
            title:'Lorem ipsum is simply dummy about the industry of technology',
            description:'The world of technology about the years has been increased more and more ...',
            authorImg:authorImage,
            author: 'John Doe',
            createdAt: '21 de outubro de 2023'
        },
        {
            id:3,
            slide:postImage,
            title:'Lorem ipsum is simply dummy about the industry of technology',
            description:'The world of technology about the years has been increased more and more ...',
            authorImg:authorImage,
            author: 'John Doe',
            createdAt: '21 de outubro de 2023'
        },
    ]

    return (
        <>
            <Swiper
                className="!mr-0 !ml-0 home-swiper home-carousel"
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: ".swiper-button-next-blog-custom",
                    prevEl: ".swiper-button-prev-blog-custom",
                }}
                pagination={{
                    clickable: true,
                }}
                >
                {carouselData.map((data, index) => (
                    <SwiperSlide key={data.id} className="flex items-center justify-center">
                    <div className="flex-wrap px-4 lg:px-16 relative z-20 flex flex-col lg:flex-row items-center justify-center gap-5">
                        <Image
                        className="rounded-[13px] lg:max-w-[700px] 2xl:max-w-[900px] w-full h-[400px] object-cover"
                        src={data.slide}
                        width={700}
                        height={400}
                        alt="imagem do post em destaque"
                        />
                        <div className="lg:flex flex-col gap-4 p-5 rounded-tr-[13px] rounded-br-[13px] shadow-md bg-white h-[360px] lg:max-w-[450px] w-full">
                            <div className="flex m-auto gap-5 w-full lg:max-w-96">
                                <span className="flex-shrink-0 bg-rose-500 rounded-full w-5 h-5 text-white flex justify-center items-center">
                                {index + 1}
                                </span>
                                <div className="border-b border-[#EBEBEB] pb-3 flex flex-col gap-3">
                                    <h2 className="font-bold">{data.title}</h2>
                                    <div>
                                        <p className="text-[#777778] text-sm">{data.description}</p>
                                        <div className="flex justify-between items-center w-full mt-3">
                                        <div className="flex items-center gap-4">
                                            <Image
                                            src={data.authorImg}
                                            width={40}
                                            height={40}
                                            alt="imagem do autor do artigo"
                                            />
                                            <h6 className="text-rose-500 font-bold">{data.author}</h6>
                                        </div>
                                        <span className="text-[#777778]">{data.createdAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>

                {/* <svg className="absolute top-0 z-0" width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shape-rendering="auto" fill="#ffffff">
                    <defs>
                    <path id="wavepath" d="M 0 2000 0 500 Q 150 428 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z" />
                    <path id="motionpath" d="M -600 0 0 0" /> 
                    </defs>
                    <g >
                    <use xlinkHref="#wavepath" y="390" fill="#fff1f2">
                    <animateMotion
                        dur="5s"
                        repeatCount="indefinite">
                        <mpath xlinkHref="#motionpath" />
                    </animateMotion>
                    </use>
                    </g>
                </svg> */}
        </>
    )
}