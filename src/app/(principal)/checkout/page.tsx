'use client';

import { useCart } from "@/services/hooks/useCart";
import { formatPrice } from "@/utils/useFormatPrice";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useState } from "react"
import { FaCreditCard } from "react-icons/fa";

export default function Checkout() {
    const { cart, totalCart } = useCart();
    const [step, setStep] = useState('1');
    const [isLoading, setIsLoading] = useState(false);

    const { 'user': userId } = parseCookies();

    const total = totalCart();

    console.log(step);

    async function handleCreateOrder(e:FormData | any) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formEntries = Object.fromEntries(formData.entries());
        const { numberContact, address, state, city, neighborhood, zipCode} = formEntries as { [key: string]: string };

        const order = {numberContact, address, state, city, neighborhood , zipCode}

        setIsLoading(true);

        try {
            await fetch('/api/products/orders', {
                method:'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    userId, order, cart
                }),
            }).then(async (res) => {
                const result = await res.json();
    
                if(result.status === 201) {
                    console.log(result.message);
                }else {
                    console.log(result.message);
                    setIsLoading(false)
                }

                setStep('2');
            });
        } catch (error) {
            console.log(error);
        }
    }

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
                            <div className={`transition-all duration-500 w-10 h-10 rounded-full ${step === '2' || step === '3' ? 'bg-red-600' : 'bg-gray-200'} text-white flex justify-center items-center`}>
                                <span>2</span>
                            </div>
                            <h6 className="font-bold lg:text-sm text-[9px]">Pagamento</h6>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className={`transition-all duration-500 w-10 h-10 rounded-full ${step === '3' ? 'bg-red-600' : 'bg-gray-200'} text-white flex justify-center items-center`}>
                                <span>3</span>
                            </div>
                            <h6 className="font-bold lg:text-sm text-[9px]">Finalizar compra</h6>
                        </div>
                    </div>
                    
                    {step === '1' && <form onSubmit={handleCreateOrder} className="mt-12 max-w-[500px] flex flex-col justify-center items-center m-auto" action="">
                        <div className="block lg:flex gap-5 mb-0 lg:mb-5">
                            <input name="numberContact" className="outline-none p-4 rounded-md w-full border border-gray-300" type="number" placeholder="Número para contato" />
                            <input name="address" className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Endereço" />
                        </div>
                        <div className="block lg:flex gap-5 mb-0 lg:mb-5">
                            <input name="state" className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Estado" />
                            <input name="city" className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Cidade" />
                        </div>
                        <div className="block lg:flex gap-5 mb-0 lg:mb-5">
                            <input name="neighborhood" className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Bairro" />
                            <input name="zipCode" className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="CEP" />
                        </div>
                        <textarea className="resize-none mb-5 outline-none p-4 rounded-md w-full h-28 border border-gray-300" placeholder="Ponto de referência"/>
                        <button className="p-4 rounded-md w-60 m-auto text-white font-bold bg-red-500 transition-all duration-500 hover:bg-red-700">
                        {isLoading ? 
                            <div role="status">
                            <svg aria-hidden="true" className="m-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-500 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        </div>
                        : 'Prosseguir'}
                        </button>
                    </form>}

                    {step === '2' && <form className="mt-12 max-w-[500px] flex flex-col justify-center items-center m-auto" action="">
                        <input className="outline-none p-4 mb-5 rounded-md w-full border border-gray-300" type="tel" placeholder="Número do cartão" />
                        <input className="outline-none p-4 mb-5 rounded-md w-full border border-gray-300" type="text" placeholder="Nome impresso no cartão" />
                        <div className="block lg:flex w-full gap-5 mb-0 lg:mb-5">
                            <input className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="tel" placeholder="Data de validade do cartão" />
                            <input className="mb-5 lg:mb-0 outline-none p-4 rounded-md w-full border border-gray-300" type="tel" placeholder="Crv" />
                        </div>
                        <button onClick={() => setStep('3')} className="p-4 rounded-md w-60 m-auto text-white font-bold bg-red-500 transition-all duration-500 hover:bg-red-700">Prosseguir</button>
                    </form>}

                    {step === '3' && <div className="mt-12 flex flex-col justify-center items-center m-auto">
                        <h2 className="font-bold text-xl">Resumo da compra</h2>
                        <div className="max-w-[500px] w-full mt-7">
                            <div className="mt-6 border-b flex flex-col gap-4 border-gray-400 pb-6">
                                {cart.map(item => (
                                <div key={item.product.id} className="flex justify-between w-full">
                                    <h6 className="max-w-[35ch] overflow-hidden text-ellipsis whitespace-nowrap">{item.product.name}</h6>
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
                                <Link href="/successPage">
                                    <button className="p-4 rounded-md w-60 m-auto text-white font-bold bg-red-500 transition-all duration-500 hover:bg-red-700">Finalizar pedido</button>
                                </Link>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}