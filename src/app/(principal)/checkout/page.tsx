'use client';

import { useCart } from "@/services/hooks/useCart";
import { formatPrice } from "@/utils/useFormatPrice";
import { useState } from "react"
import { FaCreditCard } from "react-icons/fa";

export default function Checkout() {
    const { cart, totalCart } = useCart();
    const [step, setStep] = useState('1');

    const total = totalCart();

    return (
        <>
            <div className="px-4 py-12 m-auto flex flex-col">
                <div>
                    <div className="flex justify-between items-center m-auto w-full max-w-[500px]">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className={`w-10 h-10 rounded-full ${step === '1' || step === '2' || step === '3' ? 'bg-red-600' : 'bg-gray-200'} text-white flex justify-center items-center`}>
                                <span>1</span>
                            </div>
                            <h6 className="font-bold lg:text-sm text-[9px]">Informações do pagamento</h6>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className={`w-10 h-10 rounded-full ${step === '2' || step === '3' ? 'bg-red-600' : 'bg-gray-200'} text-white flex justify-center items-center`}>
                                <span>2</span>
                            </div>
                            <h6 className="font-bold lg:text-sm text-[9px]">Pagamento</h6>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className={`w-10 h-10 rounded-full ${step === '3' ? 'bg-red-600' : 'bg-gray-200'} text-white flex justify-center items-center`}>
                                <span>3</span>
                            </div>
                            <h6 className="font-bold lg:text-sm text-[9px]">Finalizar compra</h6>
                        </div>
                    </div>
                    
                    {step === '1' && <form className="mt-12 max-w-[500px] flex flex-col justify-center items-center m-auto" action="">
                        <div className="block lg:flex gap-5 mb-0 lg:mb-5">
                            <input className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Nome" />
                            <input className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="email" placeholder="Email" />
                        </div>
                        <input className="outline-none p-4 mb-5 rounded-md w-full border border-gray-300" type="number" placeholder="Número para contato" />
                        <input className="outline-none p-4 mb-5 rounded-md w-full border border-gray-300" type="text" placeholder="Endereço" />
                        <div className="block lg:flex gap-5 mb-0 lg:mb-5">
                            <input className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Estado" />
                            <input className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Cidade" />
                        </div>
                        <div className="block lg:flex gap-5 mb-0 lg:mb-5">
                            <input className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Bairro" />
                            <input className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="CEP" />
                        </div>
                        {/* <select className="outline-none p-4 mb-5 text-gray-400 rounded-md w-full border border-gray-300">
                            <option value="PIX">PIX</option>
                            <option value="Cartão">Cartão</option>
                        </select> */}
                        <textarea className="resize-none mb-5 outline-none p-4 text-gray-400 rounded-md w-full h-28 border border-gray-300" placeholder="Ponto de referência"/>
                        <button className="p-4 rounded-md w-60 m-auto text-white font-bold bg-red-500 transition-all duration-500 hover:bg-red-700">Prosseguir</button>
                    </form>}

                    {step === '2' && <form className="mt-12 max-w-[500px] flex flex-col justify-center items-center m-auto" action="">
                        <input className="outline-none p-4 mb-5 rounded-md w-full border border-gray-300" type="tel" placeholder="Número do cartão" />
                        <input className="outline-none p-4 mb-5 rounded-md w-full border border-gray-300" type="text" placeholder="Nome impresso no cartão" />
                        <div className="block lg:flex w-full gap-5 mb-0 lg:mb-5">
                            <input className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="tel" placeholder="Data de validade do cartão" />
                            <input className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="tel" placeholder="Crv" />
                        </div>
                        <button className="p-4 rounded-md w-60 m-auto text-white font-bold bg-red-500 transition-all duration-500 hover:bg-red-700">Prosseguir</button>
                    </form>}

                    {step === '3' && <div className="mt-12 flex flex-col justify-center items-center m-auto">
                        <h2 className="font-bold text-xl">Resumo da compra</h2>
                        <div className="max-w-[500px] w-full mt-7">
                            <div className="mt-6 border-b flex flex-col gap-4 border-gray-400 pb-6">
                                {cart.map(item => (
                                <div key={item.product.id} className="flex justify-between w-full">
                                    <h6 className="max-w-[35ch] overflow-hidden text-ellipsis whitespace-nowrap">{item.product.productName}</h6>
                                    <h6 className="font-bold">{formatPrice(item.product.price)}</h6>
                                </div>
                                ))}
                                <div className="flex justify-between w-full">
                                    <h6>Forma de pagamento</h6>
                                    <h6 className="font-bold flex items-center gap-2">Cartao <FaCreditCard /></h6>
                                </div>
                            </div>
                            <div className="flex justify-between w-full py-6">
                                <h6>Valor total</h6>
                                <h6 className="font-bold">{formatPrice(Number(total) + 5)}</h6>
                            </div>
                            <div className="grid place-items-center">
                                <button className="p-4 rounded-md w-60 m-auto text-white font-bold bg-red-500 transition-all duration-500 hover:bg-red-700">Realizar pagamento</button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}