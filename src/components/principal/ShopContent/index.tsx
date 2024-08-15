'use client';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ShopFilter } from "../ShopFilter";
import { ShopProducts } from "../ShopProducts";
import { ProductNode } from "@/types/products";
import { useState } from "react";

interface ShopContentProps {
    products:ProductNode[];
}

export function ShopContent({ products }:ShopContentProps) {
    const [filteredCategories, setFilteredCategories] = useState<string[] | any>([]);

    const productsFiltered = filteredCategories.length === 0
    ? products
    : products.filter(product => 
        filteredCategories.some((category:any) => product.produtos.category.includes(category))
    );

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-12 px-4 lg:px-20 py-8">
                <ShopFilter setFilteredCategory={setFilteredCategories} />
                <div>
                    <ShopProducts filteredCategory={filteredCategories} products={products} productsFiltered = {productsFiltered} />
                    <div className="flex justify-center items-center gap-5">
                        <div className="cursor-pointer p-2 flex justify-center items-center bg-black rounded-md transition-all duration-500 hover:bg-red-600">
                            <FaArrowLeft className="text-white" />
                        </div>
                        <span className="cursor-pointer text-white p-4 flex justify-center items-center bg-black rounded-md w-5 h-5 transition-all duration-500 hover:bg-red-600">1</span>
                        <span className="cursor-pointer text-white p-4 flex justify-center items-center bg-black rounded-md w-5 h-5 transition-all duration-500 hover:bg-red-600">2</span>
                        <span className="cursor-pointer text-white p-4 flex justify-center items-center bg-black rounded-md w-5 h-5 transition-all duration-500 hover:bg-red-600">3</span>
                        <div className="cursor-pointer p-2 flex justify-center items-center bg-black rounded-md transition-all duration-500 hover:bg-red-600">
                            <FaArrowRight className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}