'use server'

import { FetchProductDetails } from "@/services/fetchData/fetchProductDetails";
import { ProductContent } from "@/components/principal/ProductContent";
import { cookies } from "next/headers";
import { fetchUser } from "@/services/fetchData/fetchUser";

export default async function Product({ params: {slug} }:any) {
    const { products } = await FetchProductDetails(slug);

    const productData = Array(products);

    const cookie: any = cookies().get('user');
    const userId = cookie?.value;

    const user = await fetchUser(userId);

    return (
        <>
            <ProductContent products={productData} user={user} />
        </>
    )
}