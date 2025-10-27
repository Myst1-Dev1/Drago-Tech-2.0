'use client';

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { ProductsInformations } from "@/components/principal/ProductsInformations";
import { formatPrice } from "@/utils/useFormatPrice";
import { Product } from "@/types/products";
import { useCart } from "@/services/hooks/useCart";
import { SimilarProducts } from "./SimilarProducts";
import { ProductComments } from "./ProductComments";
import { ProductForm } from "./ProductForm";

interface ProductContentProps {
    product:Product[];
}

export function ProductContent({ product }:ProductContentProps) {
    const { handleAddToCart } = useCart();

    function addProduct(id:number) {
        handleAddToCart(id, product);
    }

    console.log(product);

    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                    {product?.map((products) => (
                    <div key={products.id}>
                        <h2 className="font-bold m-auto text-xl lg:text-2xl">{products.name}</h2>
                        <div className="mt-12 gap-12 lg:justify-between xl:justify-between 2xl:justify-evenly lg:gap-0 items-center flex flex-col lg:flex-row">
                            <div className="max-w-[450px]">
                                <div className="flex justify-end items-end">
                                    <FaHeart className={`text-gray-500 cursor-pointer transition-all duration-500 hover:text-red-500`} />
                                </div>
                                <div>
                                    <Image className="w-full py-4 object-cover" src={products.imageUrl} width={400} height={400} alt="imagem do produto" />
                                    <div className="max-w-[450px] overflow-x-auto flex justify-center items-center gap-8">
                                        <Image className="w-[80px] h-[80px] object-cover" src={products.imageUrl} width={80} height={80} alt="imagem do produto" />
                                        <Image className="w-[80px] h-[80px] object-cover" src={products.imageUrl} width={80} height={80} alt="imagem do produto" />
                                        <Image className="w-[80px] h-[80px] object-cover" src={products.imageUrl} width={80} height={80} alt="imagem do produto" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-7">
                                <h3 className="font-bold text-2xl">{formatPrice(products.price)}</h3>
                                <p className="font-bold">
                                    Á vista com o Prime em até 5% OFF <br /> {formatPrice(products.price * 0.95)} <br /> Em até 10x de {formatPrice(products.price / 10)} sem juros no cartão <br /> Ou em 1x no cartão com 5% OFF
                                </p>
                                <button onClick={() => addProduct(products.id)} className="text-xl text-white flex items-center justify-center gap-4 font-bold bg-red-500 rounded-md max-w-60 w-full p-4 transition-all duration-500 hover:bg-red-700">
                                    <FaShoppingCart />
                                    Comprar
                                </button>
                              {products.similarProduct.length === undefined ? '' : <SimilarProducts similarProducts = {products.similarProduct} />}
                            </div>
                        </div>

                        <ProductsInformations info={products.techInfo} description={products.description} />
                        <ProductComments comments={products.comments} />
                        <ProductForm commentOn = {products.id} />
                    </div>))}
            </div>
        </>
    )
}