export async function fetchUser(id: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/auth/getUser/${id}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar usuário');
        }
        const data = await response.json();
        
        return Array.isArray(data) ? data : [data];
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao buscar usuário');
    }
}
