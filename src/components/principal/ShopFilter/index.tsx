'use client';

import Image from "next/image"
import ArrowUp from "../../../../public/images/arrowUp.svg";
import { FaFilter } from "react-icons/fa";
import gsap from "gsap";
import { Dispatch, SetStateAction, useState } from "react";
import { filtersArray } from "./filtersArray";
import { formatPrice } from "@/utils/useFormatPrice";

interface ShopFilterProps {
    setLoading: Dispatch<SetStateAction<boolean>>
    setFilteredCategory:Dispatch<SetStateAction<string>> | any
    filterPrice:number;
    setFilterPrice:Dispatch<SetStateAction<number>>;
}

export function ShopFilter({ setLoading, setFilteredCategory, filterPrice, setFilterPrice }:ShopFilterProps) {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    function handleShowCategory(name: string, value: string) {
        if (activeFilter === name) {
            gsap.to(`.${name}`, {
                height: 0,
                duration: 0.5,
            });
            setActiveFilter(null);
        } else {
            if (activeFilter) {
                gsap.to(`.${name}`, {
                    height: 0,
                    duration: 0.5,
                });
            }

            gsap.to(`.${name}`, {
                height: value,
                duration: 0.5,
            });
            setActiveFilter(name);
        }
    }

    function handleCategorySelection(category: string) {
        setLoading(true);
        setFilteredCategory((prevCategories: any) => {
            let updatedCategories;
            
            if (prevCategories.includes(category)) {
                updatedCategories = prevCategories.filter((cat: any) => cat !== category);
            } else {
                updatedCategories = [...prevCategories, category];
            }
    
            setTimeout(() => {
                setLoading(false);
            }, 1000);
    
            return updatedCategories.length > 0 ? updatedCategories : [];
        });
    }
    
    function handlePriceChange(e:any) {
        setLoading(true);
        setFilterPrice(e);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    return (
        <>
            <FaFilter className="block mb-5 lg:hidden transition-all duration-500 hover:text-red-600" />
            <div className="h-fit hidden lg:flex flex-col gap-6 text-white bg-[#121214] rounded-md max-w-80 p-5">
                    {filtersArray.map(filter => (
                        <div key={filter.id} className="border-b border-[#4a4747] pb-6">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-xl">{filter.filterName}</h3>
                                <Image onClick={() => handleShowCategory(filter.showName, '240px')} className={`cursor-pointer transition-all duration-500 ${activeFilter === filter.showName ? 'rotate-0' : 'rotate-180'}`} src={ArrowUp} width={20} height={20} alt="flecha que abre o menu de items" />
                            </div>
                            <div className={`${filter.showName} overflow-hidden h-0 mt-6 flex flex-col gap-4`}>
                                {filter.categories.map(categorie => (
                                <div key={categorie.id} className="flex gap-4 items-center">
                                    <input onClick={() => handleCategorySelection(categorie.categoryName)} className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id={categorie.categoryName} />
                                    <label htmlFor={categorie.categoryName} className="font-bold">{categorie.categoryName}</label>
                                </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-xl">Preço</h3>
                        <div className="transition-all duration-500 flex justify-center items-center gap-5 py-4">
                            <div className="w-[125px] text-center border border-[#4a4747] rounded-md p-3">
                                <h6>{formatPrice(filterPrice)}</h6>
                            </div>
                            <div className="border border-[#4a4747] rounded-md p-3">
                                <h6>R$:10.000,00</h6>
                            </div>
                        </div>
                        <input min={0} max={10000} value={filterPrice} onChange={e => handlePriceChange(Number(e.target.value))} type="range" className="w-full h-1 bg-gray-700 rounded-lg cursor-pointer range-slider" />
                    </div>
            </div>
        </>
    )
}