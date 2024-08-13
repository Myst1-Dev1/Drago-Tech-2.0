export type Cart = {
    product: {
        brand: string;
        id: number;
        productName: string;
        image: {
            node: {
                mediaItemUrl: string;
            };
        };
        price: number;
    };
    quantity: number;
}