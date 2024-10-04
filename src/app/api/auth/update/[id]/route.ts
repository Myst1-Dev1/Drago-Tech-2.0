import User from '@/Models/User';
import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/db';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connect();
        const userId = params.id;
        
        const { name, phone, address, city, state, zipCode } = await req.json();

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { 
                name, 
                phone, 
                address, 
                city, 
                state, 
                zipCode
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return NextResponse.json({
                message: "Usuário não encontrado.",
                status: 404,
            });
        }

        return NextResponse.json({
            user: updatedUser,
            message: "Usuário atualizado com sucesso.",
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Erro ao atualizar o usuário.",
            status: 500,
        });
    }
}
