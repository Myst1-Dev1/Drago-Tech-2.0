import { ProductNode } from "./products";

export type User = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    favorites: ProductNode[];
    orders: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}