'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";


export function BlogSearch() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useGSAP(() => {
        gsap.to('.search-fade', {opacity:1, ease:'power1', duration:0.5})
    }, [isSearchOpen]);

    return (
        <>
            <div onClick={() => setIsSearchOpen(true)} className="flex items-center gap-3 cursor-pointer transition-all duration-500 hover:border-b hover:border-rose-400">
                <FaSearch className="text-rose-500" />
                <h6 className="hidden lg:block text-[#38393C]">Pesquisar</h6>
            </div>
            {isSearchOpen && <div className="search-fade opacity-0 w-full h-screen z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/40">
                <FaTimes onClick={() => setIsSearchOpen(false)} className="absolute top-4 right-4 text-2xl text-white cursor-pointer transition-all duration-500 hover:text-rose-500" />
                <div className="max-w-[450px] w-full rounded-md bg-white flex flex-col absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4">
                    <div className="flex items-center p-4 gap-3">
                        <FaSearch />
                        <input className="outline-none bg-none w-full" type="text" placeholder="Pesquise por um artigo" />
                    </div>
                    {/* <div className="flex flex-col gap-3 mb-3 border-t border-zinc-300">
                        <span className="text-blog-post-gray text-xs px-4 mt-3">POSTS</span>
                        <div className="transition-all duration-500 px-4 hover:bg-gray-300">
                            <h6 className="text-blog-post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                            <p className="text-blog-post-gray text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae de...</p>
                        </div>
                        <div className="transition-all duration-500 px-4 hover:bg-gray-300">
                            <h6 className="text-blog-post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                            <p className="text-blog-post-gray text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae de...</p>
                        </div>
                        <div className="transition-all duration-500 px-4 hover:bg-gray-300">
                            <h6 className="text-blog-post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                            <p className="text-blog-post-gray text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae de...</p>
                        </div>
                    </div> */}
                </div>
            </div>}
        </>
    )
}