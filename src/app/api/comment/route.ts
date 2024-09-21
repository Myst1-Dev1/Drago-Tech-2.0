import { getClient } from "@/services/client";
import { createProductComments } from "@/services/graphql/createProductComments";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const client = getClient();
        const { author, content, commentOn } = await req.json();

        console.log('dados aqui', author, content, commentOn);

        const { data } = await client.mutate<any>({
            mutation: createProductComments,
            variables: {
                author,
                content,
                commentOn,
            },
        });

        console.log(data);

        return NextResponse.json({ message: 'Comentário criado com sucesso' }, { status: 200 });
    } catch (error) {
        console.error('Erro ao criar comentário:', error);
        return NextResponse.json({ message: 'Erro interno no servidor' }, { status: 500 });
    }
}
