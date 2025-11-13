import { Product, ProductNode } from "@/types/products";
import { CarouselProducts } from "../CarouselProducts";
import { User } from "@/types/user";
  
interface PopularProductsProps {
    products: Product[];
    user: User;
}
  
export function PopularProducts({ products, user }:PopularProductsProps) {
    const popularProducts = products?.filter(product => product.popularProduct);

    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                <h2 className="font-bold text-2xl">Produtos populares</h2>
                <CarouselProducts productsArray={popularProducts} user = {user} />
            </div>
        </>
    )
}