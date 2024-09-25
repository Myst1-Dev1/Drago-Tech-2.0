'use client';

import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import Image from "next/image";
import { ProductsInformations } from "@/components/principal/ProductsInformations";
import { formatPrice } from "@/utils/useFormatPrice";
import { ProductNode } from "@/types/products";
import { useCart } from "@/services/hooks/useCart";
import { SimilarProducts } from "./SimilarProducts";
import { ProductComments } from "./ProductComments";
import { ProductForm } from "./ProductForm";

interface ProductContentProps {
    products:ProductNode[];
}

export function ProductContent({ products }:ProductContentProps) {
    const { handleAddToCart } = useCart();

    function addProduct(id:number) {
        handleAddToCart(id, products);
    }

    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                    {products.map((products) => (
                    <div key={products.produtos.id}>
                        <h2 className="font-bold m-auto text-xl lg:text-2xl">{products.produtos.productName}</h2>
                        <div className="mt-12 gap-12 lg:justify-between xl:justify-between 2xl:justify-evenly lg:gap-0 items-center flex flex-col lg:flex-row">
                            <div className="max-w-[450px]">
                                <div className="flex justify-end items-end">
                                    {/* <div className="flex items-center gap-3">
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <span className="text-gray-400">(2)</span>
                                    </div> */}
                                    <FaHeart className="text-gray-500 cursor-pointer transition-all duration-500 hover:text-red-500" />
                                </div>
                                <div>
                                    <Image className="w-full object-cover" src={products.produtos.image.node.mediaItemUrl} width={400} height={400} alt="imagem do produto" />
                                    <div className="max-w-[450px] overflow-x-auto flex justify-center items-center gap-8">
                                        <Image className="w-[80px] h-[80px] object-cover" src={products.produtos.image.node.mediaItemUrl} width={80} height={80} alt="imagem do produto" />
                                        <Image className="w-[80px] h-[80px] object-cover" src={products.produtos.image.node.mediaItemUrl} width={80} height={80} alt="imagem do produto" />
                                        <Image className="w-[80px] h-[80px] object-cover" src={products.produtos.image.node.mediaItemUrl} width={80} height={80} alt="imagem do produto" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-7">
                                <h3 className="font-bold text-2xl">{formatPrice(products.produtos.price)}</h3>
                                <p className="font-bold">
                                    Á vista com o Prime em até 5% OFF <br /> {formatPrice(products.produtos.price * 0.95)} <br /> Em até 10x de {formatPrice(products.produtos.price / 10)} sem juros no cartão <br /> Ou em 1x no cartão com 5% OFF
                                </p>
                                <button onClick={() => addProduct(products.produtos.id)} className="text-xl text-white flex items-center justify-center gap-4 font-bold bg-red-500 rounded-md max-w-60 w-full p-4 transition-all duration-500 hover:bg-red-700">
                                    <FaShoppingCart />
                                    Comprar
                                </button>
                              <SimilarProducts similarProducts = {products.produtos.similarProducts.itens?.nodes} />
                            </div>
                        </div>

                        <ProductsInformations description={products.produtos.description} id={products.produtos.id} />
                        <ProductComments comments={products.comments?.nodes} />
                        <ProductForm commentOn = {products.databaseId} />
                    </div>))}
            </div>
        </>
    )
}