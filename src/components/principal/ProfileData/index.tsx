'use client';

import { ProfileInformations } from "./ProfileInformations";
import Image from "next/image";
import profileUserIcon from "../../../../public/images/profileUserIcon.png"
import { FaEnvelope, FaHeart, FaPencilAlt, FaUser } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { useState } from "react";
import { ProfileOrders } from "./ProfileOrders";
import { ProfileFavorites } from "./ProfileFavorites";
import gsap from "gsap";
import { User } from "@/types/user";
import { ProfileModal } from "./ProfileModal";

interface ProfileDataProps {
    user:User[] | any;
}

export function ProfileData({ user }:ProfileDataProps) {
    const [profileMenu, setProfileMenu] = useState('');
    const [modal, setModal] = useState(false);

    function handleShowProfileMenu(menu:string) {
        gsap.to('.menu-box', {opacity:0, display:"none", duration:0.5, ease: 'power2.inOut', onComplete:() => { setProfileMenu(menu) }})
    }

    function handleCloseProfileMenu() {
        gsap.to('.menu-box', {opacity:1, display:"flex", duration:0.5, onComplete:() => { setProfileMenu('') }})
    }

    const userFavorite = user?.[0]?.user?.favorites;

    return (
        <>
            {user?.map((user:any, index:number) => ( <div  key={index} className="px-4 lg:px-16 py-8 max-w-[1200px] w-full m-auto">
                <div className="bg-zinc-50 rounded-md w-full m-auto p-4 flex justify-between items-center flex-wrap lg:gap-0 gap-10">
                    <div className="flex gap-4 items-center">
                        <Image src={profileUserIcon} width={80} height={80} alt="imagem do usuário"/>
                        <div>
                            <h5 className="font-bold text-2xl">Bem vindo, {user.user.name}</h5>
                            <div className="flex gap-3 items-center">
                                <FaEnvelope className="text-xs text-red-500" />
                                <span className="text-gray-500 font-bold">{user.user.email}</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setModal(true)} className="flex items-center gap-4 h-14 p-3 font-bold flex-shrink-0 bg-red-500 text-white w-40 rounded-md transition-all duration-500 hover:bg-red-700"><FaPencilAlt/> Editar dados</button>
                </div>

                <div className="py-8 flex justify-between items-center flex-wrap lg:gap-0 gap-5">
                    <div onClick={() => handleShowProfileMenu('order')} className={`menu-box opacity-100 ${profileMenu == '' ? 'cursor-pointer' : 'pointer-events-none'} flex items-center gap-4 bg-zinc-50 h-[128px] p-4 rounded-md max-w-80 w-full`}>
                        <FaCartFlatbedSuitcase className="text-red-500 text-3xl flex-shrink-0" />
                        <div>
                            <h6 className="uppercase font-bold">meus pedidos</h6>
                            <p>
                                Veja históricos e acompanhe suas compras.
                            </p>
                        </div>
                    </div>
                    <div onClick={() => handleShowProfileMenu('info')} className={`menu-box opacity-100 ${profileMenu === '' ? 'cursor-pointer' : 'pointer-events-none'} flex items-center gap-4 bg-zinc-50 h-[128px] p-4 rounded-md max-w-80 w-full`}>
                        <FaUser className="text-red-500 text-3xl flex-shrink-0" />
                        <div>
                            <h6 className="uppercase font-bold">meus dados</h6>
                            <p>
                                Altere seus dados cadastrados, endereços ou cadastre um novo endereço.
                            </p>
                        </div>
                    </div>
                    <div onClick={() => handleShowProfileMenu('favorite')} className={`menu-box opacity-100 ${profileMenu === '' ? 'cursor-pointer' : 'pointer-events-none'} flex items-center gap-4 bg-zinc-50 h-[128px] p-4 rounded-md max-w-80 w-full`}>
                        <FaHeart className="text-red-500 text-3xl flex-shrink-0" />
                        <div>
                            <h6 className="uppercase font-bold">favoritos</h6>
                            <p>
                                Consulte sua lista de produtos favoritados.
                            </p>
                        </div>
                    </div>
                </div>
                {profileMenu === 'info' ? <ProfileInformations user={user} handleCloseProfileMenu={handleCloseProfileMenu} /> : ''}
                {profileMenu === 'order' ? <ProfileOrders user={user} handleCloseProfileMenu={handleCloseProfileMenu} /> : ''}
                {profileMenu === 'favorite' ? <ProfileFavorites favorites={userFavorite} handleCloseProfileMenu={handleCloseProfileMenu} /> : ''}
            </div>))}

            {modal && <ProfileModal setModal = {setModal} />}
        </>
    )
}