'use server';

export async function FetchProducts() {
    const res = await fetch('http://lab.mystdev.com.br/api/Drago-Tech-Api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store',
        next: { tags: ['products'] }
    });

    const data = await res.json();

    return data;
}
