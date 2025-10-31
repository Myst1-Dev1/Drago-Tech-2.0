import { createComment } from "@/actions/productActions";
import gsap from "gsap";
import { useActionState, useState } from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

interface ProductFormProps {
    commentOn:number;
}

export function ProductForm({ commentOn }:ProductFormProps) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

    async function actionWithId(prevState: any, formData: FormData) {
      const result = await createComment(prevState, commentOn, formData);

      if (result?.success) {
            if (result.success) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        }

        return result;
    }

    const [formState, formAction, pending] = useActionState(actionWithId, { success: false });

    function handleShowAvaliationForm() {
      setIsFormVisible(!isFormVisible);

      if (!isFormVisible) {
        gsap.to('.avaliation-form', { height: 300, duration: 0.5, opacity: 1 });
      } else {
        gsap.to('.avaliation-form', { height: 0, duration: 0.5, opacity: 0,});
      }
    }

    return (
        <>
             <div className="py-12">
                <div className="flex gap-3 items-center">
                    <FaPlus onClick={handleShowAvaliationForm} className="cursor-pointer text-red-500" />
                    <h2 className="font-bold text-xl">Avaliar produto</h2>
                </div>
                <form action={formAction} className="avaliation-form opacity-0 overflow-hidden h-0 mt-12 flex justify-center items-center m-auto flex-col gap-5 max-w-[900px]">
                    <input className="outline-none p-4 rounded-md w-full border border-gray-300" type="text" placeholder="Nome" name="clientName" />
                    <textarea className="resize-none h-28 outline-none p-4 rounded-md w-full border border-gray-300" placeholder="Avaliação" name="content"/>
                     <input type="number" name="rating" value={rating} className="hidden" readOnly />
                      <div className="flex items-center gap-3 cursor-pointer">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            size={24}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            className={`transition-colors duration-500 ${
                              star <= (hover || rating) ? "text-yellow-400" : "text-gray-400"
                            }`}
                          />
                        ))}
                        </div>
                    {/* {errorText !== '' ? <span className="py-3 text-red-600 font-bold text-center">{errorText}</span> : ''} */}
                    <button className="p-4 rounded-md w-72 text-white font-bold bg-red-500 transition-all duration-500 hover:bg-red-700">
                        {pending ? 
                            <div role="status">
                            <svg aria-hidden="true" className="m-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-500 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        </div>
                        : 'Enviar'}
                    </button>
                </form>
            </div>
        </>
    )
}