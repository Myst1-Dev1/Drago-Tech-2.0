import Image from "next/image";
import productImg from "../../../../public/images/productImg.jpg";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export function RecomendedProducts() {
    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                <h2 className="font-bold text-2xl">Produtos recomendados</h2>
                <div className="mt-10 grid xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 justify-center items-center m-auto">
                    <div className="mb-5 m-auto relative overflow-hidden max-w-[250px] flex flex-col gap-4 transition-all duration-300 hover:scale-110 group">
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
                    <div className="mb-5 m-auto relative overflow-hidden max-w-[250px] flex flex-col gap-4 transition-all duration-300 hover:scale-110 group">
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
                    <div className="mb-5 m-auto relative overflow-hidden max-w-[250px] flex flex-col gap-4 transition-all duration-300 hover:scale-110 group">
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
                    <div className="mb-5 m-auto relative overflow-hidden max-w-[250px] flex flex-col gap-4 transition-all duration-300 hover:scale-110 group">
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
            </div>
        </>
    )
}