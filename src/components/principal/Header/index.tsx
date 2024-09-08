'use server'

import { FetchProducts } from "@/services/fetchData/fetchProducts";
import { HeaderContent } from "./HeaderContent";
import { getServerSession } from "next-auth";
import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";

export async function Header() {
    const { products } = await FetchProducts();

    const session = await getServerSession(OPTIONS);

    return (
        <>
            <HeaderContent products={products} session = {session} />
        </>
    )
}