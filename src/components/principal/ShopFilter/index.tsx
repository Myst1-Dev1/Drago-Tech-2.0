'use client';

import Image from "next/image"
import ArrowUp from "../../../../public/images/arrowUp.svg";
import { FaFilter } from "react-icons/fa";
import gsap from "gsap";
import { useState } from "react";

export function ShopFilter() {
    const [showFilter, setShowFilter] = useState(false);
    const [showBrand, setShowBrand] = useState(false);

    function handleShowCategory(name: string, value: string, isCategory: boolean) {
        const element = document.querySelector(`.${name}`);
        if (!isCategory ? showBrand : showFilter) {
            gsap.to(element, {
                height: 0,
                duration: 0.5,
            });
        } else {
            gsap.to(element, {
                height: value,
                duration: 0.5,
            });
        }

        if (isCategory) {
            setShowFilter(!showFilter);
        } else {
            setShowBrand(!showBrand);
        }
    }

    return (
        <>
            <FaFilter className="block mb-5 lg:hidden transition-all duration-500 hover:text-red-600" />
            <div className="h-fit hidden lg:flex flex-col gap-6 text-white bg-[#121214] rounded-md max-w-96 p-5">
                    <div className="border-b border-[#4a4747] pb-6">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-xl">Categorias</h3>
                            <Image onClick={() => handleShowCategory('category', '240px', true)} className={`cursor-pointer transition-all duration-500 ${showFilter ? 'rotate-0' : 'rotate-180'}`} src={ArrowUp} width={20} height={20} alt="flecha que abre o menu de items" />
                        </div>
                        <div className="category overflow-hidden h-0 mt-6 flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="hardware" />
                                <label htmlFor="hardware" className="font-bold">Hardware</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="camera" />
                                <label htmlFor="camera" className="font-bold">Câmeras</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="eletrodomestico" />
                                <label htmlFor="eletrodomestico" className="font-bold">Életrodomésticos</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="perifericos" />
                                <label htmlFor="perifericos" className="font-bold">Periféricos</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="celulares" />
                                <label htmlFor="celulares" className="font-bold">Celulares</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="laptops" />
                                <label htmlFor="laptops" className="font-bold">Laptops</label>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-[#4a4747] pb-6">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-xl">Marcas</h3>
                            <Image onClick={() => handleShowCategory('brand', '240px', false)} className={`cursor-pointer transition-all duration-500 ${showBrand ? 'rotate-0' : 'rotate-180'}`} src={ArrowUp} width={20} height={20} alt="flecha que abre o menu de items" />
                        </div>
                        <div className="brand overflow-hidden h-0 mt-6 flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="asus" />
                                <label htmlFor="asus" className="font-bold">Asus</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="sony" />
                                <label htmlFor="sony" className="font-bold">Sony</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="hyperx" />
                                <label htmlFor="hyperx" className="font-bold">HyperX</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="lenovo" />
                                <label htmlFor="lenovo" className="font-bold">Lenovo</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="redragon" />
                                <label htmlFor="redragon" className="font-bold">Redragon</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-red-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" type="checkbox" id="razer" />
                                <label htmlFor="razer" className="font-bold">razer</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="font-bold text-xl">Preço</h3>
                        </div>
                        <div className="flex justify-center items-center gap-5 py-4">
                            <div className="border border-[#4a4747] rounded-md p-3">
                                <h6>R$:100,00</h6>
                            </div>
                            <div className="border border-[#4a4747] rounded-md p-3">
                                <h6>R$:500,00</h6>
                            </div>
                        </div>
                        <input min={0} max={6000} type="range" className="w-full h-1 bg-gray-700 rounded-lg cursor-pointer range-slider" />
                    </div>
            </div>
        </>
    )
}