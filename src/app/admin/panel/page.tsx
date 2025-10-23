import { SideBar } from "@/components/admin/sideBar";

export default function Panel() {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-1 p-3">
                    <h1>hello</h1>
                </div>
            </div>
        </>
    )
}