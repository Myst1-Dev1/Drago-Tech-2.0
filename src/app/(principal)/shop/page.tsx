'use server'

import { ShopContent } from "@/components/principal/ShopContent";
import { FetchProducts } from "@/services/fetchData/fetchProducts";
import { GetUser } from "@/services/fetchData/user";

export default async function Shop() {
    const products = await FetchProducts();
    const user = await GetUser();

    return (
        <>
            <ShopContent products = {products} user = {user} />
        </>
    )
}