import { User } from '@/types/user';
import { create } from 'zustand';

interface UserStore {
    user: User[] | null;
    fetchUser: (id: string) => Promise<void>;
}

export const useUser = create<UserStore>((set) => ({
    user: null,
    fetchUser: async (id) => {
        try {
            const response = await fetch(`https://drago-tech-2-0.vercel.app/api/auth/getUser/${id}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar usuário');
            }
            const data = await response.json();
            const userData = Array.isArray(data) ? data[0] : data;

            set({ user: userData });
        } catch (error) {
            console.error(error);
        }
    },
}));
