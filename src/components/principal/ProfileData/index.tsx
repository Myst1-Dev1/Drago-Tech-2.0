'use client';

import { ProfileInformations } from "./ProfileInformations";
import Image from "next/image";
import profileUserIcon from "../../../../public/images/profileUserIcon.png"
import { FaHeart, FaUser } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { useState } from "react";
import { ProfileOrders } from "./ProfileOrders";
import { ProfileFavorites } from "./ProfileFavorites";

interface ProfileDataProps {
    user:any;
}

export function ProfileData({ user }:ProfileDataProps) {
    const [profileMenu, setProfileMenu] = useState('info');

    return (
        <>
             <div className="px-4 lg:px-16 py-8 grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-zinc-50 lg:max-w-72 w-full mb-6 lg:mb-0">
                    <div className="p-8 flex items-center gap-4">
                        <Image src={profileUserIcon} width={80} height={80} alt="imagem de usuário" />
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-400 font-bold">Olá</span>
                            <h5 className="font-bold text-xl">{user?.name}</h5>
                        </div>
                    </div>
                    <div onClick={() => setProfileMenu('info')} className={`cursor-pointer p-6 ${profileMenu === 'info' ? 'bg-red-500 text-white' : ''} flex items-center gap-4`}>
                        <FaUser />
                        <h6>Minha conta</h6>
                    </div>
                    <div onClick={() => setProfileMenu('orders')} className={`cursor-pointer p-6 ${profileMenu === 'orders' ? 'bg-red-500 text-white' : ''} flex items-center gap-4`}>
                        <FaCartFlatbedSuitcase />
                        <h6>Meus pedidos</h6>
                    </div>
                    <div onClick={() => setProfileMenu('favorites')} className={`cursor-pointer p-6 ${profileMenu === 'favorites' ? 'bg-red-500 text-white' : ''} flex items-center gap-4`}>
                        <FaHeart />
                        <h6>Lista de desejos</h6>
                    </div>
                </div>
                <div className="bg-zinc-50 p-6 w-full col-span-2">
                    {profileMenu === 'info' && <ProfileInformations user={user} />}
                    {profileMenu === 'orders' && <ProfileOrders />}
                    {profileMenu === 'favorites' && <ProfileFavorites />}
                </div>
            </div>
        </>
    )
}