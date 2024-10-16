'use client';

import { ProductTechInfo } from "@/utils/dataProducts";
import { useState } from "react";

interface ProductsInformationsProps {
    description:string;
    id:number;
}

export function ProductsInformations({ description, id }:ProductsInformationsProps) {
    const [isActiveTab, setIsActiveTab] = useState('description');

    const techInfoData = ProductTechInfo.filter(info => info.id === id);

    const handleTabClick = (tab: string) => {
        setIsActiveTab(tab);
    };

    return (
        <>
            <div className="py-16">
                <div className="flex items-center flex-wrap gap-7">
                    <h6 
                        className={`text-sm lg:text-xl font-bold cursor-pointer transition-all duration-500 hover:text-red-700 ${isActiveTab === 'description' ? 'border-b-2 pb-1 border-red-300 active-tab' : 'border-none text-gray-200'}`} 
                        onClick={() => handleTabClick('description')}
                    >
                        Descrição do produto
                    </h6>
                    <h6 
                        className={`text-sm lg:text-xl font-bold cursor-pointer transition-all duration-500 hover:text-red-700 ${isActiveTab === 'information' ? 'border-b-2 pb-1 border-red-300 active-tab' : 'border-none text-gray-200'}`} 
                        onClick={() => handleTabClick('information')}
                    >
                        Informações técnicas
                    </h6>
                </div>
                <div className="transition-all duration-500">
                    {isActiveTab === 'description' && (
                        <p className={`mt-8 ${isActiveTab === 'description' ? 'fadeIn' : ''}`}>
                            {description}
                        </p>
                    )}
                  {isActiveTab === 'information' && (
                    <div className={`w-full mt-8 gap-6 m-auto ${isActiveTab === 'information' ? 'fadeIn' : ''}`}>
                        {techInfoData.map(info => (
                            <div key={info.id} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {info.techInfo.map(infoTech => (
                                    <div key={infoTech.id} className="w-full flex-flow flex justify-between items-center">
                                        <h6 className="font-bold">{infoTech.techInfoTitle}</h6>
                                        <span className="text-gray-500 text-xs lg:text-sm">{infoTech.techInfoValue}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </>
    );
}
