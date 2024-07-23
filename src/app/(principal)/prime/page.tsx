// import Image from "next/image";
// import primeImg from "../../../../public/images/primeImg.jpg";
import { FaPercent, FaRocket } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";

export default function Prime() {
    return (
        <>
            <div className="px-4 lg:px-28 py-8">
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center flex-col gap-6">
                        <h2 className="text-2xl font-bold">Seja um Drago Prime</h2>
                        <p>Assine o nosso prime e tenha descontos em nossos produtos confirá abaixo os beneficios de ser prime</p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <div className="border w-28 p-4 border-gray-300 rounded-md flex flex-col items-center gap-4 transition-all duration-500 hover:bg-red-600 hover:text-white">
                                <FaPercent />
                                <h6>Descontos <br /> Exclusivos</h6>
                            </div>
                            <div className="border w-28 p-4 border-gray-300 rounded-md flex flex-col items-center gap-4 transition-all duration-500 hover:bg-red-600 hover:text-white">
                                <FaRocket />
                                <h6>Entrega <br /> Agil</h6>
                            </div>
                            <div className="border w-28 p-4 border-gray-300 rounded-md flex flex-col items-center gap-4 transition-all duration-500 hover:bg-red-600 hover:text-white">
                                <FaTicket />
                                <h6>Cupons <br /> Extras</h6>
                            </div>
                        </div>
                        <h6 className="text-center text-xl font-bold">Ta esperando o que? Assine já</h6>
                        <h6 className="text-center text-2xl font-bold">R$:19,90</h6>
                        <button className="font-bold w-28 lg:max-w-72 p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Assine Já</button>
                    </div>
                    {/* <Image className="object-cover w-full" src={primeImg} width={200} height={200} alt="imagem do prime" /> */}
                </div>
            </div>
        </>
    )
}