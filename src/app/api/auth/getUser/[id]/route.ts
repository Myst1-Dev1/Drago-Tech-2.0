import User from '@/Models/User';
import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/db';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connect();
        const userId = params.id; // Obtém o ID dos parâmetros da URL

        const user = await User.findById(userId).select('-password'); // Exclui a senha da resposta

        if (!user) {
            return NextResponse.json({
                message: "Usuário não encontrado.",
                status: 404,
            });
        }

        return NextResponse.json({
            user,
            message: "Usuário encontrado.",
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Erro ao buscar o usuário.",
            status: 500,
        });
    }
}
