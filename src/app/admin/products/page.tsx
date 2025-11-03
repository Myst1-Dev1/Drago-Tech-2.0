'use server';

import { FetchProducts } from "@/services/fetchData/fetchProducts";
import { AdminProductClient } from "@/components/admin/AdminProductContent";

export default async function Products() {
    const data = await FetchProducts();

    return (
        <>
            <AdminProductClient products={data} />
        </>
    )
}