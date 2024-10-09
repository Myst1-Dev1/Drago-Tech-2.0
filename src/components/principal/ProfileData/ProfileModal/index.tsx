import { handlePhone } from "@/utils/formatPhoneInput";
import { FaTimes } from "react-icons/fa";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface ProfileModalProps {
    setModal:Dispatch<SetStateAction<boolean>>
}

export function ProfileModal({ setModal }:ProfileModalProps) {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

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
            setIsLoading(true);
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
                    router.refresh();
                }else {
                    return toast.error(result.message);
                }
            });
        } catch (error) {
            console.log(error);
        }finally {
            setIsLoading(false);
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
                        <button type="submit" className="bg-red-500 text-white font-bold w-full rounded-md p-3 transition-all duration-500 hover:bg-red-600 mt-4">
                            {isLoading ? 
                                <div role="status">
                                <svg aria-hidden="true" className="m-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-500 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                            : 'Atualizar dados'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}