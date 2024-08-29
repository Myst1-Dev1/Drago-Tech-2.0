'use server'

import { FetchProductDetails } from "@/services/fetchData/fetchProductDetails";
import { ProductContent } from "@/components/principal/ProductContent";

export default async function Product({ params: {slug} }:any) {
    const { products } = await FetchProductDetails(slug);

    const productData = Array(products);

    return (
        <>
            <ProductContent products={productData} />
        </>
    )
}