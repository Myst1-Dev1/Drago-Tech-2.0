'use server'

import { ShopContent } from "@/components/principal/ShopContent";
import { FetchProducts } from "@/services/fetchData/fetchProducts";
import { fetchUser } from "@/services/fetchData/fetchUser";
import { cookies } from "next/headers";

export default async function Shop() {
    const products = await FetchProducts();

    const cookie: any = cookies().get('user');
    const userId = cookie?.value;

    const user = await fetchUser(userId);

    return (
        <>
            <ShopContent products = {products} user={user} />
        </>
    )
}