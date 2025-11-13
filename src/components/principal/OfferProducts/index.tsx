'use client';

import Image from "next/image";
import limitedTimeImage from "../../../../public/images/timeOfferImage.png";
import { FaHeart, FaShareAlt, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { formatPrice } from "@/utils/useFormatPrice";
import Link from "next/link";
import { useCart } from "@/services/hooks/useCart";
import { toast } from "react-toastify";
import { favoriteAProduct } from "@/actions/productActions";
import { User } from "@/types/user";

interface OfferProductsProps {
    products: Product[];
    user: User;
}

export function OfferProducts({ products, user }:OfferProductsProps) {
    const { handleAddToCart } = useCart();

    const initialTime = 24 * 60 * 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    const offerProducts = products?.filter(product => product.isOffer);

    function addProduct(id:number) {
        handleAddToCart(id, offerProducts);
    }

    function handleCopyLink (id:string | any) {
        const productUrl = `${window.location.origin}/product/${id}`;
        navigator.clipboard.writeText(productUrl)
          .then(() => {
            toast.success("Link copiado para a área de transferência!");
          })
          .catch(err => {
            console.error("Falha ao copiar o link: ", err);
          });
      };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');

    return (
        <>
            <div className="px-4 lg:px-28 py-12 grid gap-4 grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center items-center w-full bg-[#101015] rounded-md p-5">
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-white text-2xl text-center">Edição Limitada Especial</h2>
                        <p className="text-gray-400 text-center">Não Perca Tempo Promoção Relampago!. <br /> Confira Nossos Produtos em Promoção Por Tempo Ilimitado</p>
                        <div className="flex gap-1 text-white text-2xl m-auto">
                            <span>{hours}:</span>
                            <span>{minutes}:</span>
                            <span>{seconds}</span>
                        </div>
                    </div>
                    <Image className="object-cover mt-10" src={limitedTimeImage} width={350} height={200} alt="imagem da edição especial" />
                </div>
                <div className="flex flex-col gap-5 w-full">
                    {offerProducts?.length === 0 ? 'Não há produtos em oferta' : offerProducts?.map(offer => (
                        <div key={offer.id} className="p-5 border border-gray-200 rounded-md flex flex-wrap justify-between items-center w-full transition-all duration-500 hover:bg-black hover:text-white">
                            <Link href={`/product/${offer.id}`}>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Image className="m-auto" src={offer.imageUrl} width={100} height={100} alt="imagem do produto" />
                                    <div className="flex items-start flex-col gap-3">
                                        <span className="gray-400">Laptop</span>
                                        <p className='text-sm max-w-[20ch] overflow-hidden text-ellipsis whitespace-nowrap'>{offer.name}</p>
                                        <div className="flex flex-col gap-1">
                                            <h6 className="line-through text-gray-400 font-normal text-sm">{formatPrice(offer.price)}</h6>
                                            <h6 className="mb-5 lg:mb-0 text-xl font-bold text-center">{formatPrice(offer.priceOffer)}</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="flex flex-row lg:flex-col gap-4 m-auto lg:m-0">
                                <div onClick={() => addProduct(offer.id)} className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                    <FaShoppingCart />
                                </div>
                                <div className={`${user?.favorites?.some((fav: any) => Number(fav.id) === Number(offer.id)) ? 'bg-red-500 text-white' : 'border border-red-300 text-red-300'} cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white`}>
                                    <FaHeart onClick={() => favoriteAProduct(offer.id)} />
                                </div>
                                <div onClick={() => handleCopyLink(offer.id)} className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                    <FaShareAlt />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}