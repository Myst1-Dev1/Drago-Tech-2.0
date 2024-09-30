import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { RiArrowGoBackFill } from 'react-icons/ri';
import product from '../../../../../public/images/productImg.jpg';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

interface ProfileFavoritesProps {
    user:any;
    handleCloseProfileMenu: () => void;
}

export function ProfileFavorites({ user, handleCloseProfileMenu }:ProfileFavoritesProps) {
    useGSAP(() => {
        gsap.to('.favorite', {opacity:1, marginTop:-30, duration:0.5})
    }, []);
    
    return (
        <div className="favorite opacity-0">
            <div className='border-b border-gray-300 pb-2 flex justify-between'>
                <h5 className="text-xl font-bold">Favoritos</h5>
                <RiArrowGoBackFill onClick={handleCloseProfileMenu} className='mt-4 text-xl cursor-pointer' />
            </div>
            <div className='relative bg-zinc-50 rounded-md mb-4 p-4 w-full mt-6 flex flex-wrap gap-4 lg:gap-0 justify-between'>
                <div className='flex flex-wrap items-center gap-4'>
                    <Image className='m-auto' src={product} width={100} height={100} alt='imagem do produto' />
                    <div>
                        <span>Tipo</span>
                        <h6 className='max-w-[600px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos voluptate explicabo aliquam odit et cupiditate nostrum culpa nobis laboriosam pariatur eveniet, veniam, fuga beatae repellendus unde incidunt. Harum, molestiae.</h6>
                    </div>
                </div>
                <div className='flex items-center gap-10'>
                    <div>
                        <del className='text-gray-500 text-sm'>R$:500,00</del>
                        <h6 className='font-bold text-xl'>R$:600,00</h6>
                        <span className='text-gray-500'>À vista no pix</span>
                    </div>
                    <button className="text-sm text-white flex items-center justify-center gap-4 font-bold bg-red-500 rounded-md max-w-56 h-10 w-full p-3 transition-all duration-500 hover:bg-red-700">
                        <FaShoppingCart />
                        Comprar
                    </button>
                </div>
                <FaHeart className='text-red-500 absolute right-3 top-3' />
            </div>
        </div>
    )
}