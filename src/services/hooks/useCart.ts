import { Cart } from "@/types/cart";
import { ProductNode } from "@/types/products";
import { toast } from "react-toastify";
import { create } from "zustand";

interface CartState {
    cart: Cart[];
    handleAddToCart: (id: number, data: ProductNode[]) => void;
    totalCart: () => string;
    handleDeleteProductToCart: (id:number) => void;
    handleIncreaseQuantity:(id:number) => void;
    handleDecreaseQuantity:(id:number) => void;
  }
  
export const useCart = create<CartState>((set, get) => ({
    cart: [],
    handleAddToCart: (id: number, data: ProductNode[]) => {
        set((state) => {
        const productItem = data.find((product: ProductNode) => product.produtos.id === id);

        if (!productItem) {
            console.error("Produto não encontrado");
            return { cart: state.cart };
        }

        const alreadyInCart = state.cart.find((item) => item.product.id === id);

        const newCart = alreadyInCart
            ? state.cart.map((item) =>
                item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
            : [...state.cart, { product: productItem.produtos, quantity: 1 }];

        toast.success('Produto adicionado ao carrinho');

        return { cart: newCart };
        });
    },
    handleDeleteProductToCart:(id:number) => {
        set((state) => {
            const newCart = state.cart.filter(item => item.product.id !== id);
            return { cart: newCart };
        });
    },
    handleIncreaseQuantity:(id:number) => {
        set((state) => {
            const updatedCart = state.cart.map((item) => {
              if (item.product.id === id) {
                const newQuantity = item.quantity + 1;
                return { ...item, quantity: newQuantity };
              }
              return item;
            });
      
            return { cart: updatedCart };
          });
    },
    handleDecreaseQuantity: (id: number) => {
        set((state) => {
            const updatedCart = state.cart.map((item) => {
              if (item.product.id === id) {
                const newQuantity = item.quantity - 1;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
              }
              return item;
            });
      
            return { cart: updatedCart };
          });
    },
    totalCart: () => {
        const state = get();
        const total = state.cart.reduce((total, current) => {
          return total + current.product.price * current.quantity;
        }, 0);
        return total.toFixed(2);
    }
}));