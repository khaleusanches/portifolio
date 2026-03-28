import ServicesCard from "./ServicesCard"

function ServicesComponent(){
    return(
        <div className="w-screen h-[100vh] mt-8 p-8 bg-gray-100">
            <h3 className="text-black text-3xl ml-[5vw] font-['Libre_Baskerville'] ">Serviços</h3>
            <div className="flex justify-around mt-8">
                <ServicesCard title="Desenvolvimento de ERP Personalizado" info="Soluções completas para gerenciar estoque, vendas, compras, financeiro e funcionários em uma única plataforma, aumentando produtividade e controle do seu negócio." button="Solicite Orçamento"/>
                <ServicesCard title="Automação de Processos" info="Reduza tarefas manuais e otimize sua rotina com sistemas inteligentes que automatizam processos e reduzem erros operacionais." button="Descubra Soluções"/>
                <ServicesCard title="Aplicativos Mobile" info="Criação de apps intuitivos para Android e iOS, conectando clientes e colaboradores de forma prática e moderna." button="Conheça nossos apps"/>
                <ServicesCard title="Consultoria e Planejamento de Sistemas" info="Analisamos seu negócio e sugerimos soluções digitais sob medida para transformar gestão, vendas e operação em alta performance." button="Agende uma reunião"/>
            </div>
        </div>
    )
}

export default ServicesComponent