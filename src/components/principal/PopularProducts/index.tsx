import { ProductNode } from "@/types/products";
import { CarouselProducts } from "../CarouselProducts";
  
interface PopularProductsProps {
    products: ProductNode[];
    user:any;
}
  
export function PopularProducts({ products, user }:PopularProductsProps) {
    const popularProducts = products.filter(product => product.produtos.popularProduct);

    const userFavorite = user?.[0]?.user?.favorites?.map((favorite: any) => favorite.produtos.id) || [];

    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                <h2 className="font-bold text-2xl">Produtos populares</h2>
                <CarouselProducts productsArray={popularProducts} userFavorite={userFavorite} />
            </div>
        </>
    )
}