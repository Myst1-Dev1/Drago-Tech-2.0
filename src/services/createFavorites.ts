import { parseCookies } from "nookies";
import { toast } from "react-toastify";

export async function addToFavorites(productSlug:string) {
    const { 'user': userId } = parseCookies();

    try {
      const res = await fetch('/api/products/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productSlug }),
      });
  
      if (!res.ok) {
        toast.error('Você precisa estár logado para isso');
      }else {
        toast.success('Produto adicionado aos favoritos');
      }
  
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
