'use client'

import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { ProductNode } from "@/types/products";
import { formatPrice } from "@/utils/useFormatPrice";
import Link from "next/link";
import { SkeletonProducts } from "../SkeletonProducts";
import { useCart } from "@/services/hooks/useCart";

interface ShopProductsProps {
    products:ProductNode[];
}

export function ShopProducts({ products }:ShopProductsProps) {
    const { handleAddToCart } = useCart();

    function addProduct(id:number) {
        handleAddToCart(id, products);
    }

    return (
        <>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 py-8">
                {products.length === 0 ? <SkeletonProducts /> : products?.map(product => (
                <div key={product.produtos.id} className="mb-5 m-auto relative overflow-hidden max-w-[200px] transition-all duration-300 hover:scale-110 group">
                    <Link className="flex flex-col gap-4" href={`product/${product.slug}`}>
                    <Image className="object-cover m-auto" src={product.produtos.image.node.mediaItemUrl} width={100} height={100} alt="imagem do produto" />
                    <span className="text-gray-400">{product.produtos.category}</span>
                    <p className='text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap'>{product.produtos.productName}</p>
                    <h6 className="text-xl font-bold text-center">{formatPrice(product.produtos.price)}</h6>
                    </Link>
                    <div onClick={() => addProduct(product.produtos.id)} className="text-red-300 cursor-pointer absolute right-0 top-0 lg:top-[15px] lg:right-[-100%] w-8 h-8 rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-2">
                        <FaShoppingCart />
                    </div>
                    <div className="text-red-300 cursor-pointer absolute right-0 top-[65px] lg:right-[-100%] w-8 h-8  rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-2">
                        <FaHeart />
                    </div>
                </div>
                ))}
            </div>    
        </>
    )
}