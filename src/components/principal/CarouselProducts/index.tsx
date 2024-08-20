'use client';

import Image from "next/image";
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaHeart, FaShoppingCart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ProductNode } from "@/types/products"
import { formatPrice } from "@/utils/useFormatPrice";
import { SkeletonProducts } from "../SkeletonProducts";
import Link from "next/link";
import { useCart } from "@/services/hooks/useCart";

interface CarouselProductsProps {
    productsArray: ProductNode[];
}

export function CarouselProducts({ productsArray }: CarouselProductsProps) {
    const { handleAddToCart } = useCart();

    function addProduct(id:number) {
        handleAddToCart(id, productsArray);
    }

    return( 
        <>
            <div className="mt-10 relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                            disabledClass: "swiper-button-disabled-custom"
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1350: {
                                slidesPerView:4,
                                spaceBetween:30
                            },
                            1600: {
                                slidesPerView:5,
                                spaceBetween:30
                            }
                        }}
                    >
                    {productsArray.length === 0 ? <SkeletonProducts count={productsArray.length} /> : productsArray?.map(product => (
                        <SwiperSlide key={product.produtos.id}>
                            <div className="mb-8 m-auto relative overflow-hidden max-w-[250px] transition-all duration-300 hover:scale-110 group">
                                <Link className="flex flex-col gap-4" href={`/product/${product.slug}`}>
                                    <Image className="object-cover m-auto" src={product.produtos.image.node?.mediaItemUrl} width={150} height={150} alt="imagem do produto" />
                                    <span className="text-zinc-400">{product.produtos.category}</span>
                                    <p className='text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap'>{product.produtos.productName}</p>
                                    <h6 className="text-xl font-bold text-center">{formatPrice(product.produtos.price)}</h6>
                                </Link>
                                <div onClick={() => addProduct(product.produtos.id)} className="text-red-300 cursor-pointer absolute right-0 top-0 lg:top-[15px] lg:right-[-100%] w-8 h-8 lg:w-[40px] lg:h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-2">
                                    <FaShoppingCart />
                                </div>
                                <div className="text-red-300 cursor-pointer absolute right-0 top-[65px] lg:right-[-100%] w-8 h-8 lg:w-[40px] lg:h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-2">
                                    <FaHeart />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    <div>
                        <div className="swiper-button-prev-custom w-10 h-10 border border-gray-400 rounded-md flex justify-center items-center absolute right-16 group transition-all cursor-pointer duration-500 hover:bg-red-500 hover:border-0"><FaArrowLeft className="text-zinc-500 group-hover:text-white"/></div>
                        <div className="swiper-button-next-custom w-10 h-10 border border-gray-400 rounded-md flex justify-center items-center absolute right-0 transition-all duration-500 group cursor-pointer hover:bg-red-500 hover:border-0"><FaArrowRight className="text-zinc-500 group-hover:text-white"/></div>
                    </div>
                </div>
        </>
    )
}