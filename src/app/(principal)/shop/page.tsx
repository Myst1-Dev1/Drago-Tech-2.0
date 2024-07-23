import Image from "next/image";
import productImg from "../../../../public/images/productImg.jpg";
import { FaArrowLeft, FaArrowRight, FaHeart, FaShoppingCart } from "react-icons/fa";
import { ShopFilter } from "@/components/principal/ShopFilter";

export default function Shop() {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-12 px-4 lg:px-20 py-8">
                <ShopFilter />
                <div>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 py-8">
                        <div className="mb-5 m-auto relative overflow-hidden max-w-[200px] flex flex-col gap-4 transition-all duration-300 hover:scale-110 group">
                            <Image className="object-cover m-auto" src={productImg} width={150} height={150} alt="imagem do produto" />
                            <span className="text-gray-400">Laptop</span>
                            <p className='text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap'>Notebook ASUS Vivobook 15, AMD Ryzen 7, 4800H SSD, 256GB, 8GB, KeepOS, Tela 15,60", Icelight Silver - M1502IA-EJ252</p>
                            <h6 className="text-xl font-bold text-center">R$:2345,00</h6>
                            <div className="text-red-300 cursor-pointer absolute top-[15px] right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaShoppingCart />
                            </div>
                            <div className="text-red-300 cursor-pointer absolute top-[65px] right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaHeart />
                            </div>
                        </div>
                        <div className="mb-5 m-auto relative overflow-hidden max-w-[200px] flex flex-col gap-4 transition-all duration-300 hover:scale-110 group">
                            <Image className="object-cover m-auto" src={productImg} width={150} height={150} alt="imagem do produto" />
                            <span className="text-gray-400">Laptop</span>
                            <p className='text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap'>Notebook ASUS Vivobook 15, AMD Ryzen 7, 4800H SSD, 256GB, 8GB, KeepOS, Tela 15,60", Icelight Silver - M1502IA-EJ252</p>
                            <h6 className="text-xl font-bold text-center">R$:2345,00</h6>
                            <div className="text-red-300 cursor-pointer absolute top-[15px] right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaShoppingCart />
                            </div>
                            <div className="text-red-300 cursor-pointer absolute top-[65px] right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaHeart />
                            </div>
                        </div>
                        <div className="mb-5 m-auto relative overflow-hidden max-w-[200px] flex flex-col gap-4 transition-all duration-300 hover:scale-110 group">
                            <Image className="object-cover m-auto" src={productImg} width={150} height={150} alt="imagem do produto" />
                            <span className="text-gray-400">Laptop</span>
                            <p className='text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap'>Notebook ASUS Vivobook 15, AMD Ryzen 7, 4800H SSD, 256GB, 8GB, KeepOS, Tela 15,60", Icelight Silver - M1502IA-EJ252</p>
                            <h6 className="text-xl font-bold text-center">R$:2345,00</h6>
                            <div className="text-red-300 cursor-pointer absolute top-[15px] right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaShoppingCart />
                            </div>
                            <div className="text-red-300 cursor-pointer absolute top-[65px] right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaHeart />
                            </div>
                        </div>
                        <div className="mb-5 m-auto relative overflow-hidden max-w-[200px] flex flex-col gap-4 transition-all duration-300 hover:scale-110 group">
                            <Image className="object-cover m-auto" src={productImg} width={150} height={150} alt="imagem do produto" />
                            <span className="text-gray-400">Laptop</span>
                            <p className='text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap'>Notebook ASUS Vivobook 15, AMD Ryzen 7, 4800H SSD, 256GB, 8GB, KeepOS, Tela 15,60", Icelight Silver - M1502IA-EJ252</p>
                            <h6 className="text-xl font-bold text-center">R$:2345,00</h6>
                            <div className="text-red-300 cursor-pointer absolute top-[15px] right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaShoppingCart />
                            </div>
                            <div className="text-red-300 cursor-pointer absolute top-[65px] right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaHeart />
                            </div>
                        </div>
                        <div className="mb-5 m-auto relative overflow-hidden max-w-[200px] flex flex-col gap-4 transition-all duration-300 hover:scale-110 group">
                            <Image className="object-cover m-auto" src={productImg} width={150} height={150} alt="imagem do produto" />
                            <span className="text-gray-400">Laptop</span>
                            <p className='text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap'>Notebook ASUS Vivobook 15, AMD Ryzen 7, 4800H SSD, 256GB, 8GB, KeepOS, Tela 15,60", Icelight Silver - M1502IA-EJ252</p>
                            <h6 className="text-xl font-bold text-center">R$:2345,00</h6>
                            <div className="text-red-300 cursor-pointer absolute top-[15px] right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaShoppingCart />
                            </div>
                            <div className="text-red-300 cursor-pointer absolute top-[65px] right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaHeart />
                            </div>
                        </div>
                    </div>
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
                </div>

            </div>
        </>
    )
}