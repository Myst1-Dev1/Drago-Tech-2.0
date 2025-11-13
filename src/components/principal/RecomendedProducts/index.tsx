import { Product } from "@/types/products";
import { CarouselProducts } from "../CarouselProducts";
import { User } from "@/types/user";

interface RecomendedProductsProps {
    products: Product[];
    user: User;
}

export function RecomendedProducts({ products, user }:RecomendedProductsProps) {
    const recomendedProducts = products?.filter(product => product.recomendedProduct);

    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                <h2 className="font-bold text-2xl">Produtos recomendados</h2>
                <CarouselProducts productsArray={recomendedProducts} user = {user} />
            </div>
        </>
    )
}