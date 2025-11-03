'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface SignInResult {
  success: boolean;
  message?: string;
}

export async function createProduct(
    _:SignInResult, 
    techInfo: { techInfoTitle: string; techInfoValue: string }[], 
    formData: FormData): Promise<SignInResult> {
    
    const image = formData.get("image") as File | null;
    const relatedImages = formData.getAll("relatedImages") as File[];
    const name = formData.get("name")?.toString() ?? "";
    const price = formData.get("price")?.toString() ?? "";
    const brand = formData.get("brand")?.toString() ?? "";
    const category = formData.get("category")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    const isOffer = formData.get('isOffer') === 'on';

    const priceOfferRaw = formData.get('priceOffer')?.toString() ?? '';
    const priceOfferValue = priceOfferRaw.trim() === '' ? 'null' : priceOfferRaw;
    
    const recomendedProduct = formData.get('recomendedProduct') === 'on';
    const popularProduct = formData.get('popularProduct') === 'on';

    try {
        const body = new FormData();
        body.append("name", name);
        body.append("price", price);
        body.append("brand", brand);
        body.append("category", category);
        body.append("description", description);
        body.append("techInfo", JSON.stringify(techInfo));
        body.append('priceOffer', priceOfferValue);
        body.append('isOffer', JSON.stringify(isOffer));
        body.append('recomendedProduct', JSON.stringify(recomendedProduct));
        body.append('popularProduct', JSON.stringify(popularProduct));


        const cookieStore = await cookies();
        const rawCookie = cookieStore.get("user-token")?.value;

        const parsedCookie = rawCookie ? JSON.parse(rawCookie) : null;
        const token = parsedCookie?.token;

        if(!token) return { success: false, message: 'Sem autorização' };

        if (image) {
            body.append("image", image, image.name);
        }

        relatedImages.forEach((file, index) => {
            body.append("relatedImages", file, file.name);
        });

        console.log(body);

        const response = await fetch("http://lab.mystdev.com.br/api/Drago-Tech-Api/products", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Falha na API:', response.status, errorData);
            throw new Error(`Falha ao criar produto: ${response.status} - ${errorData.message || 'Erro desconhecido'}`);
        }

        console.log('Produto criado com sucesso');

        revalidatePath('/admin/products');

        return { success: true, message: 'Produto criado com sucesso !' };
    } catch (error) {
        console.log(error);
        return { success: false, message: 'Produto criado com sucesso !' };        
    }
}

export async function updateProduct(
    _:SignInResult, 
    techInfo: { techInfoTitle: string; techInfoValue: string }[],
    productId: number,
    formData: FormData): Promise<SignInResult> {
    
    const image = formData.get("image") as File | null;
    const relatedImages = formData.getAll("relatedImages") as File[];
    const name = formData.get("name")?.toString() ?? "";
    const price = formData.get("price")?.toString() ?? "";
    const brand = formData.get("brand")?.toString() ?? "";
    const category = formData.get("category")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    const isOffer = formData.get('isOffer') === 'on';

    const priceOfferRaw = formData.get('priceOffer')?.toString() ?? '';
    const priceOfferValue = priceOfferRaw.trim() === '' ? 'null' : priceOfferRaw;
    
    const recomendedProduct = formData.get('recomendedProduct') === 'on';
    const popularProduct = formData.get('popularProduct') === 'on';

    try {
        const body = new FormData();
        body.append("name", name);
        body.append("price", price);
        body.append("brand", brand);
        body.append("category", category);
        body.append("description", description);
        body.append("techInfo", JSON.stringify(techInfo));
        body.append('priceOffer', priceOfferValue);
        body.append('isOffer', JSON.stringify(isOffer));
        body.append('recomendedProduct', JSON.stringify(recomendedProduct));
        body.append('popularProduct', JSON.stringify(popularProduct));


        const cookieStore = await cookies();
        const rawCookie = cookieStore.get("user-token")?.value;

        const parsedCookie = rawCookie ? JSON.parse(rawCookie) : null;
        const token = parsedCookie?.token;

        if(!token) return { success: false, message: 'Sem autorização' };

        if (image && image.size > 0) {
            body.append('image', image);
        }

        if (relatedImages && relatedImages.length > 0) {
            relatedImages.forEach((file) => {
                if (file.size > 0) {
                    body.append('relatedImages', file);
                }
            });
        }

        console.log(body);

        const response = await fetch("http://lab.mystdev.com.br/api/Drago-Tech-Api/products/" + productId, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Falha na API:', response.status, errorData);
            throw new Error(`Falha ao atualizarr produto: ${response.status} - ${errorData.message || 'Erro desconhecido'}`);
        }

        console.log('Produto atualizado com sucesso');

        revalidatePath('/admin/products');

        return { success: true, message: 'Produto atualizado com sucesso !' };
    } catch (error) {
        console.log(error);
        return { success: false, message: 'Tivemos um erro ao atualizar o produto !' };        
    }
}

export async function deleteProduct(id: number) {
    try {
        const cookieStore = await cookies();
        const rawCookie = cookieStore.get("user-token")?.value;

        const parsedCookie = rawCookie ? JSON.parse(rawCookie) : null;
        const token = parsedCookie?.token;

        if(!token) return { success: false, message: 'Sem autorização' };

        await fetch('http://lab.mystdev.com.br/api/Drago-Tech-Api/products/' + id, {
             method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });

        revalidatePath('/admin/products');

        console.log('Produto deletado com sucesso !');
    } catch (error) {
        console.log('Erro ao deletar o produto !', error);
    }
}

export async function createComment(_: SignInResult, id:number, formData: FormData): Promise<SignInResult> {
    const clientName = formData.get("clientName")?.toString();
    const content = formData.get("content")?.toString();
    const ratingValue = Number(formData.get("rating")); 

    try {
        const cookieStore = await cookies();
        const rawCookie = cookieStore.get("user-token")?.value;

        const parsedCookie = rawCookie ? JSON.parse(rawCookie) : null;
        const token = parsedCookie?.token;

        if(!token) return { success: false, message: 'Sem autorização' };

        if(!clientName || !content || !ratingValue) return { success: false, message: 'Preencha todos os campos' }

        const res = await fetch('http://lab.mystdev.com.br/api/Drago-Tech-Api/products/comments/' + id, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ clientName, content, rating:ratingValue })
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Falha na API:', res.status, errorData);
            throw new Error(`Falha ao criar produto: ${res.status} - ${errorData.message || 'Erro desconhecido'}`);
        }

        revalidatePath('/product/' + id);

        return { success: true, message:'Comentário enviado com sucesso !' };
    } catch (error) {
        console.log(error)
        return { success: false, message:'Tivemos um erro no envio do comentário !' };
    }
}