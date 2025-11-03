import { Product } from "@/types/products";
import { CarouselProducts } from "../CarouselProducts";

interface RecomendedProductsProps {
    products: Product[];
}

export function RecomendedProducts({ products }:RecomendedProductsProps) {
    const recomendedProducts = products?.filter(product => product.recomendedProduct);

    console.log(products);

    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                <h2 className="font-bold text-2xl">Produtos recomendados</h2>
                <CarouselProducts productsArray={recomendedProducts} />
            </div>
        </>
    )
}