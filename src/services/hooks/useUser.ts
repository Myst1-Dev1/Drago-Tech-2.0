import { create } from "zustand";
import { User } from "@/types/user";
import { parseCookies } from "nookies";

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
  clearUser: () => void;
}

export const useUser = create<UserState>((set) => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async () => {
    try {
      set({ loading: true });

      const { "user-token": rawUser } = parseCookies();
      if (!rawUser) {
        set({ user: null, loading: false });
        return;
      }

      const parsed = JSON.parse(rawUser);
      const token = parsed?.token;

      const res = await fetch("http://lab.mystdev.com.br/api/Drago-Tech-Api/auth/getUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        next: { tags: ['user'] }
      });

      const data = await res.json();

      if (!res.ok) {
        set({ error: data.message || "Erro ao buscar usuário", loading: false });
        return;
      }

      set({ user: data, loading: false, error: null });

    } catch (error) {
      console.error("Erro ao buscar user:", error);
      set({ error: "Erro ao buscar usuário", loading: false });
    }
  },

  clearUser: () => {
    set({ user: null });
  },
}));