import Link from "next/link";
import img401 from '../../../../public/images/401PageImg.png';
import Image from "next/image";

export default function page401() {
    return (
        <>
            <div className="px-8 lg:px-16 py-8 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-4">
                    <Image src={img401} width={250} height={250} alt="imagem da página de 401" />
                    <h2 className="text-red-600 font-bold text-xl">Você não tem permissão para acessar esta página</h2>
                    <Link href="/">
                        <button className="bg-red-500 text-white w-40 rounded-md p-3 transition-all duration-500 hover:bg-red-600">Retornar para Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}