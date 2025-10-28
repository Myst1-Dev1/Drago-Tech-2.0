import { createProduct } from "@/actions/productActions";
import { useState } from "react";
import { useFormState } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";

export function CreateProductForm() {
    const [techInfo, setTechInfo] = useState({ techInfoTitle: "", techInfoValue: "" });
    const [techInfoList, setTechInfoList] = useState<
        { techInfoTitle: string; techInfoValue: string }[]
    >([]);
    const [file, setFile] = useState<File | null>();
    const [files, setFiles] = useState<FileList | null>(null);

    async function handleCreateProduct(prevState: any, formData: FormData) {
        try {
            const result = await createProduct(prevState, techInfoList, formData);

            if (result?.message) {
                if (result.success) {
                    alert('Produto criado com sucesso');
                } else {
                    alert('Tivemos um erro na criação do produto');
                }
            }

            return result;
        } catch (error) {
            console.log(error);
        }
    }

    const [formState, formAction, pending] = useFormState(handleCreateProduct, { success: false });

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
                <h3 className="text-xl font-bold">Cadastrar novo produto</h3>
                <form action={formAction} className="py-6 max-w-[29rem] w-full">
                    <div className="flex flex-col gap-4">
                        <label 
                            htmlFor="image" 
                            className={`relative w-full h-48 ${file ? '' : 'bg-gray-100'}`}
                            style={file ? { backgroundImage: `url(${URL.createObjectURL(file)})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                        >
                            {file ? '' : <FaUpload className="absolute top-1/2 left-1/2 -translation-x-1/2 -translation-y-1/2 text-2xl cursor-pointer" />}
                        </label>
                        <input type="file" className="hidden" name="image" id="image" onChange={(e) => setFile(e.target.files?.[0])} />
                        <div className="flex gap-4">
                            <input type="file" className="hidden" name="relatedImages" id="relatedImages" multiple onChange={handleFileChange} />
                            <label htmlFor="relatedImages" className="w-20 h-20 bg-gray-100 grid place-items-center cursor-pointer">
                                <span className="font-bold text-3xl">+</span>
                            </label>
                            {files && Array.from(files).slice(0, 4).map((file, index) => (
                            <div
                                key={index}
                                className="w-20 h-20 bg-gray-200"
                                style={{
                                backgroundImage: `url(${URL.createObjectURL(file)})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                }}
                            />
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4 flex-col lg:flex-row">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="name" className="font-semibold">Nome do produto</label>
                            <input type="text" className="rounded-md w-full p-3 border border-gray-300 outline-none" name="name" id="name" placeholder="Teclado HyperX" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="price" className="font-semibold">Preço do produto</label>
                            <input type="text" className="rounded-md w-full p-3 border border-gray-300 outline-none" name="price" id="price" placeholder="R$:0,00" />
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4 flex-col lg:flex-row">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="brand" className="font-semibold">Marca do produto</label>
                            <input type="text" className="rounded-md w-full p-3 border border-gray-300 outline-none" name="brand" id="brand" placeholder="Asus" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="category" className="font-semibold">Categoria do produto</label>
                            <input type="text" className="rounded-md w-full p-3 border border-gray-300 outline-none" name="category" id="category" placeholder="Teclado" />
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
                            <input type="checkbox" id="isOffer" name="isOffer" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="priceOffer">Preço em oferta</label>
                            <input type="text" id="priceOffer" name="priceOffer" placeholder="R$:12,00" className="rounded-md w-full p-3 border border-gray-300 outline-none" />
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4 flex-col w-full justify-between lg:flex-row">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="recomendedProduct">Produto recomendado?</label>
                            <input type="checkbox" id="recomendedProduct" name="recomendedProduct" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="popularProduct">Produto popular?</label>
                            <input type="checkbox" id="popularProduct" name="popularProduct" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                        <label htmlFor="description" className="font-semibold">Descrição do produto</label>
                        <textarea className="resize-none h-36 rounded-md w-full p-3 border border-gray-300 outline-none" name="description" id="description" placeholder="Teclado de uma marca boa" />
                    </div>
                    <button type="submit" className="p-3 block mx-auto mt-5 text-white font-semibold bg-red-500 rounded-md max-w-36 w-full transition-all duration-500 hover:brightness-90">
                        {pending ? 'Carregando...' : 'Enviar'}
                    </button>
                </form>
            </div>
        </>
    )
}