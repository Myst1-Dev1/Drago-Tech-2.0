import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Pagination() {
    return (
        <>
            <div className="flex justify-center items-center gap-5">
                <div className="cursor-pointer p-2 flex justify-center items-center bg-black rounded-md transition-all duration-500 hover:bg-red-600">
                    <FaArrowLeft className="text-white" />
                </div>
                <span className="cursor-pointer text-white p-4 flex justify-center items-center bg-black rounded-md w-5 h-5 transition-all duration-500 hover:bg-red-600">1</span>
                <span className="cursor-pointer text-white p-4 flex justify-center items-center bg-black rounded-md w-5 h-5 transition-all duration-500 hover:bg-red-600">2</span>
                <span className="cursor-pointer text-white p-4 flex justify-center items-center bg-black rounded-md w-5 h-5 transition-all duration-500 hover:bg-red-600">3</span>
                <div className="cursor-pointer p-2 flex justify-center items-center bg-black rounded-md transition-all duration-500 hover:bg-red-600">
                    <FaArrowRight className="text-white" />
                </div>
            </div>
        </>
    )
}