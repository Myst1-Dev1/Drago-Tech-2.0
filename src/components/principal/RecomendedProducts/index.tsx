import { ProductNode } from "@/types/products";
import { CarouselProducts } from "../CarouselProducts";

interface RecomendedProductsProps {
    products: ProductNode[];
    user:any;
}

export function RecomendedProducts({ products, user }:RecomendedProductsProps) {
    // const recomendedProducts = products?.filter(product => product.produtos.recomendedProduct);

    const userFavorite = user?.[0]?.user?.favorites?.map((favorite: any) => favorite.produtos.id) || [];

    return (
        <>
            <div className="px-4 lg:px-28 py-12">
                <h2 className="font-bold text-2xl">Produtos recomendados</h2>
                {/* <CarouselProducts productsArray={recomendedProducts} userFavorite={userFavorite} /> */}
            </div>
        </>
    )
}