

export function ProfileInformations() {
    return (
        <>
            <h5 className="text-xl font-bold border-b border-gray-300 pb-2">Informações pessoais</h5>
            <div className="flex flex-wrap justify-between">
                <div className="mt-5 flex flex-col gap-4">
                    <div className="flex gap-3">
                        <h6 className="text-gray-500">Nome:</h6>
                        <h6 className="font-bold">John Doe</h6>
                    </div>
                    <div className="flex gap-3">
                        <h6 className="text-gray-500">Email:</h6>
                        <h6 className="font-bold">johndoe@gmail.com</h6>
                    </div>
                    <div className="flex gap-3">
                        <h6 className="text-gray-500">Telefone:</h6>
                        <h6 className="font-bold">21 99890-3289</h6>
                    </div>
                    <div className="flex gap-3">
                        <h6 className="text-gray-500">Endereço:</h6>
                        <h6 className="font-bold">Rua silva loren</h6>
                    </div>
                    <div className="flex gap-3">
                        <h6 className="text-gray-500">Estado:</h6>
                        <h6 className="font-bold">RJ</h6>
                    </div>
                    <div className="flex gap-3">
                        <h6 className="text-gray-500">Cidade:</h6>
                        <h6 className="font-bold">São John Loren</h6>
                    </div>
                    <div className="flex gap-3">
                        <h6 className="text-gray-500">CEP:</h6>
                        <h6 className="font-bold">24909-890</h6>
                    </div>
                </div>
                <button className="flex-shrink-0 h-12 mt-6 rounded-md border-none bg-red-500 max-w-64 w-full p-3 text-white transition-all duration-500 hover:bg-red-600">Atualizar dados</button>
            </div>
        </>
    )
}