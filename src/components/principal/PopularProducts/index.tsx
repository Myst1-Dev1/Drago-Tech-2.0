import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { ProductNode } from "@/types/products";
import { formatPrice } from "@/utils/useFormatPrice";
  
interface PopularProductsProps {
    products: ProductNode[];
}
  
export function PopularProducts({ products }:PopularProductsProps) {
    const popularProducts = products.filter(product => product.produtos.popularProduct);

    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                <h2 className="font-bold text-2xl">Produtos populares</h2>
                <div className="mt-10 grid xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 justify-center items-center m-auto">
                    {popularProducts?.map(product => (
                        <div key={product.produtos.id} className="mb-5 m-auto relative overflow-hidden max-w-[250px] flex flex-col gap-4 transition-all duration-300 hover:scale-110 group">
                            <Image className="object-cover m-auto" src={product.produtos.image.node.mediaItemUrl} width={150} height={150} alt="imagem do produto" />
                            {/* <span className="text-gray-400">Laptop</span> */}
                            <p className='text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap'>{product.produtos.productName}</p>
                            <h6 className="text-xl font-bold text-center">{formatPrice(product.produtos.price)}</h6>
                            <div className="text-red-300 cursor-pointer absolute right-0 top-0 lg:top-[15px] lg:right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaShoppingCart />
                            </div>
                            <div className="text-red-300 cursor-pointer absolute right-0 top-[65px] lg:right-[-100%] w-[40px] h-[40px] rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-0">
                                <FaHeart />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}