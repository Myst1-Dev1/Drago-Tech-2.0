import Image from "next/image"
import map from "../../../../public/images/map.jpg";

export default function Contact() {
    return (
        <>
            <div className="px-4 lg:px-28 py-8">
                <div className="grid gap-7 grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="font-bold lg:text-2xl text-xl mb-5">Entre em Contato</h2>
                        <form className="max-w-96 w-full flex flex-col gap-5">
                            <input className="w-full p-3 rounded-md border border-gray-300 outline-none" type="text" placeholder="Nome" />
                            <input className="w-full p-3 rounded-md border border-gray-300 outline-none" type="text" placeholder="Assunto" />
                            <textarea className="resize-none h-24 w-full p-3 rounded-md border border-gray-300 outline-none" placeholder="Mensagem" />
                            <button type="submit" className="font-bold w-full p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Enviar</button>
                        </form>
                    </div>
                    <Image className="object-contain w-full" src={map} width={400} height={400} alt="imagem de mapa" />
                </div>
            </div>
        </>
    )
}