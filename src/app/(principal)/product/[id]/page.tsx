'use server'

import { FetchProductDetails } from "@/services/fetchData/fetchProductDetails";
import { ProductContent } from "@/components/principal/ProductContent";

export default async function Product({ params }: any) {
    const { id } = await params;
    
    const product = await FetchProductDetails(id);

    const data = Array(product);

    return (
        <>
            <ProductContent product={data} />
        </>
    )
}