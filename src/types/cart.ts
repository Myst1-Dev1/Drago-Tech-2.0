export type Cart = {
    product: {
        brand: string;
        id: number;
        name: string;
        imageUrl: string;
        price: number;
    };
    quantity: number;
}