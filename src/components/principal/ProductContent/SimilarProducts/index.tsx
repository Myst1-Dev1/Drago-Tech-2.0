import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import { SimilarProduct } from '@/types/products';
import Link from 'next/link';

interface SimilarProductsProps {
    similarProducts:SimilarProduct[];
}

export function SimilarProducts({ similarProducts }:SimilarProductsProps) {
    return (
        <>
              <div className="relative flex flex-col gap-4">
                <h6 className="text-xl font-bold">Produtos Similares</h6>
                <div className="max-w-[380px] overflow-x-hidden flex gap-8">
                    <div className="cursor-pointer similar-product-button-prev-custom z-50 bg-white -left-5 top-16 absolute aspect-square border border-gray-400 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                        <MdOutlineArrowBackIos className="text-gray-500 text-sm" />
                    </div>
                    <Swiper
                         modules={[Navigation]}
                         navigation={{
                             nextEl: ".similar-product-button-next-custom",
                             prevEl: ".similar-product-button-prev-custom",
                         }}
                         breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 3,
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
                        {similarProducts?.map(similarProduct => (
                            <SwiperSlide key={similarProduct.id} className='!w-[80px]'>
                                <Link href={`/product/${similarProduct.slug}`}>
                                    <Image className="w-[80px] h-[80px] object-cover" src={similarProduct?.produtos.image.node?.mediaItemUrl} width={80} height={80} alt="imagem do produto" />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="cursor-pointer similar-product-button-next-custom z-50 bg-white -right-5 top-16 absolute aspect-square border border-gray-400 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                        <MdOutlineArrowForwardIos className="text-gray-500 text-sm" />
                    </div>
                </div> 
            </div>
        </>
    )
}