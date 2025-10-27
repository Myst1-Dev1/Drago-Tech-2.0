'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface SignInResult {
  success: boolean;
  message?: string;
}

export async function createComment(_: SignInResult, id:number, formData: FormData): Promise<SignInResult> {
    const clientName = formData.get("clientName")?.toString();
    const content = formData.get("content")?.toString();
    const ratingValue = Number(formData.get("rating")); 

    try {
        const cookieStore = cookies();
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

        const data = await res.json();

        console.log(data);

        revalidatePath('/product/' + id);

        return { success: true, message:'Comentário enviado com sucesso !' };
    } catch (error) {
        console.log(error)
        return { success: false, message:'Tivemos um erro no envio do comentário !' };
    }
}