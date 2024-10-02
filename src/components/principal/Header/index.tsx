'use server'

import { FetchProducts } from "@/services/fetchData/fetchProducts";
import { HeaderContent } from "./HeaderContent";

export async function Header() {
    const { products } = await FetchProducts();

    return (
        <>
            <HeaderContent products={products} />
        </>
    )
}