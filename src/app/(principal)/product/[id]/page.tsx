'use server'

import { FetchProductDetails } from "@/services/fetchData/fetchProductDetails";
import { ProductContent } from "@/components/principal/ProductContent";
import { GetUser } from "@/services/fetchData/user";

export default async function Product({ params }: any) {
    const { id } = await params;
    
    const product = await FetchProductDetails(id);

    const user = await GetUser();

    const data = Array(product);

    return (
        <>
            <ProductContent product={data} user = {user} />
        </>
    )
}