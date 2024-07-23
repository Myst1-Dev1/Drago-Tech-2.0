import Image from "next/image";
import limitedTimeImage from "../../../../public/images/timeOfferImage.png";
import productImage from "../../../../public/images/productImg.jpg";
import { FaHeart, FaShareAlt, FaShoppingCart } from "react-icons/fa";

export function OfferProducts() {
    return (
        <>
            <div className="px-4 lg:px-28 py-12 grid gap-4 grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center items-center w-full bg-[#101015] rounded-md p-5">
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-white text-2xl text-center">Edição Limitada Especial</h2>
                        <p className="text-gray-400 text-center">Não Perca Tempo Promoção Relampago!. <br /> Confira Nossos Produtos em Promoção Por Tempo Ilimitado</p>
                        <div className="flex gap-1 text-white text-2xl m-auto">
                            <span>00:</span>
                            <span>00:</span>
                            <span>00</span>
                        </div>
                    </div>
                    <Image className="object-cover mt-10" src={limitedTimeImage} width={350} height={200} alt="imagem da edição especial" />
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <div className="p-5 border border-gray-200 rounded-md flex flex-wrap justify-between items-center w-full transition-all duration-500 hover:bg-black hover:text-white">
                        <div className="flex flex-wrap items-center gap-4">
                            <Image className="m-auto" src={productImage} width={100} height={100} alt="imagem do produto" />
                            <div className="flex items-start flex-col gap-3">
                                <span className="gray-400">Laptop</span>
                                <p className='text-sm max-w-[20ch] overflow-hidden text-ellipsis whitespace-nowrap'>Notebook ASUS Vivobook 15, AMD Ryzen 7, 4800H SSD, 256GB, 8GB, KeepOS, Tela 15,60", Icelight Silver - M1502IA-EJ252</p>
                                <div className="flex flex-col gap-1">
                                    <del className="text-gray-400 font-normal text-sm">R$:2345,00</del>
                                    <h6 className="mb-5 lg:mb-0 text-xl font-bold text-center">R$:1989,00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-col gap-4 m-auto lg:m-0">
                            <div className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                <FaShoppingCart />
                            </div>
                            <div className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                <FaHeart />
                            </div>
                            <div className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className="p-5 border border-gray-200 rounded-md flex flex-wrap justify-between items-center w-full transition-all duration-500 hover:bg-black hover:text-white">
                        <div className="flex flex-wrap items-center gap-4">
                            <Image className="m-auto" src={productImage} width={100} height={100} alt="imagem do produto" />
                            <div className="flex items-start flex-col gap-3">
                                <span className="gray-400">Laptop</span>
                                <p className='text-sm max-w-[20ch] overflow-hidden text-ellipsis whitespace-nowrap'>Notebook ASUS Vivobook 15, AMD Ryzen 7, 4800H SSD, 256GB, 8GB, KeepOS, Tela 15,60", Icelight Silver - M1502IA-EJ252</p>
                                <div className="flex flex-col gap-1">
                                    <del className="text-gray-400 font-normal text-sm">R$:2345,00</del>
                                    <h6 className="mb-5 lg:mb-0 text-xl font-bold text-center">R$:1989,00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-col gap-4 m-auto lg:m-0">
                            <div className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                <FaShoppingCart />
                            </div>
                            <div className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                <FaHeart />
                            </div>
                            <div className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className="p-5 border border-gray-200 rounded-md flex flex-wrap justify-between items-center w-full transition-all duration-500 hover:bg-black hover:text-white">
                        <div className="flex flex-wrap items-center gap-4">
                            <Image className="m-auto" src={productImage} width={100} height={100} alt="imagem do produto" />
                            <div className="flex items-start flex-col gap-3">
                                <span className="gray-400">Laptop</span>
                                <p className='text-sm max-w-[20ch] overflow-hidden text-ellipsis whitespace-nowrap'>Notebook ASUS Vivobook 15, AMD Ryzen 7, 4800H SSD, 256GB, 8GB, KeepOS, Tela 15,60", Icelight Silver - M1502IA-EJ252</p>
                                <div className="flex flex-col gap-1">
                                    <del className="text-gray-400 font-normal text-sm">R$:2345,00</del>
                                    <h6 className="mb-5 lg:mb-0 text-xl font-bold text-center">R$:1989,00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-col gap-4 m-auto lg:m-0">
                            <div className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                <FaShoppingCart />
                            </div>
                            <div className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                <FaHeart />
                            </div>
                            <div className="text-red-300 cursor-pointer w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white">
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}