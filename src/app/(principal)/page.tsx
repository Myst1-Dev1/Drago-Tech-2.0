import Image from "next/image";
import laptopImg from "../../../public/images/laptopsImg.png";
import eletronicsImg from "../../../public/images/eletronicsImg.png";
import camerasImg from "../../../public/images/cameraImg.png";
import { PopularProducts } from "@/components/principal/PopularProducts";
import { OfferProducts } from "@/components/principal/OfferProducts";

export default function Home() {
    return (
      <>
        <div className="flex justify-center items-center bg-homeBanner bg-cover bg-center w-full min-h-[70vh] text-white">
            <div className="max-w-[450px] flex flex-col justify-center items-center gap-4 m-auto">
                <h2 className="text-3xl font-bold">Os Melhores Equipamentos Você Encontra Só Aqui</h2>
                <p className="text-center">lorem ipsum is simply dummy about this shop lorem asprt the technology john doe has about this</p>
                <button className="max-w-72 m-auto w-full p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Compre agora</button>
            </div>
        </div>

        <div className="px-4 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-60 py-20 text-white">
            <div className="bg-collectionBg h-[192px] lg:h-[404px] bg-cover bg-no-repeat px-6 flex justify-between items-center w-[350px] lg:w-[660px]">
                <div className="flex flex-col gap-5">
                    <h3 className="text-sm lg:text-2xl">Coleção de Laptops</h3>
                    <button className="max-w-28 lg:max-w-72 w-full p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Ver todos</button>
                </div>
                <Image className="w-[100px] h-[100px] lg:w-[250px] lg:h-[250px]" src={laptopImg} width={250} height={250} alt="imagem da coleção de laptops" />
            </div>
            <div className="flex gap-5 flex-col">
                <div className="bg-collectionBg bg-cover bg-no-repeat px-6 flex justify-between items-center w-[350px] lg:w-[450px] h-48">
                    <div className="flex flex-col gap-5">
                        <h3 className="text-sm lg:text-xl">Coleção de <br /> Eletrônicos</h3>
                        <button className="max-w-28 w-full p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Ver todos</button>
                    </div>
                    <Image src={eletronicsImg} width={200} height={150} alt="imagem da coleção de eletronicos" />
                </div>
                <div className="bg-collectionBg bg-cover bg-no-repeat px-6 flex justify-between items-center w-[350px] lg:w-[450px] h-48">
                    <div className="flex flex-col gap-5">
                        <h3 className="text-sm lg:text-xl">Coleção de <br /> Câmeras</h3>
                        <button className="max-w-28 w-full p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Ver todos</button>
                    </div>
                    <Image src={camerasImg} width={150} height={150} alt="imagem da coleção de cameras" />
                </div>
            </div>
        </div>
        <PopularProducts/>
        <OfferProducts/>
      </>
    );
  }
  