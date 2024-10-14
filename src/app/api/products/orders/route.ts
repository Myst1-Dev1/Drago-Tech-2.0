import User from '@/Models/User';
import connect from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
  try {
    await connect();

    const { userId, order, cart } = await req.json();

    if (!userId || !order || !cart) {
      return NextResponse.json(
        { message: 'Faltam parâmetros necessários' },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
    }

   const orderData = { order, cart, orderDate: new Date() };

    user.orders.push(orderData);
    await user.save();

    return NextResponse.json({ message: 'Pedido criado com sucesso.', favorites: user.favorites }, { status: 200 });
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    return NextResponse.json({ message: 'Erro ao criar pedido', error }, { status: 500 });
  }
}
