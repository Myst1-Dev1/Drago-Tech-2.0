import { FormEvent } from "react";
import { FaPlus } from "react-icons/fa";

interface ProductFormProps {
    commentOn:number;
}

export function ProductForm({ commentOn }:ProductFormProps) {

    async function handleCreateProductComment(e: FormEvent | any) {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const formEntries = Object.fromEntries(formData.entries());
        const { author, content } = formEntries as { [key: string]: string };
    
        const commentData = {
          author,
          content,
          commentOn,
        };

        try {
          const response = await fetch('/api/comment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
          });
    
          if (response.ok) {
            const result = await response.json();
            console.log('Comentário enviado com sucesso:', result);
          } else {
            console.error('Erro ao enviar comentário:', response.statusText);
          }
        } catch (error) {
          console.error('Erro de rede:', error);
        }
      }

    return (
        <>
             <div className="py-12">
                <div className="flex gap-3 items-center">
                    <FaPlus className="text-red-500" />
                    <h2 className="font-bold text-xl">Avaliar produto</h2>
                </div>
                <form onSubmit={handleCreateProductComment} className="mt-12 flex justify-center items-center m-auto flex-col gap-5 max-w-[900px]">
                    <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Nome" name="author" />
                    {/* <select className="text-gray-400 outline-none p-4 rounded-md w-full border border-gray-300">
                        <option value="Longe do perfrito">Longe do perfeito</option>
                        <option value="Bom">Bom</option>
                        <option value="Incrível">Incrível</option>
                        <option value="Excelente">Excelente</option>
                    </select> */}
                    <textarea className="resize-none h-28 outline-none p-4 rounded-md w-full border border-gray-300" placeholder="Avaliação" name="content"/>
                    <button className="font-bold text-white bg-red-500 p-4 rounded-md max-w-96 w-full transition-all duration-500 hover:bg-red-700">Enviar</button>
                </form>
            </div>
        </>
    )
}