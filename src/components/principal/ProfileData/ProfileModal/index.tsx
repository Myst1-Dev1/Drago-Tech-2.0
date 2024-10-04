import Image from "next/image";
import profileImg from "../../../../../public/images/profileUserIcon.png";
import { FaUpload } from "react-icons/fa6";
import { handlePhone } from "@/utils/formatPhoneInput";
import { FaTimes } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ProfileModalProps {
    setModal:Dispatch<SetStateAction<boolean>>
}

export function ProfileModal({ setModal }:ProfileModalProps) {

    function handleCloseModal() {
        gsap.to('.modal', {opacity:0, ease:'power1', onComplete:() => { setModal(false) }, duration:0.5})
    }

    useGSAP(() => {
        gsap.to('.modal', {opacity:1, ease:'power1', duration:0.5})
    }, [])

    return (
        <>
            <div className="modal opacity-0 z-50 fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-black/60">
                <div className="bg-white p-5 max-w-[600px] w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
                    <div onClick={handleCloseModal} className="absolute right-2 top-2 w-7 h-7 text-white bg-black rounded-full flex justify-center items-center transition-all duration-500 cursor-pointer hover:bg-red-500"><FaTimes /></div>
                    <form>
                        <div className="block lg:flex justify-between items-center flex-wrap lg:gap-0 gap-5 mb-5">
                            <div className="flex gap-4 items-center mb-3 lg:mb-0">
                                <Image src={profileImg} width={60} height={60} alt="icone de perfil" />
                                <input className="hidden" type="file" id="file" />
                                <label className="cursor-pointer" htmlFor="file"><FaUpload /></label>
                            </div>
                            <div className="flex flex-col gap-3 mb-3 lg:mb-0">
                                <label htmlFor="name" className="text-gray-500">Nome*</label>
                                <input id="name" className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="John Doe" />
                            </div>
                        </div>
                        <div className="block lg:flex justify-between items-center flex-wrap lg:gap-0 gap-5 mb-5">
                            <div className="flex flex-col gap-3 mb-3 lg:mb-0">
                                <label htmlFor="email" className="text-gray-500">Email*</label>
                                <input id="email" className="outline-none p-4 rounded-md w-full border border-gray-300" type="email" placeholder="JohnDoe@gmail.com" />
                            </div>
                            <div className="flex flex-col gap-3 mb-3 lg:mb-0">
                                <label htmlFor="phone" className="text-gray-500">Telefone*</label>
                                <input id="phone" className="outline-none p-4 rounded-md w-full border border-gray-300" onChange={(e) => handlePhone(e)} maxLength={15} type="tel" placeholder="21 96789-7789" />
                            </div>
                        </div>
                        <div className="block lg:flex justify-between items-center flex-wrap lg:gap-0 gap-5 mb-5">
                            <div className="flex flex-col gap-3 mb-3 lg:mb-0">
                                <label htmlFor="state" className="text-gray-500">Estado*</label>
                                <input id="state" className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="RJ" />
                            </div>
                            <div className="flex flex-col gap-3 mb-3 lg:mb-0">
                                <label htmlFor="city" className="text-gray-500">Cidade*</label>
                                <input id="city" className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Santo Loren" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="zipCode" className="text-gray-500">CEP*</label>
                            <input id="zipCode" className="outline-none p-4 rounded-md w-full border border-gray-300" type="tel" placeholder="12345-890" />
                        </div>
                        <button type="submit" className="bg-red-500 text-white font-bold w-full rounded-md p-3 transition-all duration-500 hover:bg-red-600 mt-4">Atualizar dados</button>
                    </form>
                </div>
            </div>
        </>
    )
}