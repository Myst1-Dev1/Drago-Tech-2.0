import { Product, ProductNode } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
    products:ProductNode[];
}

export function Search({ products }:SearchProps) {
    const [search, setSearch] = useState('');
    
    const productsData = products
    .map(product => ({
        ...product.produtos,
        slug: product.slug   
    })).filter((product: Product) => product.productName?.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <div className="relative flex flex-col w-full max-w-full lg:max-w-[470px]">
                <div className="flex items-center w-full border border-gray-300 rounded-md">
                    <input 
                        className="p-4 outline-none w-full" 
                        type="text" 
                        placeholder="Pesquise por seus produtos"
                        value={search}
                        onChange={e => setSearch(e.target.value)} 
                    />
                    <div className="w-10 h-10 flex justify-center items-center">
                        <FaSearch className="text-gray-500" />
                    </div>
                </div>
                <div className="absolute top-[56px] left-0 right-0">
                    {search === '' ? '' : productsData.length === 0 ? 
                    <div className="h-[61px] w-full flex items-center gap-3 px-4 bg-white border border-l-gray-300 border-r-gray-300 border-b-gray-300 border-t-0">
                        <p className="text-slate-400">Sem produtos para sua pesquisa</p>
                    </div> 
                    : 
                    productsData.map(srcproduct => (
                        <Link onClick={() => setSearch('')} key={srcproduct.id} href={`/product/${srcproduct.slug}`}>
                            <div className="w-full flex items-center gap-3 px-4 bg-white border border-l-gray-300 border-r-gray-300 border-b-gray-300 border-t-0">
                                <Image src={srcproduct.image.node.mediaItemUrl} width={60} height={60} alt="imagem do produto pesquisado" />
                                <p className="text-sm max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap">{srcproduct.productName}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}