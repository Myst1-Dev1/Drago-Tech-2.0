import { createProduct, updateProduct } from "@/actions/productActions";
import { Product } from "@/types/products";
import { useActionState, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

interface UpdateProductFormProps {
    products: Product[];
    productId: number;
}

export function UpdateProductForm({ products, productId }: UpdateProductFormProps) {
    const [techInfo, setTechInfo] = useState({ techInfoTitle: "", techInfoValue: "" });
    const [techInfoList, setTechInfoList] = useState<
        { techInfoTitle: string; techInfoValue: string }[]
    >([]);
    const [file, setFile] = useState<File | null>();
    const [files, setFiles] = useState<FileList | null>(null);

    const formRef = useRef<HTMLFormElement>(null);

    const productData = products.filter(product => product.id === productId);

    async function handleUpdateProduct(prevState: any, formData: FormData) {
        try {
            const result = await updateProduct(prevState, techInfoList, productId, formData);

            if (result?.message) {
                if (result.success) {
                    alert('Produto atualizado com sucesso');

                    formRef.current!.reset();
                } else {
                    alert('Tivemos um erro na atualização do produto');
                }
            }

            return result;
        } catch (error) {
            console.log(error);
        }
    }

    const [formState, formAction, pending] = useActionState(handleUpdateProduct, { success: false });

    const handleChange = (field: "techInfoTitle" | "techInfoValue", value: string) => {
        setTechInfo((prev) => ({ ...prev, [field]: value }));
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            setFiles(selectedFiles);
        }
    };

    const handleAdd = () => {
        if (!techInfo.techInfoTitle || !techInfo.techInfoValue) return;
        setTechInfoList((prev) => [...prev, techInfo]);
        setTechInfo({ techInfoTitle: "", techInfoValue: "" });
    };

    const handleRemove = (index: number) => {
        setTechInfoList((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="px-4 mt-4">
                <h3 className="text-xl font-bold">Atualizar produto</h3>
                <form ref={formRef} action={formAction} className="py-6 max-w-[29rem] w-full">
                    <div className="flex flex-col gap-4">
                        <label 
                            htmlFor="image" 
                            className={`relative w-full h-48 ${file ? '' : 'bg-gray-100'}`}
                            style={file ? { backgroundImage: `url(${URL.createObjectURL(file)})`, backgroundSize: 'cover', backgroundPosition: 'center' } : 
                            {backgroundImage: `url(${productData[0].imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                        >
                            {file ? '' : <FaUpload className="z-50 text-red-400 absolute top-1/2 left-1/2 -translation-x-1/2 -translation-y-1/2 text-2xl cursor-pointer" />}
                        </label>
                        <input type="file" className="hidden" name="image" id="image" onChange={(e) => setFile(e.target.files?.[0])} />
                        <div className="flex gap-4">
                            <input type="file" className="hidden" name="relatedImages" id="relatedImages" multiple onChange={handleFileChange} />
                            <label htmlFor="relatedImages" className="w-20 h-20 bg-gray-100 grid place-items-center cursor-pointer">
                                <span className="font-bold text-3xl">+</span>
                            </label>
                            {files ? Array.from(files).slice(0, 4).map((file, index) => (
                            <div
                                key={index}
                                className="w-20 h-20 bg-gray-200"
                                style={{
                                backgroundImage: `url(${URL.createObjectURL(file)})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                }}
                            />
                            ))
                            :
                                <>
                                    {productData[0].relatedImages?.map((img: string, index: number) => (
                                        <div
                                        key={index}
                                        className="w-20 h-20 bg-gray-200"
                                        style={{
                                            backgroundImage: `url(${img})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                        />
                                    ))}
                                </>
                            }
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4 flex-col lg:flex-row">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="name" className="font-semibold">Nome do produto</label>
                            <input readOnly value={productData[0].name} type="text" className="rounded-md w-full p-3 border border-gray-300 outline-none" name="name" id="name" placeholder="Teclado HyperX" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="price" className="font-semibold">Preço do produto</label>
                            <input readOnly value={productData[0].price} type="text" className="rounded-md w-full p-3 border border-gray-300 outline-none" name="price" id="price" placeholder="R$:0,00" />
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4 flex-col lg:flex-row">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="brand" className="font-semibold">Marca do produto</label>
                            <input readOnly value={productData[0].brand} type="text" className="rounded-md w-full p-3 border border-gray-300 outline-none" name="brand" id="brand" placeholder="Asus" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="category" className="font-semibold">Categoria do produto</label>
                            <input readOnly value={productData[0].category} type="text" className="rounded-md w-full p-3 border border-gray-300 outline-none" name="category" id="category" placeholder="Teclado" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                        <label htmlFor="techInfo" className="font-semibold">Informações do produto</label>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <input type="text" className="hidden" name="techInfo" />
                            <input
                                value={techInfo.techInfoTitle}
                                onChange={(e) => handleChange("techInfoTitle", e.target.value)}
                                type="text"
                                className="rounded-md w-full p-3 border border-gray-300 outline-none"
                                name="techInfoTitle"
                                id="techInfoTitle"
                                placeholder="Ex: Tamanho"
                            />
                            <input
                                value={techInfo.techInfoValue}
                                onChange={(e) => handleChange("techInfoValue", e.target.value)}
                                type="text"
                                className="rounded-md w-full p-3 border border-gray-300 outline-none"
                                name="techInfoValue"
                                id="techInfoValue"
                                placeholder="Ex: 33cm"
                            />
                        </div>

                        <div className="flex flex-wrap gap-3 mt-3">
                            {
                            productData[0].techInfo.map((item, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-3 bg-gray-500 text-white w-fit py-1 px-2 rounded-md"
                                >
                                    {item.techInfoTitle}: {item.techInfoValue}
                                    <FaTimes onClick={() => handleRemove(index)} className="cursor-pointer" />
                                </span>
                            ))
                            }
                        </div>

                        <div className="flex flex-wrap gap-3 mt-3">
                            {
                            techInfoList.map((item, index) => (
                                <span
                                key={index}
                                className="flex items-center gap-3 bg-gray-500 text-white w-fit py-1 px-2 rounded-md"
                                >
                                    {item.techInfoTitle}: {item.techInfoValue}
                                    <FaTimes onClick={() => handleRemove(index)} className="cursor-pointer" />
                                </span>
                            ))
                            }
                        </div>

                        <button
                            type="button"
                            onClick={handleAdd}
                            className="w-fit py-1 px-2 rounded-md bg-blue-500 text-white cursor-pointer transition-all duration-500 hover:brightness-90"
                        >
                            Add <span className="font-bold text-2xl">+</span>
                        </button>
                    </div>
                    <div className="mt-4 flex gap-4 flex-col w-full justify-between lg:flex-row">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="isOffer">Produto em oferta?</label>
                            <input type="checkbox" id="isOffer" name="isOffer" defaultChecked={productData[0].isOffer} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="priceOffer">Preço em oferta</label>
                            <input value={productData[0].priceOffer} type="text" id="priceOffer" name="priceOffer" placeholder="R$:12,00" className="rounded-md w-full p-3 border border-gray-300 outline-none" />
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4 flex-col w-full justify-between lg:flex-row">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="recomendedProduct">Produto recomendado?</label>
                            <input type="checkbox" id="recomendedProduct" name="recomendedProduct" defaultChecked={productData[0].recomendedProduct} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="popularProduct">Produto popular?</label>
                            <input type="checkbox" id="popularProduct" name="popularProduct" defaultChecked={productData[0].popularProduct} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                        <label htmlFor="description" className="font-semibold">Descrição do produto</label>
                        <SunEditor name="description" height="144" defaultValue={productData[0].description} readOnly />
                    </div>
                    <button type="submit" className="p-3 block mx-auto mt-5 text-white font-semibold bg-red-500 rounded-md max-w-36 w-full transition-all duration-500 hover:brightness-90">
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