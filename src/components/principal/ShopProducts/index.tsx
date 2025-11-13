'use client'

import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Product } from "@/types/products";
import { formatPrice } from "@/utils/useFormatPrice";
import Link from "next/link";
import { SkeletonProducts } from "../SkeletonProducts";
import { useCart } from "@/services/hooks/useCart";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import { favoriteAProduct } from "@/actions/productActions";

interface ShopProductsProps {
    loading:boolean;
    filteredCategory:string[];
    filterPrice:number;
    productFilteredByPrice:Product[];
    products:Product[];
    productsFiltered: Product[];
    user: User;
}

export function ShopProducts({loading ,filteredCategory , filterPrice, productFilteredByPrice ,products, productsFiltered, user }:ShopProductsProps) {
    const { handleAddToCart } = useCart();

    const router = useRouter();

    function addProduct(id:number) {
        handleAddToCart(id, products);
    }

    async function handleFavoriteProduct(id:number) {
        await favoriteAProduct(id);

        router.refresh();
    }

    const displayedProducts = filterPrice ? productFilteredByPrice : filteredCategory ? productsFiltered : products;

    return (
        <>
            {loading ? <SkeletonProducts count={displayedProducts.length} /> : <div className="grid gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-6 lg:grid-cols-4 py-8">
                {displayedProducts?.map(product => (
                <div key={product.id} className="mb-5 m-auto relative overflow-hidden max-w-[200px] w-full transition-all duration-300 hover:scale-110 group">
                    <Link className="flex flex-col gap-4" href={`product/${product.id}`}>
                        <Image className="w-28 object-cover m-auto" src={product.imageUrl} width={100} height={100} alt="imagem do produto" />
                        <span className="text-gray-400">{product.category}</span>
                        <p className='text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap'>{product.name}</p>
                        <h6 className="text-xl font-bold text-center">{formatPrice(product.price)}</h6>
                    </Link>
                    <div onClick={() => addProduct(product.id)} className="text-red-300 cursor-pointer absolute right-0 top-0 lg:top-[15px] lg:right-[-100%] w-8 h-8 rounded-full aspect-square flex justify-center items-center border border-red-300 transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-2">
                        <FaShoppingCart />
                    </div>
                    <div
                        className={`${
                            user?.favorites?.some((fav: any) => Number(fav.id) === Number(product.id))
                            ? "bg-red-500 text-white"
                            : "border border-red-300 text-red-300"
                        } cursor-pointer absolute right-0 top-[65px] lg:right-[-100%] w-8 h-8 lg:w-[40px] lg:h-[40px] rounded-full aspect-square flex justify-center items-center transition-all duration-300 hover:bg-red-500 hover:border-none hover:text-white group-hover:right-2`}
                    >
                        <FaHeart onClick={() => handleFavoriteProduct(product.id)} />
                    </div>
                </div>
                ))}
            </div>}
        </>
    )
}