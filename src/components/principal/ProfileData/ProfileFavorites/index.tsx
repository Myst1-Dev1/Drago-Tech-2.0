import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { formatPrice } from '@/utils/useFormatPrice';
import { ProductNode } from '@/types/products';
import { useCart } from '@/services/hooks/useCart';
import productImg from '../../../../../public/images/productImg.jpg';

interface ProfileFavoritesProps {
    favorites:ProductNode[];
    handleCloseProfileMenu: () => void;
}

export function ProfileFavorites({ favorites, handleCloseProfileMenu }:ProfileFavoritesProps) {
    const { handleAddToCart } = useCart();
    
    function addProduct(id:number) {
        handleAddToCart(id, favorites);
    }

    useGSAP(() => {
        gsap.to('.favorite', {opacity:1, marginTop:-30, duration:0.5})
    }, []);
    
    return (
        <div className="favorite opacity-0">
            <div className='border-b border-gray-300 pb-2 flex justify-between'>
                <h5 className="text-xl font-bold">Favoritos</h5>
                <RiArrowGoBackFill onClick={handleCloseProfileMenu} className='mt-4 text-xl cursor-pointer' />
            </div>
            {favorites?.map((favorite, index) => (
                <div key={index} className='relative bg-zinc-50 rounded-md mb-4 p-4 w-full mt-6 flex flex-wrap gap-4 lg:gap-0 justify-between'>
                    <div className='flex flex-wrap items-center gap-4'>
                        <Image className='m-auto' src={favorite.produtos?.image.node?.mediaItemUrl || productImg} width={100} height={100} alt='imagem do produto' />
                        <div>
                            <span>{favorite.produtos?.category}</span>
                            <h6 className='max-w-[600px]'>{favorite.produtos?.productName}</h6>
                        </div>
                    </div>
                    <div className='flex items-center gap-10'>
                        <div>
                            <del className='text-gray-500 text-sm'>{formatPrice(favorite.produtos?.price * 0.5)}</del>
                            <h6 className='font-bold text-xl'>{formatPrice(favorite.produtos?.price)}</h6>
                            <span className='text-gray-500 text-sm'>5% OFF com o prime</span>
                        </div>
                        <button className="text-sm text-white flex items-center justify-center gap-4 font-bold bg-red-500 rounded-md h-10 w-32 p-3 transition-all duration-500 hover:bg-red-700">
                            <FaShoppingCart onClick={() => addProduct(favorite.produtos?.id)} />
                            Comprar
                        </button>
                    </div>
                    <FaHeart className='text-red-500 absolute right-3 top-3' />
                </div>
            ))}
        </div>
    )
}