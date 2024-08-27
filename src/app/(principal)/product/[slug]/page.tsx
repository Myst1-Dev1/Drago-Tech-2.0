'use server'

import { FetchProductDetails } from "@/services/fetchData/fetchProductDetails";
import { ProductContent } from "@/components/principal/ProductContent";

export default async function Product({ params: {slug} }:any) {
    const { products } = await FetchProductDetails(slug);

    return (
        <>
            <ProductContent products={products} />
        </>
    )
}