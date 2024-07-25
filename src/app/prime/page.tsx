'use client';

import Image from "next/image";
import primeImg from "../../../public/images/primeImg.png";
import logo from "../../../public/images/logo-prime.png";
import { FaPercent, FaPlus, FaRocket, FaServicestack, FaSuitcase, FaTicketAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [expanded, setExpanded] = useState(null);

    const faqArray = [
        {
            id:1,
            title:'O que é o Drago Prime?',
            description:'O Drago Prime é um programa de assinatura exclusivo que oferece diversos benefícios para nossos clientes, incluindo frete grátis e rápido, descontos exclusivos, acesso antecipado a promoções e muito mais.'
        },
        {
            id:2,
            title:'Como posso me tornar um assinante do Drago Prime?',
            description:'Para se tornar um assinante do Drago Prime, basta clicar no botão "Assine Já" em nossa página principal, preencher suas informações de pagamento e concluir a assinatura. Você começará a aproveitar os benefícios imediatamente.'
        },
        {
            id:3,
            title:'Quais são os benefícios do Drago Prime?',
            description:'Como assinante do Drago Prime, você terá acesso a frete grátis e rápido, descontos exclusivos em uma ampla gama de produtos, acesso antecipado a ofertas especiais, suporte técnico prioritário e muito mais.'
        },
        {
            id:4,
            title:'Posso cancelar minha assinatura do Drago Prime a qualquer momento?',
            description:'Sim, você pode cancelar sua assinatura do Drago Prime a qualquer momento. Basta acessar sua conta, ir até a seção de assinaturas e seguir as instruções para cancelar. Não haverá cobranças adicionais após o cancelamento.'
        },
        {
            id:5,
            title:'O Drago Prime é válido para todas as regiões do Brasil?',
            description:'Sim, o Drago Prime está disponível para todas as regiões do Brasil. No entanto, algumas áreas remotas podem ter prazos de entrega diferentes devido a restrições logísticas.'
        },
        {
            id:6,
            title:'Como posso entrar em contato com o suporte do Drago Prime?',
            description:'Para entrar em contato com o suporte do Drago Prime, você pode enviar um email para suporte@dragotech.com ou ligar para nosso número de atendimento ao cliente disponível em nosso site. Estamos aqui para ajudar com qualquer dúvida ou problema que você possa ter.'
        },
    ];

    const toggleExpand = (id:number | null | any) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <>
            <div className="bg-black text-white">
                <div className="px-4 lg:px-28 py-8">
                    <Link href="/" className="cursor-pointer flex items-center gap-4 mb-12">
                        <h1 className="text-xl lg:text-2xl font-bold"><span className="text-red-600">Drago</span> Tech</h1>
                        <Image src={logo} width={40} height={40} alt="logo do drago tech" />
                    </Link>
                    <div className="grid m-auto gap-7 lg:gap-0 grid-cols-1 lg:grid-cols-2">
                        <div className="flex justify-center items-center flex-col gap-6">
                            <h2 className="text-xl lg:text-4xl font-bold">Seja um Drago <span className="text-red-600">Prime</span></h2>
                            <p>Assine o nosso plano de assinatura e tenha descontos imperdiveis!</p>
                            <h6 className="text-2xl">Não Perca Tempo. Assine Já!</h6>
                            <h6 className="text-3xl font-bold">R$:19,90</h6>
                            <button className="font-bold w-28 lg:max-w-72 p-4 rounded-md bg-red-500 text-white transition-all duration-500 hover:bg-red-700">Assine Já</button>
                        </div>
                        <Image className="object-contain w-full h-full" src={primeImg} width={600} height={600} alt="imagem do prime" />
                    </div>
                    <div className="py-8 flex gap-5 lg:gap-0 justify-between items-center flex-wrap">
                        <div className="m-auto w-32 h-32 flex justify-center items-center flex-col gap-4 p-4 border border-gray-400 rounded-md transition-all duration-500 hover:bg-red-700 hover:border-none">
                            <FaRocket className="text-2xl" />
                            <h6 className="text-sm text-center">Frete gratis <br /> e rapido</h6>
                        </div>
                        <div className="m-auto w-32 h-32 flex justify-center items-center flex-col gap-4 p-4 border border-gray-400 rounded-md transition-all duration-500 hover:bg-red-700 hover:border-none">
                            <FaPercent className="text-2xl" />
                            <h6 className="text-sm text-center">Ofertas e Promoções</h6>
                        </div>
                        <div className="m-auto w-32 h-32 flex justify-center items-center flex-col gap-4 p-4 border border-gray-400 rounded-md transition-all duration-500 hover:bg-red-700 hover:border-none">
                            <FaTicketAlt className="text-2xl" />
                            <h6 className="text-sm text-center">Descontos Exclusivos</h6>
                        </div>
                        <div className="m-auto w-32 h-32 flex justify-center items-center flex-col gap-4 p-4 border border-gray-400 rounded-md transition-all duration-500 hover:bg-red-700 hover:border-none">
                            <FaServicestack className="text-2xl" />
                            <h6 className="text-sm text-center">Serviços Adicionais</h6>
                        </div>
                        <div className="m-auto w-32 h-32 flex justify-center items-center flex-col gap-4 p-4 border border-gray-400 rounded-md transition-all duration-500 hover:bg-red-700 hover:border-none">
                            <FaSuitcase className="text-2xl" />
                            <h6 className="text-sm text-center">Conteúdo Digital</h6>
                        </div>
                    </div>

                    <div className="py-12">
                        <h2 className="text-center font-bold text-2xl">Perguntas e Respostas <br /> Sobre o Drago Prime</h2>
                        {faqArray.map(faq => (
                            <div key={faq.id} className="flex flex-col gap-5 justify-center items-center mt-12">
                                <div className="bg-[#1d1d1d] rounded-md p-4 max-w-[450px] flex flex-col w-full">
                                    <div className="flex justify-between cursor-pointer">
                                        <h6 className="font-bold">{faq.title}</h6>
                                        <FaPlus onClick={() => toggleExpand(faq.id)} className={`flex-shrink-0 transition-all duration-500 ${expanded === faq.id ? 'rotate-45' : ''}`} />
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-500 ${expanded === faq.id ? 'max-h-[500px]' : 'max-h-0'}`}>
                                        <p className="mt-2">{faq.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 border-t border-red-200">
                    <p className="text-center py-6">© 2024, Desenvolvido por <Link className="text-gray-700 transition-all duration-500 hover:text-red-600" target="_blank" href="https://mystdev.com.br/">Myst1 Dev</Link></p>
                </div>
            </div>
        </>
    )
}