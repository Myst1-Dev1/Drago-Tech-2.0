import { handlePhone } from "@/utils/formatPhoneInput";
import { FaTimes } from "react-icons/fa";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";

interface ProfileModalProps {
    setModal:Dispatch<SetStateAction<boolean>>
}

export function ProfileModal({ setModal }:ProfileModalProps) {

      const { 'user': userId } = parseCookies();

    function handleCloseModal() {
        gsap.to('.modal', {opacity:0, ease:'power1', onComplete:() => { setModal(false) }, duration:0.5})
    }

    async function handleUpdateProfileInfo(e:FormEvent | any) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formEntries = Object.fromEntries(formData.entries());
        const { name, phone, address, city, state, zipCode} = formEntries as { [key: string]: string };

        try {
            await fetch(`/api/auth/update/${userId}`, {
                method:'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name,
                    phone,
                    address,
                    city,
                    state,
                    zipCode,
                }),
            }).then(async (res) => {
                const result = await res.json();

                if(result.status === 200) {
                    toast.success(result.message);
                }else {
                    return toast.error(result.message);
                }
            });
        } catch (error) {
            console.log(error);
        }
       
    }

    useGSAP(() => {
        gsap.to('.modal', {opacity:1, ease:'power1', duration:0.5})
    }, [])

    return (
        <>
            <div className="modal opacity-0 z-50 fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-black/60">
                <div className="bg-white p-5 max-w-[600px] w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
                    <div onClick={handleCloseModal} className="absolute right-2 top-2 w-7 h-7 text-white bg-black rounded-full flex justify-center items-center transition-all duration-500 cursor-pointer hover:bg-red-500"><FaTimes /></div>
                    <form onSubmit={handleUpdateProfileInfo}>
                        <div className="flex flex-col gap-3 mb-3">
                            <label htmlFor="name" className="text-gray-500">Nome*</label>
                            <input id="name" name="name" className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="John Doe" />
                        </div>
                        <div className="block lg:flex justify-between items-center flex-wrap lg:gap-0 gap-5 mb-5">
                            <div className="flex flex-col gap-3 mb-3 lg:mb-0">
                                <label htmlFor="address" className="text-gray-500">Endereço*</label>
                                <input id="address" name="address" className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="RJ" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="phone" className="text-gray-500">Telefone*</label>
                                <input id="phone" name="phone" className="outline-none p-4 rounded-md w-full border border-gray-300" onChange={(e) => handlePhone(e)} maxLength={15} type="tel" placeholder="21 96789-7789" />
                            </div>
                        </div>
                        <div className="block lg:flex justify-between items-center flex-wrap lg:gap-0 gap-5 mb-5">
                            <div className="flex flex-col gap-3 mb-3 lg:mb-0">
                                <label htmlFor="state" className="text-gray-500">Estado*</label>
                                <input id="state" name="state" className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="RJ" />
                            </div>
                            <div className="flex flex-col gap-3 mb-3 lg:mb-0">
                                <label htmlFor="city" className="text-gray-500">Cidade*</label>
                                <input id="city" name="city" className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Santo Loren" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="zipCode" className="text-gray-500">CEP*</label>
                            <input id="zipCode" name="zipCode" className="outline-none p-4 rounded-md w-full border border-gray-300" type="tel" placeholder="12345-890" />
                        </div>
                        <button type="submit" className="bg-red-500 text-white font-bold w-full rounded-md p-3 transition-all duration-500 hover:bg-red-600 mt-4">Atualizar dados</button>
                    </form>
                </div>
            </div>
        </>
    )
}