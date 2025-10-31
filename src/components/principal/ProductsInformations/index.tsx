'use client';

import { TechInfo } from "@/types/products";
import { useState } from "react";

interface ProductsInformationsProps {
    info: TechInfo[];
    description:string;
}

export function ProductsInformations({ info, description }:ProductsInformationsProps) {
    const [isActiveTab, setIsActiveTab] = useState('description');

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
                        <div
                            className={`mt-8 ${isActiveTab === 'description' ? 'fadeIn' : ''}`}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    )}
                  {isActiveTab === 'information' && (
                    <div className={`grid grid-cols-1 lg:grid-cols-2 w-full mt-8 gap-6 m-auto ${isActiveTab === 'information' ? 'fadeIn' : ''}`}>
                        {info.map((info, index: number) => (
                            <div key={index} className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="w-full flex-col flex lg:justify-between lg:items-center">
                                    <h6 className="font-bold mr-auto">{info.techInfoTitle}</h6>
                                    <span className="text-gray-500 text-xs lg:text-sm">{info.techInfoValue}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </>
    );
}
