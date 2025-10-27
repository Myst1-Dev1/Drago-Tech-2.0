'use server'

import { HeaderContent } from "./HeaderContent";
import { FetchProducts } from "@/services/fetchData/fetchProducts";

export async function Header() {
    const products = await FetchProducts();

    return (
        <>
            <HeaderContent products={products} />
        </>
    )
}