import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

export default function SuccessPage() {
    return (
        <>
            <div className="px-4 m-auto py-16 flex justify-center items-center flex-col gap-4 ">
                <FaCircleCheck className="text-[100px] text-green-400" />
                <h2 className="text-2xl font-bold">Obrigado pela compra, seu pedido chegará em breve</h2>
                <div className="flex gap-8 justify-center items-center flex-wrap">
                    <Link href="/profile">
                        <button className="w-60 border border-zinc-500 p-4 rounded-md transition-all duration-500 font-bold hover:bg-red-600 hover:border-none hover:text-white">Ver pedido</button>
                    </Link>
                    <Link href="/shop">
                        <button className="w-60 bg-red-500 text-white p-4 rounded-md transition-all duration-500 font-bold hover:bg-red-600">Continue comprando</button>
                    </Link>
                </div>
            </div>
        </>
    )
}