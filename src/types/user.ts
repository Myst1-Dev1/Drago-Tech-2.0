
export type User = {
    id: number;
    email: string;
    name: string;
    address: string;
    zipCode: string;
    phone: string;
    state: string;
    city: string;
    favorites: Favorites[];
    orders: [];
}

export type Favorites = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number
}