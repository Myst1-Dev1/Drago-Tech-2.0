import User from '@/Models/User';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connect from '@/utils/db';

export async function POST(req:NextRequest) {
    try {
        const { name, email, phone, address, city, state, zipCode, password } = await req.json();

        await connect();

        const emailExists = await User.findOne({email});

        if(emailExists) {
            return NextResponse.json({
                message: "E-mail já cadastrado",
                status:409,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        const newUser = new User({
            name,
            email,
            phone,
            address,
            city,
            state,
            zipCode,
            password: hashedPassword
        });

        await newUser.save();

        return NextResponse.json({
            message: "Usuário criado com sucesso.",
            status:201,
        });

    } catch (error) {
        return NextResponse.json({
            message: "Erro ao cadastrar o usuário.",
            status:500,
        });
    }
}