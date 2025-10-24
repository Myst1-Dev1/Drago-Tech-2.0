'use server';

export async function FetchProducts() {
    const res = await fetch('http://lab.mystdev.com.br/api/Drago-Tech-Api/products');

    const data = await res.json();

    return data;
}
