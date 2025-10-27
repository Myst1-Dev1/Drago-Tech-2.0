import { Product } from "@/types/products";
import { create } from "zustand";

interface ProductState {
    products: Product[];
    loading: boolean;
    error: null
    fetchProducts: () => void;
}

export const useProductsStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('http://lab.mystdev.com.br/api/Drago-Tech-Api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store',
    });

      if (!res.ok) {
        throw new Error("Erro ao buscar produtos");
      }

      const data = await res.json();
      set({ products: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
