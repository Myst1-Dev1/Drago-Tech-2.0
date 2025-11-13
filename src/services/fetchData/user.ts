'use server';

import { cookies } from "next/headers";

export async function GetUser() {
    const cookieStore = await cookies();
    const rawCookie = cookieStore.get("user-token")?.value;
    const parsedCookie = rawCookie ? JSON.parse(rawCookie) : null;
    const token = parsedCookie?.token;

    const res = await fetch("http://lab.mystdev.com.br/api/Drago-Tech-Api/auth/getUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        next: { tags: ['user'] }
      });

      const data = await res.json();

    return data;
}
