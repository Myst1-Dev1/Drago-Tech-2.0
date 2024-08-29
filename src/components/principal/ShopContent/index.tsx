'use client';

import { Pagination } from "../Pagination";
import { ShopFilter } from "../ShopFilter";
import { ShopProducts } from "../ShopProducts";
import { ProductNode } from "@/types/products";
import { useState } from "react";

interface ShopContentProps {
    products:ProductNode[];
}

export function ShopContent({ products }:ShopContentProps) {
    const [filteredCategories, setFilteredCategories] = useState<string[] | any>([]);
    const [loading, setLoading] = useState(false);
    const [filterPrice, setFilterPrice] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const itensPerPage = 12;
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const productsData = products.slice(startIndex, endIndex);

    const productsFiltered = filteredCategories.length === 0
    ? productsData
    : products.filter(product => 
        filteredCategories.some((filter: any) => 
            product.produtos.category.includes(filter) || product.produtos.brand.includes(filter)
        )
    );

    const productFilteredByPrice = productsData.filter(product => {
        return product.produtos.price >= filterPrice;
    });

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-12 px-4 py-8">
                <ShopFilter filterPrice={filterPrice} setFilterPrice={setFilterPrice} setLoading = {setLoading} setFilteredCategory={setFilteredCategories} />
                <div>
                    <ShopProducts loading = {loading} filteredCategory={filteredCategories} filterPrice={filterPrice} productFilteredByPrice={productFilteredByPrice} products={productsData} productsFiltered = {productsFiltered} />
                    <Pagination setLoading = {setLoading} itensPerPage = {itensPerPage} productsData = {products} currentPage = {currentPage} setCurrentPage = {setCurrentPage} />
                </div>
            </div>
        </>
    )
}