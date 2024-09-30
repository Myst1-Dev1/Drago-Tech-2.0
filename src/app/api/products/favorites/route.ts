import User from '@/Models/User';
import connect from '@/utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req:NextApiRequest, res:NextApiResponse) {
    await connect();

  if (req.method === 'POST') {
    const { userId, productId } = req.body;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      if (user.favorites.includes(productId)) {
        return res.status(400).json({ message: 'Produto já está nos favoritos' });
      }

      user.favorites.push(productId);
      await user.save();

      res.status(200).json({ message: 'Produto adicionado aos favoritos', favorites: user.favorites });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao adicionar favorito', error });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}