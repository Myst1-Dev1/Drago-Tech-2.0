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

    const productsFiltered = filteredCategories.length === 0
    ? products
    : products.filter(product => 
        filteredCategories.some((filter: any) => 
            product.produtos.category.includes(filter) || product.produtos.brand.includes(filter)
        )
    );

    const productFilteredByPrice = products.filter(product => {
        return product.produtos.price >= filterPrice;
    });

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-12 px-4 py-8">
                <ShopFilter filterPrice={filterPrice} setFilterPrice={setFilterPrice} setLoading = {setLoading} setFilteredCategory={setFilteredCategories} />
                <div>
                    <ShopProducts loading = {loading} filteredCategory={filteredCategories} filterPrice={filterPrice} productFilteredByPrice={productFilteredByPrice} products={products} productsFiltered = {productsFiltered} />
                    <Pagination />
                </div>
            </div>
        </>
    )
}