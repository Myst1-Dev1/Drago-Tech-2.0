'use server';

import { getProducts } from "@/services/graphql/getProducts"
import { getClient } from "@/services/client";

export async function FetchProducts() {
    const client = getClient();

    const { data, loading } = await client.query<any>({query: getProducts});

    const products = data.produtos.nodes;

    return {products, loading}
}