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

      toast.success('Produto adicionado aos favoritos');
  
      if (!res.ok) {
        // throw new Error('Erro ao adicionar aos favoritos');
        toast.error('Erro ao adicionar o produto aos favoritos');
      }
  
      const data = await res.json();
      console.log('Produto adicionado aos favoritos:', data);
    } catch (error) {
      console.error(error);
    }
  }
