'use server'

import { PopularProducts } from "@/components/principal/PopularProducts";
import { OfferProducts } from "@/components/principal/OfferProducts";
import { KnowOurBlog } from "@/components/principal/KnowOurBlog";
import { RecomendedProducts } from "@/components/principal/RecomendedProducts";
import Link from "next/link";
import { FetchProducts } from "@/services/fetchData/fetchProducts";
import { fetchUser } from "@/services/fetchData/fetchUser";
import { cookies } from "next/headers";

export default async function Home() {
    const { products } = await FetchProducts();

    const cookie: any = cookies().get('user');
    const userId = cookie?.value;

    const user = await fetchUser(userId);

    return (
      <>
        <div className="flex justify-center items-center bg-homeBanner bg-cover bg-center w-full min-h-[70vh] text-white">
            <div className="max-w-[450px] flex flex-col justify-center items-center gap-4 m-auto">
                <h2 className="text-xl text-center lg:text-3xl font-bold">Os Melhores Equipamentos Você Encontra Só Aqui</h2>
                <p className="text-center">lorem ipsum is simply dummy about this shop lorem asprt the technology john doe has about this</p>
                <Link href="/shop"><button className="font-bold max-w-72 m-auto w-full p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Compre agora</button></Link>
            </div>
        </div>
        {/* <div className="px-4 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-60 py-20 text-white">
            <div className="m-auto bg-collectionBg h-[192px] lg:h-[404px] bg-cover bg-no-repeat px-6 flex justify-between items-center w-[350px] lg:w-[660px]">
                <div className="flex flex-col gap-5">
                    <h3 className="text-sm lg:text-2xl">Coleção de Laptops</h3>
                    <button className="text-xs lg:text-xl font-bold max-w-28 lg:max-w-72 w-full p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Ver todos</button>
                </div>
                <Image className="object-cover w-[100px] h-[100px] lg:w-[250px] lg:h-[250px]" src={laptopImg} width={250} height={250} alt="imagem da coleção de laptops" />
            </div>
            <div className="flex gap-5 flex-col m-auto">
                <div className="bg-collectionBg bg-cover bg-no-repeat px-6 flex justify-between items-center w-[350px] lg:w-[450px] h-48">
                    <div className="flex flex-col gap-5">
                        <h3 className="text-sm lg:text-xl">Coleção de <br /> Eletrônicos</h3>
                        <button className="text-xs font-bold w-28 lg:w-full p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Ver todos</button>
                    </div>
                    <Image className="object-cover w-[100px] h-[100px] lg:w-[200px] lg:h-[150px]" src={eletronicsImg} width={200} height={150} alt="imagem da coleção de eletronicos" />
                </div>
                <div className="bg-collectionBg bg-cover bg-no-repeat px-6 flex justify-between items-center w-[350px] lg:w-[450px] h-48">
                    <div className="flex flex-col gap-5">
                        <h3 className="text-sm lg:text-xl">Coleção de <br /> Câmeras</h3>
                        <button className="text-xs font-bold w-28 lg:w-full p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Ver todos</button>
                    </div>
                    <Image className="object-cover w-[100px] h-[100px] lg:w-[200px] lg:h-[150px]" src={camerasImg} width={150} height={150} alt="imagem da coleção de cameras" />
                </div>
            </div>
        </div> */}
        <PopularProducts products={products} user={user} />
        <OfferProducts products={products} user={user}/>
        <RecomendedProducts products={products} user={user} />
        <div className="mt-12 bg-[#141410] flex justify-center items-center">
            <div className="py-8 flex flex-col gap-5">
                <h2 className="text-white text-xl lg:text-2xl font-bold text-center">Assine Nosso Prime E <br />Tenha descontos exclusivos</h2>
                <Link href="/prime"><button className="font-bold max-w-72 w-full p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Quero ser Prime</button></Link>
            </div>
        </div>
        <KnowOurBlog />
      </>
    );
  }
  