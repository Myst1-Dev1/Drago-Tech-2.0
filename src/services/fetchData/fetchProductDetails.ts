'use server';

import { getClient } from "@/services/client";
import { getProductDetails } from "@/services/graphql/getProductDetails";

export async function FetchProductDetails(slug:string) {
    const client = getClient();

    const { data, loading } = await client.query({
        query: getProductDetails,
        variables: { slug },
      });

    const products = data?.produtoBy;

    return {products, loading}
}