import User from '@/Models/User';
import connect from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import { FetchProductDetails } from '@/services/fetchData/fetchProductDetails';

export async function POST(req:NextRequest) {
  try {
    await connect();

    const { userId, productSlug } = await req.json();

    if (!userId || !productSlug) {
      return NextResponse.json(
        { message: 'Faltam parâmetros necessários' },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
    }

    if (user.favorites.some((item:any) => item.slug === productSlug)) {
      return NextResponse.json({ message: 'Produto já está nos favoritos' }, { status: 400 });
    }

    const { products } = await FetchProductDetails(productSlug);

    if (!products) {
      return NextResponse.json({ message: 'Produto não encontrado' }, { status: 404 });
    }

    user.favorites.push(products);
    await user.save();

    return NextResponse.json({ message: 'Produto adicionado aos favoritos', favorites: user.favorites }, { status: 200 });
  } catch (error) {
    console.error('Erro ao adicionar favorito:', error);
    return NextResponse.json({ message: 'Erro ao adicionar favorito', error }, { status: 500 });
  }
}
