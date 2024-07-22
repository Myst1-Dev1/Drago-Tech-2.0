import Image from "next/image";
import aboutImg from "../../../../public/images/aboutImg.jpg";
import { TbCloudCog, TbDeviceDesktopCog, TbFolderCog, TbMoodCog, TbShieldCog, TbShoppingCartCog } from "react-icons/tb";

export default function About() {
    return (
        <>
            <div className="px-4 lg:px-28 py-8">
                <div className="flex gap-5 flex-col lg:flex-row">
                    <Image className="object-cover w-full" src={aboutImg} width={400} height={400} alt="foto de uma loja de tecnologia" />
                    <div className="mt-6 lg:mt-0">
                        <h2 className="font-bold text-xl text-center mb-6">Nossa História</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, maxime architecto sunt 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita, voluptatibus ex nihil magnam doloribus labore suscipit consequatur eaque quam pariatur autem aliquid impedit sed saepe ipsam nam, in delectus!
                            <br /><br />
                            laboriosam cum consequatur voluptate iure itaque possimus alias, distinctio, officiis beatae nemo. Velit, magnam praesentium. Sed, harum temporibus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde corporis sunt voluptatum
                        </p>
                    </div>
                </div>

                <div className="py-8">
                    <h2 className="text-xl font-bold">Nossos Serviços</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto mt-8 gap-5">
                        <div className="p-5 border border-gray-300 rounded-md flex flex-col gap-4 transition duration-500 hover:bg-black hover:text-white">
                            <div className="flex gap-4 items-center">
                                <TbShieldCog className="text-red-400 h-5 w-5" />
                                <h3>Assistência Técnica e Reparos</h3>
                            </div>
                            <p>Serviços de conserto e manutenção para dispositivos como computadores, laptops, smartphones, tablets e outros eletrônicos.</p>
                        </div>
                        <div className="p-5 border border-gray-300 rounded-md flex flex-col gap-4 transition duration-500 hover:bg-black hover:text-white">
                            <div className="flex gap-4 items-center">
                                <TbDeviceDesktopCog className="text-red-400 w-5 h-5" />
                                <h3>Configuração de Dispositivos</h3>
                            </div>
                            <p>Ajuda na configuração inicial de novos dispositivos, incluindo instalação de software, criação de contas de usuário e personalização de configurações.</p>
                        </div>
                        <div className="p-5 border border-gray-300 rounded-md flex flex-col gap-4 transition duration-500 hover:bg-black hover:text-white">
                            <div className="flex gap-4 items-center">
                                <TbFolderCog className="text-red-400 w-5 h-5" />
                                <h3>Atualizações de Software e Hardware</h3>
                            </div>
                            <p>Serviço de atualização de sistemas operacionais, drivers e substituição de componentes de hardware para melhorar o desempenho do dispositivo.</p>
                        </div>
                        <div className="p-5 border border-gray-300 rounded-md flex flex-col gap-4 transition duration-500 hover:bg-black hover:text-white">
                            <div className="flex gap-4 items-center">
                                <TbMoodCog className="text-red-400 w-5 h-5" />
                                <h3>Consultoria em Tecnologia</h3>
                            </div>
                            <p>Orientação sobre a melhor escolha de dispositivos e soluções tecnológicas para atender às necessidades específicas dos clientes.</p>
                        </div>
                        <div className="p-5 border border-gray-300 rounded-md flex flex-col gap-4 transition duration-500 hover:bg-black hover:text-white">
                            <div className="flex gap-4 items-center">
                                <TbCloudCog className="text-red-400 w-5 h-5" />
                                <h3>Backup e Recuperação de Dados</h3>
                            </div>
                            <p>Soluções para backup seguro e recuperação de dados em caso de falhas no dispositivo ou perda de informações.</p>
                        </div>
                        <div className="p-5 border border-gray-300 rounded-md flex flex-col gap-4 transition duration-500 hover:bg-black hover:text-white">
                            <div className="flex gap-4 items-center">
                                <TbShoppingCartCog className="text-red-400 w-5 h-5" />
                                <h3>Treinamento e Suporte Técnico</h3>
                            </div>
                            <p>Oferecimento de treinamento para uso de novos dispositivos e softwares, bem como suporte técnico contínuo para resolver problemas que possam surgir.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}