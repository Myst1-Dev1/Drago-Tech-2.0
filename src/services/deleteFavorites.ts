import { parseCookies } from "nookies";
import { toast } from "react-toastify";

export async function deleteFavorites(databaseId: number) {
    const { 'user': userId } = parseCookies();

    try {
        const response = await fetch('/api/products/favorites/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                databaseId
            })
        });

        if (!response.ok) {
            toast.error('Erro ao remover favorito');
        } else {
            toast.success('Favorito deletado com sucesso');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao remover favorito:', error);
        throw new Error('Erro ao remover favorito');
    }
}