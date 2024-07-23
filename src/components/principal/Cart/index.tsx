import Image from "next/image";
import productImg from "../../../../public/images/productImg.jpg";
import { FaMinus, FaPlus, FaTimes, FaTrashAlt } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";

interface CartProps {
    setIsCartOpen:Dispatch<SetStateAction<boolean>>
}

export function Cart({ setIsCartOpen }:CartProps) {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-black/40">
                <div className="w-full lg:max-w-96 absolute right-0 bg-white h-screen">
                    <div className="p-5 flex h-full flex-col justify-between">
                        <div>
                            <div className="flex justify-between">
                                <h2 className="font-bold text-xl">Meu carrinho</h2>
                                <FaTimes onClick={() => setIsCartOpen(false)} className="cursor-pointer transition-all duration-500 hover:text-red-500" />
                            </div>
                            <div className="mt-12 overflow-y-scroll h-40">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-6">    
                                        <Image className="w-[120px] h-[120px] object-cover" src={productImg} width={120} height={120} alt="imagem do produto no carrinho" />
                                        <div className="flex flex-col gap-4">
                                            <h5>Asus vivobook</h5>
                                            <h6 className="font-bold text-xl">R$:2345,00</h6>
                                            <div className="flex">
                                                <div className="flex justify-center items-center w-[30px] h-[30px] p-2 border border-gray-300 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white hover:border-none">
                                                    <FaMinus />
                                                </div>
                                                <div className="flex justify-center items-center w-[30px] h-[30px] p-2 border border-gray-300 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white hover:border-none">
                                                    <span>01</span>
                                                </div>
                                                <div className="flex justify-center items-center w-[30px] h-[30px] p-2 border border-gray-300 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white hover:border-none">
                                                    <FaPlus />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <FaTrashAlt className="cursor-pointer text-red-500 transition-all duration-500 hover:text-red-700" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-6">    
                                        <Image className="w-[120px] h-[120px] object-cover" src={productImg} width={120} height={120} alt="imagem do produto no carrinho" />
                                        <div className="flex flex-col gap-4">
                                            <h5>Asus vivobook</h5>
                                            <h6 className="font-bold text-xl">R$:2345,00</h6>
                                            <div className="flex">
                                                <div className="flex justify-center items-center w-[30px] h-[30px] p-2 border border-gray-300 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white hover:border-none">
                                                    <FaMinus />
                                                </div>
                                                <div className="flex justify-center items-center w-[30px] h-[30px] p-2 border border-gray-300 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white hover:border-none">
                                                    <span>01</span>
                                                </div>
                                                <div className="flex justify-center items-center w-[30px] h-[30px] p-2 border border-gray-300 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white hover:border-none">
                                                    <FaPlus />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <FaTrashAlt className="cursor-pointer text-red-500 transition-all duration-500 hover:text-red-700" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-bold text-xl mb-4">Resumo</h5>
                            <div className="border-b border-gray-300 pb-2 flex justify-between">
                                <h6>Valor total:</h6>
                                <h6 className="font-bold">R$:0,00</h6>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <h6>Frete:</h6>
                                <h6 className="font-bold">R$:0,00</h6>
                            </div>
                            <button className="mt-5 bg-red-500 p-4 w-full rounded-md text-white transition-all duration-500 hover:bg-red-600">Ir para o pagamento</button>
                            <button className="mt-4 border border-red-500 p-4 w-full rounded-md transition-all duration-500 hover:bg-red-600">Continuar comprando</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}