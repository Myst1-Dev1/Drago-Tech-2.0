'use client';

import { FaArrowLeft, FaArrowRight, FaHeart, FaPlus, FaShoppingCart, FaStar } from "react-icons/fa";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import productImg from "../../../../public/images/productImg.jpg";
import Image from "next/image";
import { ProductsInformations } from "@/components/principal/ProductsInformations";
import { formatPrice } from "@/utils/useFormatPrice";
import { ProductNode } from "@/types/products";
import { useCart } from "@/services/hooks/useCart";

interface ProductContentProps {
    products:ProductNode[] | any;
}

export function ProductContent({ products }:ProductContentProps) {
    const { handleAddToCart } = useCart();

    function addProduct(id:number) {
        handleAddToCart(id, products);
    }

    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                    {products.map((products:any) => (
                    <div>
                        <h2 className="font-bold m-auto text-xl lg:text-2xl">{products.produtos.productName}</h2>
                        <div className="mt-12 gap-12 lg:justify-between xl:justify-between 2xl:justify-evenly lg:gap-0 items-center flex flex-col lg:flex-row">
                            <div className="max-w-[450px]">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <span className="text-gray-400">(2)</span>
                                    </div>
                                    <FaHeart className="text-gray-500 cursor-pointer transition-all duration-500 hover:text-red-500" />
                                </div>
                                <div>
                                    <Image className="w-full object-cover" src={products.produtos.image.node.mediaItemUrl} width={400} height={400} alt="imagem do produto" />
                                    <div className="max-w-[450px] overflow-x-auto flex justify-center items-center gap-8">
                                        <Image className="w-[80px] h-[80px] object-cover" src={products.produtos.image.node.mediaItemUrl} width={80} height={80} alt="imagem do produto" />
                                        <Image className="w-[80px] h-[80px] object-cover" src={products.produtos.image.node.mediaItemUrl} width={80} height={80} alt="imagem do produto" />
                                        <Image className="w-[80px] h-[80px] object-cover" src={products.produtos.image.node.mediaItemUrl} width={80} height={80} alt="imagem do produto" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-7">
                                <h3 className="font-bold text-2xl">{formatPrice(products.produtos.price)}</h3>
                                <p className="font-bold">
                                    Á vista com o Prime em até 5% OFF <br /> {formatPrice(products.produtos.price * 0.95)} <br /> Em até 10x de {formatPrice(products.produtos.price / 10)} sem juros no cartão <br /> Ou em 1x no cartão com 5% OFF
                                </p>
                                <button onClick={() => addProduct(products.produtos.id)} className="text-xl text-white flex items-center justify-center gap-4 font-bold bg-red-500 rounded-md max-w-60 w-full p-4 transition-all duration-500 hover:bg-red-700">
                                    <FaShoppingCart />
                                    Comprar
                                </button>
                                <div className="relative flex flex-col gap-4">
                                    <h6 className="text-xl font-bold">Produtos Similares</h6>
                                    <div className="max-w-[450px] overflow-x-hidden flex gap-8">
                                        <div className="z-50 bg-white -left-5 top-16 absolute aspect-square border border-gray-400 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                                            <MdOutlineArrowBackIos className="text-gray-500 text-sm" />
                                        </div>
                                        <Image className="w-[80px] h-[80px] object-cover" src={productImg} width={80} height={80} alt="imagem do produto" />
                                        <Image className="w-[80px] h-[80px] object-cover" src={productImg} width={80} height={80} alt="imagem do produto" />
                                        <Image className="w-[80px] h-[80px] object-cover" src={productImg} width={80} height={80} alt="imagem do produto" />
                                        <Image className="w-[80px] h-[80px] object-cover" src={productImg} width={80} height={80} alt="imagem do produto" />
                                        <Image className="w-[80px] h-[80px] object-cover -ml-5" src={productImg} width={80} height={80} alt="imagem do produto" />
                                        <div className="z-50 bg-white -right-5 top-16 absolute aspect-square border border-gray-400 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                                            <MdOutlineArrowForwardIos className="text-gray-500 text-sm" />
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>

                        <ProductsInformations description={products.produtos.description} id={products.produtos.id} />
                    </div>))}

                <div className="py-12">
                    <div className="flex gap-3 items-center">
                        <FaStar className="text-red-500" />
                        <h2 className="font-bold text-xl">Avaliações dos usuários</h2>
                    </div>
                    <div className="mt-12 flex flex-col gap-6 lg:gap-0 justify-between lg:flex-row">
                        <div className="m-auto lg:m-0 max-w-[450px] border-b border-gray-400 pb-4 flex flex-col gap-4">
                            <h5 className="font-bold">John doe</h5>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                </div>
                                <span className="text-gray-400">Avaliado em 12/04/2024</span>
                            </div>
                            <h6 className="font-bold">Incrível</h6>
                            <p>Este produto é de altissima qualidade me serviu muito bem tanto para trabalho quanto para estudo.</p>
                        </div>
                        <div className="m-auto lg:m-0 max-w-[450px] border-b border-gray-400 pb-4 flex flex-col gap-4">
                            <h5 className="font-bold">John doe</h5>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                </div>
                                <span className="text-gray-400">Avaliado em 12/04/2024</span>
                            </div>
                            <h6 className="font-bold">Incrível</h6>
                            <p>Este produto é de altissima qualidade me serviu muito bem tanto para trabalho quanto para estudo.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 py-12">
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

                <div className="py-12">
                    <div className="flex gap-3 items-center">
                        <FaPlus className="text-red-500" />
                        <h2 className="font-bold text-xl">Avaliar produto</h2>
                    </div>
                    <form className="mt-12 flex justify-center items-center m-auto flex-col gap-5 max-w-[900px]">
                        <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Nome" />
                        <select className="text-gray-400 outline-none p-4 rounded-md w-full border border-gray-300">
                            <option value="Longe do perfrito">Longe do perfeito</option>
                            <option value="Bom">Bom</option>
                            <option value="Incrível">Incrível</option>
                            <option value="Excelente">Excelente</option>
                        </select>
                        <textarea className="resize-none h-28 outline-none p-4 rounded-md w-full border border-gray-300" placeholder="Avaliação"/>
                        <button className="font-bold text-white bg-red-500 p-4 rounded-md max-w-96 w-full transition-all duration-500 hover:bg-red-700">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}