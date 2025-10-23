import { SideBar } from "@/components/admin/sideBar";

export default function Products() {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <div className="border-b border-gray-300 w-full">
                        <h1 className="px-4 py-3 text-xl font-semibold">Produtos</h1>
                    </div>
                </div>
            </div>
        </>
    )
}