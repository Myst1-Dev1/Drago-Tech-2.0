import { ProductNode } from "@/types/products";
import { CarouselProducts } from "../CarouselProducts";
  
interface PopularProductsProps {
    products: ProductNode[];
}
  
export function PopularProducts({ products }:PopularProductsProps) {
    const popularProducts = products.filter(product => product.produtos.popularProduct);

    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                <h2 className="font-bold text-2xl">Produtos populares</h2>
                <CarouselProducts productsArray={popularProducts} />
            </div>
        </>
    )
}