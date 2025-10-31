'use client';

import { Product } from "@/types/products";
import { formatPrice } from "@/utils/useFormatPrice";
import Image from "next/image";
import { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { CreateProductForm } from "./CreateProductForm";
import { deleteProduct } from "@/actions/productActions";

interface AdminProductClientProps {
    products: Product[];
}

export function AdminProductClient({ products }:AdminProductClientProps) {
    const [openProductForm, setOpenProductForm] = useState(false);

    return (
        <>
            <div className="flex-1">
                <div className="border-b border-gray-300 pb-1 w-full flex justify-between items-center">
                    <h1 className="px-4 py-3 text-xl font-semibold">Produtos</h1>
                    <button onClick={() => setOpenProductForm(!openProductForm)} className="font-semibold text-white p-2 rounded-lg my-2 h-fit mr-4 bg-red-500 w-fit transition-all duration-500 hover:bg-red-700">
                        {!openProductForm ? <>Adicionar novo produto <span className="font-bold text-xl">+</span></> : <>Voltar</>}
                    </button>
                </div>
                {openProductForm === false
                    ?
                    <div className="py-12 px-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        {products?.map((product: Product) => (
                            <div key={product.id} className="relative max-w-60 w-full p-3 grid grid-cols-1 place-items-center">
                                <Image src={product.imageUrl || "/images/productImg.jpg"} className="mb-3 max-w-28 h-28 w-full object-cover" width={300} height={300} alt="foto do produto" />
                                <span className="font-normal text-gray-400 mr-auto">{product.category}</span>
                                <h2 className="font-semibold py-3">{product.name}</h2>
                                <h3 className="text-xl font-bold">{formatPrice(product.price)}</h3>
                                <div className="flex gap-3 absolute top-1 right-1">
                                    <span className="bg-green-500 text-white rounded-md cursor-pointer h-7 text-sm w-7 grid place-items-center transition-all duration-500 hover:brightness-90"><FaPencilAlt /></span>
                                    <span onClick={() => deleteProduct(product.id)} className="bg-red-600 text-white rounded-md cursor-pointer h-7 text-sm w-7 grid place-items-center transition-all duration-500 hover:brightness-90"><FaTrashAlt /></span>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <CreateProductForm setOpenProductForm = {setOpenProductForm} />
                }
            </div>
        </>
    )
}