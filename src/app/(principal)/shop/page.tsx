'use server'

import { ShopContent } from "@/components/principal/ShopContent";
import { FetchProducts } from "@/services/fetchData/fetchProducts";

export default async function Shop() {
    const { products } = await FetchProducts();

    return (
        <>
            <ShopContent products = {products} />
        </>
    )
}