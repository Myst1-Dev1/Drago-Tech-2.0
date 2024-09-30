import { parseCookies } from 'nookies';

export async function addToFavorites(productId: string) {
  const { 'user': userId } = parseCookies();

  try {
    const response = await fetch('/api/user/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productId }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao adicionar favorito');
    }

    console.log(data.message);
  } catch (error) {
    console.error(error);
  }
}
