'use server';

import { SideBar } from "@/components/admin/sideBar";
import { FetchProducts } from "@/services/fetchData/fetchProducts";
import { AdminProductClient } from "@/components/admin/AdminProductContent";

export default async function Products() {
    const data = await FetchProducts();

    return (
        <>
            <div className="flex">
                <SideBar />
                <AdminProductClient products={data} />
            </div>
        </>
    )
}