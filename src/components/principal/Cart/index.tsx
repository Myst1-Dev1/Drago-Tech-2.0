import Image from "next/image";
import { FaMinus, FaPlus, FaTimes, FaTrashAlt } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { useCart } from "@/services/hooks/useCart";
import { formatPrice } from "@/utils/useFormatPrice";
import Link from "next/link";

interface CartProps {
    setIsCartOpen:Dispatch<SetStateAction<boolean>>
}

export function Cart({ setIsCartOpen }:CartProps) {
    const { cart, totalCart, handleDeleteProductToCart, handleIncreaseQuantity ,handleDecreaseQuantity } = useCart();

    const totalPrice = totalCart();

    return (
        <>
            <div className="z-50 animate-fadeIn fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-black/40">
                <div className="w-full lg:max-w-96 absolute right-0 bg-white h-screen">
                    <div className="p-5 flex h-full flex-col justify-between">
                        <div>
                            <div className="flex justify-between">
                                <h2 className="font-bold text-xl">Meu carrinho</h2>
                                <FaTimes onClick={() => setIsCartOpen(false)} className="cursor-pointer transition-all duration-500 hover:text-red-500" />
                            </div>
                            <div className="flex flex-col gap-5 mt-12 overflow-y-scroll cartScroll h-[450px] lg:h-60 2xl:h-[600px]">
                                {cart.length === 0 ? 'Não há itens no seu carrinho' : cart?.map(item => (
                                    <div key={item.product.id} className="flex justify-between items-center">
                                        <div className="flex items-center gap-6">    
                                            <Image className="w-[80px] h-[80px] object-cover" src={item.product.image.node.mediaItemUrl} width={80} height={80} alt="imagem do produto no carrinho" />
                                            <div className="flex flex-col gap-4">
                                                <h5>{item.product.productName}</h5>
                                                <h6 className="font-bold text-xl">{formatPrice(item.product.price * item.quantity)}</h6>
                                                <div className="flex">
                                                    <div onClick={() => handleDecreaseQuantity(item.product.id)} className="flex justify-center items-center w-[30px] h-[30px] p-2 border border-gray-300 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white hover:border-none">
                                                        <FaMinus />
                                                    </div>
                                                    <div className="flex justify-center items-center w-[30px] h-[30px] p-2 border border-gray-300 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white hover:border-none">
                                                        <span>{item.quantity}</span>
                                                    </div>
                                                    <div onClick={() => handleIncreaseQuantity(item.product.id)} className="flex justify-center items-center w-[30px] h-[30px] p-2 border border-gray-300 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white hover:border-none">
                                                        <FaPlus />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <FaTrashAlt onClick={(() => handleDeleteProductToCart(item.product.id))} className="flex-shrink-0 cursor-pointer text-red-500 transition-all duration-500 hover:text-red-700" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-bold text-xl mb-4">Resumo</h5>
                            <div className="border-b border-gray-300 pb-2 flex justify-between">
                                <h6>Valor total:</h6>
                                <h6 className="font-bold">{formatPrice(Number(totalPrice))}</h6>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <h6>Frete:</h6>
                                <h6 className="font-bold">{formatPrice(Number(totalPrice) + 5)}</h6>
                            </div>
                            <Link onClick={() => setIsCartOpen(false)} href="/checkout" className={`${cart.length === 0 ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                                <button className={`${cart.length === 0 ? 'opacity-55' : 'opacity-100'} mt-5 bg-red-500 p-4 w-full rounded-md text-white transition-all duration-500 hover:bg-red-600`}>Ir para o pagamento</button>
                            </Link>
                            {/* <button className="mt-4 border border-red-500 p-4 w-full rounded-md transition-all duration-500 hover:bg-red-600">Continuar comprando</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}