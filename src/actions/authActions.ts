'use server';

import { validateSignIn, validateSignUp } from "@/utils/validateFields/validateSignUp";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface SignInResult {
  success: boolean;
  message?: string;
}

export async function register(_: SignInResult, formData: FormData): Promise<SignInResult> {
    const email = formData.get("email")?.toString();
    const name = formData.get("name")?.toString();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();
    const phone = formData.get("phone")?.toString();
    const address = formData.get("address")?.toString();
    const state = formData.get("state")?.toString();
    const city = formData.get("city")?.toString();
    const zipCode = formData.get("zipCode")?.toString();

    try {
        const validatedFields = validateSignUp.safeParse({
            email,
            name,
            password,
            phone,
            address,
            state,
            city,
            zipCode,
        });

        if (!validatedFields.success) {
            const firstError = validatedFields.error.issues[0]?.message || "Dados inválidos";
            return { success: false, message: firstError };
        }

        if(!email || !name || !password || !confirmPassword || !phone || !address || !state || !city || !zipCode) {
            return { success: false, message: "Campos obrigatórios !" };
        }

        if(password !== confirmPassword) return { success: false, message: "As senhas não são iguais !" }
        
        await fetch('http://lab.mystdev.com.br/api/Drago-Tech-Api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name, phone, address, state, city, zipCode })
        });
        
        return { success: true, message: "Conta criada com sucesso!" }
    } catch (error) {
        console.log(error);
        return { success: false, message: "Tivemos um erro na criação da conta. Por favor tente novamente" }
    }
}

export async function login(_: SignInResult, formData: FormData): Promise<SignInResult> {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    try {
        const validatedFields = validateSignIn.safeParse({ email, password });

        if (!validatedFields.success) {
            const firstError = validatedFields.error.issues[0]?.message || "Dados inválidos";
            return { success: false, message: firstError };
        }

        const res = await fetch('http://lab.mystdev.com.br/api/Drago-Tech-Api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'no-store',
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        const token = data;

        const cookieStore = await cookies();
            cookieStore.set({
            name: "user-token",
            value: JSON.stringify(token),
            path: "/",
            maxAge: 60 * 60 * 24 * 1 // 1 dia
        });

        revalidatePath('/');

        return { success: true, message: 'Error ao fazer login'}
    } catch (error) {
        console.log(error);
        return { success: false, message: 'Error ao fazer login' }
    }
}