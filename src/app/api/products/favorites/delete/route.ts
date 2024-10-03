import User from '@/Models/User';
import connect from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
  try {
    await connect();

    const { userId, databaseId } = await req.json();

    if (!userId || !databaseId) {
      return NextResponse.json(
        { message: 'Faltam parâmetros necessários' },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
    }

    const favoriteIndex = user.favorites.findIndex((item: any) => item.databaseId === databaseId);

    if (favoriteIndex === -1) {
      return NextResponse.json({ message: 'Produto não está nos favoritos' }, { status: 400 });
    }

    user.favorites.splice(favoriteIndex, 1);

    await user.save();

    return NextResponse.json({ message: 'Produto removido dos favoritos', favorites: user.favorites }, { status: 200 });
  } catch (error) {
    console.error('Erro ao remover favorito:', error);
    return NextResponse.json({ message: 'Erro ao remover favorito', error }, { status: 500 });
  }
}
