import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { RiArrowGoBackFill } from 'react-icons/ri';

interface ProfileOrdersProps {
    user: any;
    handleCloseProfileMenu: () => void;
}

export function ProfileOrders({ user, handleCloseProfileMenu }: ProfileOrdersProps) {
    useGSAP(() => {
        gsap.to('.order', { opacity: 1, marginTop: -30, duration: 0.5 });
    }, []);

    return (
        <div className="order opacity-0">
            <div className='border-b border-gray-300 pb-2 flex justify-between'>
                <h5 className="text-xl font-bold">Pedidos</h5>
                <RiArrowGoBackFill onClick={handleCloseProfileMenu} className='mt-4 text-xl cursor-pointer' />
            </div>
            {user?.map((order: any, index: number) => (
                <div key={index} className='bg-zinc-50 rounded-md mb-4 p-4 w-full mt-6 flex flex-col gap-3'>
                    <span className='text-gray-600 font-bold'>
                            Pedido 0{index + 1} - {
                            (() => {
                                const date = new Date(order?.orderDate);
                                const day = String(date.getDate()).padStart(2, '0');
                                const month = String(date.getMonth() + 1).padStart(2, '0');
                                const year = date.getFullYear();
                                return `${day}/${month}/${year}`;
                            })()
                        }
                    </span>
                    {/* <span className='text-green-400 font-bold'>Pedido Concluído</span> */}
                    {order.cart.map((item: any, itemIndex: number) => (
                        <div key={itemIndex} className='flex gap-4 items-center'>
                            <Image src={item.product?.image.node?.mediaItemUrl} width={80} height={80} alt='imagem do produto' />
                            <div>
                                <h6>{item.product?.productName}</h6>
                                <span className='text-gray-500 text-sm'>Quantidade: {item.quantity}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
