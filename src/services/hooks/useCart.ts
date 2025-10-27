import { Cart } from "@/types/cart";
import { Product } from "@/types/products";
import { toast } from "react-toastify";
import { create } from "zustand";
import { setCookie } from 'nookies';

interface CartState {
  cart: Cart[];
  handleAddToCart: (id: number, data: Product[]) => void;
  totalCart: () => string;
  handleDeleteProductToCart: (id: number) => void;
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  setCartFromCookies: (cart: Cart[]) => void;
}

export const useCart = create<CartState>((set, get) => ({
  cart: [],

  setCartFromCookies: (cartFromCookie: Cart[]) => {
    set(() => ({ cart: cartFromCookie }));
},

  handleAddToCart: (id: number, data: Product[]) => {
    set((state) => {
      const productItem = data.find((product: Product) => product.id === id);

      if (!productItem) {
        console.error("Produto não encontrado");
        return { cart: state.cart };
      }

      const alreadyInCart = state.cart.find((item) => item.product.id === id);

      const newCart = alreadyInCart
        ? state.cart.map((item) =>
            item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...state.cart, { product: productItem, quantity: 1 }];

      toast.success('Produto adicionado ao carrinho');

      setCookie(undefined, 'cart-cookie', JSON.stringify(newCart), { path: '/' });

      return { cart: newCart };
    });
  },

  handleDeleteProductToCart: (id: number) => {
    set((state) => {
      const newCart = state.cart.filter(item => item.product.id !== id);
      setCookie(undefined, 'cart-cookie', JSON.stringify(newCart), { path: '/' });
      return { cart: newCart };
    });
  },

  handleIncreaseQuantity: (id: number) => {
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.product.id === id) {
          const newQuantity = item.quantity + 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCookie(undefined, 'cart-cookie', JSON.stringify(updatedCart), { path: '/' });
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
      setCookie(undefined, 'cart-cookie', JSON.stringify(updatedCart), { path: '/' });
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
