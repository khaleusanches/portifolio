import { useEffect, useState } from "react"

function ServicesInfosComponent({button, type}){
    const types = {
        "website" : {
            "title" : "Websites Personalizados",
            "description" : "Utilizando das tecnologias mais modernas no mercado como: **Wordpress, React e Tailwind**. Podemos construir o site da maneira que você imaginar, seja desde um site simples apresentando sua empresa e sua ideia, até um complexo site de e-commerce como o **Mercado Livre** ou um **Site de gerenciamento da sua empresa** como a **OMIE**, **PROTHEUS**, por um **preço muito mais acessível**.",
            "price" : [
                {
                    name: "Pequeno Porte",
                    price: "R$400 – R$800",
                    hours: "10h – 20h"
                },
                {
                    name: "Médio Porte",
                    price: "R$1.200 – R$2.400",
                    hours: "30h – 60h"
                },
                {
                    name: "Grande Porte",
                    price: "R$3.200 – R$8.000+",
                    hours: "80h – 200h+"
                }
            ]
        },
        "automacao" : {
            "title" : "Automação de Processos",
            "description": "Automatize tarefas repetitivas e aumente a eficiência do seu negócio com soluções inteligentes. Utilizando tecnologias modernas como **N8N**, **APIs**, **Integrações com sistemas existentes**, **Bots** e **Processos automatizados**, desenvolvemos sistemas capazes de eliminar trabalhos manuais, reduzir erros operacionais e melhorar a produtividade da sua equipe. Desde automações simples como envio automático de mensagens e organização de dados, até sistemas complexos de integração entre plataformas, como **ERPs, CRMs e sistemas internos personalizados**.",
            "price" : [
                {
                    name: "Automação Simp.",
                    price: "R$300 – R$1.200",
                    hours: "15h – 30h",
                    description: "Automação de tarefas básicas como envio de mensagens, organização de planilhas e integrações simples"
                },
                {
                    name: "Automação Média",
                    price: "R$1.500 – R$3.500",
                    hours: "40h – 80h",
                    description: "Integração entre sistemas, APIs, automação de fluxos de trabalho e redução de processos manuais"
                },
                {
                    name: "Automação Avan.",
                    price: "R$4.000 – R$10.000+",
                    hours: "100h – 250h+",
                    description: "Sistemas completos com múltiplas integrações, dashboards, regras de negócio e alta escalabilidade"
                }
            ]
        },
        "mobile" : {
            "title" : "Aplicativos Mobile Personalizados",
            "description": "Desenvolvemos aplicativos utilizando as mesmas tecnologias das grandes empresas como **Google, Microsoft e Android**, garantindo alta performance, segurança e uma experiência fluida para o usuário. Criamos desde aplicativos simples até soluções completas com **integração com APIs, autenticação, notificações push e banco de dados local/remoto**. Ideal para empresas que desejam digitalizar processos, melhorar o relacionamento com clientes ou criar novos produtos digitais escaláveis.",
            "price" : [
                {
                    name: "Aplicativo Base",
                    price: "R$600 – R$2.000",
                    hours: "20h – 30h",
                    description: "Automação de tarefas básicas como envio de mensagens, organização de planilhas e integrações simples"
                },
                {
                    name: "Aplicativo Médio",
                    price: "R$2.000 – R$5.500",
                    hours: "40h – 80h",
                    description: "Integração entre sistemas, APIs, automação de fluxos de trabalho e redução de processos manuais"
                },
                {
                    name: "Aplicativo Avan.",
                    price: "R$5.500 – R$14.000+",
                    hours: "100h – 250h+",
                    description: "Sistemas completos com múltiplas integrações, dashboards, regras de negócio e alta escalabilidade"
                }
            ]
        },
        "consul" : {
            "title" : "Consultoria e Planejamento de Sistemas",
            "description": "Oferecemos consultoria especializada em tecnologia para analisar seu negócio e identificar oportunidades de melhoria através de soluções digitais. Avaliamos sua arquitetura atual, processos internos e fluxos de trabalho, propondo estratégias utilizando **boas práticas como Clean Architecture, escalabilidade, integrações via APIs e automação de processos**. Ideal para empresas que desejam reduzir custos, aumentar produtividade e estruturar sistemas preparados para crescimento.",
            "price": [
                {
                    name: "Consulta Pontual",
                    price: "R$120 – R$200/h",
                    hours: "sob demanda",
                    description: "Análise rápida para resolução de problemas específicos, dúvidas técnicas ou direcionamento estratégico"
                },
                {
                    name: "Pacote Essencial",
                    price: "R$1.000 – R$2.500",
                    hours: "10h – 20h",
                    description: "Análise completa do sistema/negócio com recomendações práticas de melhoria e otimização"
                },
                {
                    name: "Planejamento Completo",
                    price: "R$3.000 – R$8.000+",
                    hours: "30h – 80h+",
                    description: "Definição de arquitetura, tecnologias, fluxos de sistema e roadmap completo para desenvolvimento escalável"
                }
            ]
        }
    }
    
    const object = types[type] || types["website"]

    function formatText(text) {
        return text.split("**").map((part, index) => 
            index % 2 === 1 
                ? <strong className="text-[#fe5800]" key={index}>{part}</strong> 
                : part
        )
    }
    const id = `configuration-${type}`
     return(
        <div>
            <button command="show-modal" commandfor={id} className="button">{button}</button>
            <el-dialog>
                <dialog id={id} aria-labelledby="dialog-title" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                    <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

                    <div tabindex="0" className="flex min-h-full items-center justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                        <el-dialog-panel className="relative w-[90vw] md:w-[40vw] transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                            <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full]">
                                <div className="sm:flex sm:items-start w-full">
                                    <div className="mt-3 justify-between w-full text-center sm:mt-0 sm:ml-0 sm:text-left">
                                        <div className="flex justify-between items-center">
                                            <h3 id="dialog-title" className="text-base font-semibold text-white">{object.title}</h3>
                                            <button type="button" command="close" commandfor={id} className="inline-flex w-[10vw] justify-center rounded-md bg-red-500/80 px-2 py-1 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 md:mt-0 sm:w-auto">X</button>
                                        </div>
                                        <hr className="mt-2 mb-4 border-white" />
                                        <div className="w-full flex h-[40vh] md:h-[60vh]">
                                            <div className="ml-[1vw] w-full">
                                                <label className="text-md text-white border-b-2 border-white/40 pb-1 cursor-pointer hover:text-white hover:border-white text-start">Informações Técnicas</label>
                                                <div className="flex items-center mt-[2vh] gap-x-[1vw] mb-[4vh]">
                                                    <label className="text-sm text-justify block text-gray-200">{formatText(object.description)}</label>
                                                </div>
                                                <div className="flex items-center mt-[2vh] gap-x-[1vw] mb-[4vh]">
                                                    <label className="text-sm text-justify flex flex-wrap md:flex-nowrap justify-stretch md:justify-between md:w-full text-gray-200">
                                                         {object.price.map((item, index) => (
                                                            <div key={index} className="mb-4 p-3 mr-8 md:mr-0 rounded bg-gray-700/40">
                                                            <p className="text-white font-bold">{item.name}</p>
                                                            <p className="text-gray-300 text-sm">{item.hours}</p>
                                                            <p className="text-green-400 font-semibold">{item.price}</p>
                                                            </div>
                                                        ))}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-700/25 px-4 py-3 flex justify-center sm:flex-row-reverse sm:px-6">
                                <a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg overflow-hidden bg-green-500 text-center hover:bg-green-600 w-[30vw] md:w-[12vw] pb-2 pt-2 px-4 m-auto mt-4 mb-4 rounded-full font-bold">
                                    Orçamento
                                </a>                            
                            </div>
                        </el-dialog-panel>
                    </div>
                </dialog>
            </el-dialog>
        </div>
    )
}

export default ServicesInfosComponent