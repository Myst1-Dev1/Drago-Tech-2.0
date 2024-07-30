'use client';

import { useState } from "react";

export function ProductsInformations() {
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
                        <p className={`mt-8 ${isActiveTab === 'description' ? 'fadeIn' : ''}`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    )}
                    {isActiveTab === 'information' && (
                        <div className={`mt-8 grid grid-cols-1 lg:grid-cols-2 m-auto ${isActiveTab === 'information' ? 'fadeIn' : ''}`}>
                            <div className="flex flex-col gap-4">
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Marca</h6>
                                    <span className="text-gray-500">Asus</span>
                                </div>
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Tela</h6>
                                    <span className="text-gray-500">Full Hd 144hz</span>
                                </div>
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Processador</h6>
                                    <span className="text-gray-500">inter core i5 12400H</span>
                                </div>
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Gráficos</h6>
                                    <span className="text-gray-500">Nvidia RTX 3050</span>
                                </div>
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Memória</h6>
                                    <span className="text-gray-500">32gb DDR4</span>
                                </div>
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Armazenamento</h6>
                                    <span className="text-gray-500">1TB ssd nvme 2.0</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Audio</h6>
                                    <span className="text-gray-500">Lorem ipsum</span>
                                </div>
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Conexao</h6>
                                    <span className="text-gray-500">Lorem ipsum</span>
                                </div>
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Teclado</h6>
                                    <span className="text-gray-500">Lorem ipsum</span>
                                </div>
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Bateria</h6>
                                    <span className="text-gray-500">Lorem ipsum</span>
                                </div>
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Dimensões</h6>
                                    <span className="text-gray-500">Lorem ipsum</span>
                                </div>
                                <div className="max-w-96 w-full flex justify-between items-center">
                                    <h6 className="font-bold">Altura</h6>
                                    <span className="text-gray-500">Lorem ipsum</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
