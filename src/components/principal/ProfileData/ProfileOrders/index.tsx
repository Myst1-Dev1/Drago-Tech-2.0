import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { FaPix } from 'react-icons/fa6';
import { RiArrowGoBackFill } from 'react-icons/ri';
import productImg from '../../../../../public/images/productImg.jpg';

interface ProfileOrdersProps {
    user:any;
    handleCloseProfileMenu: () => void;
}

export function ProfileOrders({ user, handleCloseProfileMenu }:ProfileOrdersProps) {
    useGSAP(() => {
        gsap.to('.order', {opacity:1, marginTop:-30, duration:0.5})
    }, []);
    
    return (
        <div className="order opacity-0">
           <div className='border-b border-gray-300 pb-2 flex justify-between'>
                <h5 className="text-xl font-bold">Pedidos</h5>
                <RiArrowGoBackFill onClick={handleCloseProfileMenu} className='mt-4 text-xl cursor-pointer' />
           </div>
           <div className='bg-zinc-50 rounded-md mb-4 p-4 w-full mt-6 flex flex-col gap-3'>
                <span className='text-gray-600 font-bold'>Pedido 01 - 02/03/2024</span>
                <span className='text-green-400 font-bold'>Pedido Concluído</span>
                <span className='text-gray-600 font-bold flex items-center gap-4'><FaPix className='text-green-500' /> Pagamento via pix</span>
                <div className='flex gap-4 items-center'>
                    <Image src={productImg} width={80} height={80} alt='imagem do produto' />
                    <div>
                        <h6>Nome do produto</h6>
                        <span className='text-gray-500 text-sm'>Quantidade: 1</span>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <Image src={productImg} width={80} height={80} alt='imagem do produto' />
                    <div>
                        <h6>Nome do produto</h6>
                        <span className='text-gray-500 text-sm'>Quantidade: 1</span>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <Image src={productImg} width={80} height={80} alt='imagem do produto' />
                    <div>
                        <h6>Nome do produto</h6>
                        <span className='text-gray-500 text-sm'>Quantidade: 1</span>
                    </div>
                </div>
           </div>
           <div className='bg-zinc-50 rounded-md mb-4 p-4 w-full mt-6 flex flex-col gap-3'>
                <span className='text-gray-600 font-bold'>Pedido 01 - 02/03/2024</span>
                <span className='text-green-400 font-bold'>Pedido Concluído</span>
                <span className='text-gray-600 font-bold flex items-center gap-4'><FaPix className='text-green-500' /> Pagamento via pix</span>
                <div className='flex gap-4 items-center'>
                    <Image src={productImg} width={80} height={80} alt='imagem do produto' />
                    <div>
                        <h6>Nome do produto</h6>
                        <span className='text-gray-500 text-sm'>Quantidade: 1</span>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <Image src={productImg} width={80} height={80} alt='imagem do produto' />
                    <div>
                        <h6>Nome do produto</h6>
                        <span className='text-gray-500 text-sm'>Quantidade: 1</span>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <Image src={productImg} width={80} height={80} alt='imagem do produto' />
                    <div>
                        <h6>Nome do produto</h6>
                        <span className='text-gray-500 text-sm'>Quantidade: 1</span>
                    </div>
                </div>
           </div>
        </div>
    )
}