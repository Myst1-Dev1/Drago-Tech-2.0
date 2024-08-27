'use client';

import { ProductNode } from "@/types/products";
import { Dispatch, SetStateAction } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
    setLoading:Dispatch<SetStateAction<boolean>>;
    itensPerPage:number;
    productsData:ProductNode[];
    currentPage:number;
    setCurrentPage:Dispatch<SetStateAction<number>>
}

export function Pagination({ setLoading, itensPerPage, productsData, currentPage, setCurrentPage }:PaginationProps) {

    function handleCurrentPage(i:number) {
        if(currentPage === i) return;

        setLoading(true);
        setCurrentPage(i)
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }

    function renderPaginationButtons() {
        const totalPages = Math.ceil(productsData?.length / itensPerPage); 
        const buttons = [];
    
        for(let i = 0; i < totalPages; i++) {
            if (i === 0 || i === totalPages - 1 || (i >= currentPage - 1 && i <= currentPage + 1)) {
                buttons.push(
                    <button key={i} className={`cursor-pointer text-white p-4 flex justify-center items-center bg-black rounded-md w-5 h-5 transition-all duration-500 hover:bg-red-600 ${currentPage === i ? 'opacity-100' : 'opacity-50'}`} onClick={() => handleCurrentPage(i)}>
                        {i + 1}
                    </button>
                );
            } else if (buttons[buttons.length - 1] !== '...') {
                buttons.push('...');
            }
        }
    
        return buttons;
    };

    function handlePreviousPage() {
        if(currentPage === 0) return;

        setLoading(true);
        setCurrentPage(Math.max(currentPage - 1, 0));
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }

    function handleNextPage() {
        const totalPages = Math.ceil(productsData.length / itensPerPage);

        if (currentPage >= totalPages - 1) return;

        setLoading(true)
        setCurrentPage(Math.min(currentPage + 1, Math.ceil(productsData.length / itensPerPage) - 1))
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }

    return (
        <>
            <div className="flex justify-center items-center gap-5">
                <div onClick={handlePreviousPage} className="cursor-pointer p-2 flex justify-center items-center bg-black rounded-md transition-all duration-500 hover:bg-red-600">
                    <FaArrowLeft className="text-white" />
                </div>
                {renderPaginationButtons()}
                <div onClick={handleNextPage} className="cursor-pointer p-2 flex justify-center items-center bg-black rounded-md transition-all duration-500 hover:bg-red-600">
                    <FaArrowRight className="text-white" />
                </div>
            </div>
        </>
    )
}