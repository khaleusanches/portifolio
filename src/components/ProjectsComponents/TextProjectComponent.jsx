import { useEffect, useState } from "react"

function TextProjectComponent({nameProject}){
    const [project, setProject] = useState({
        "title" : "",
        "marks" : [],
        "text" : ""
    })
    const [projects] = useState({
       "Launa" : {
            "title" : "Launa ERP — Sistema de Gestão Empresarial Inteligente",
            "marks" : ["#ERP", "#ArquiteturaModerna", "#AltaPerformance"],
            "text" : "Sistema completo para gestão de uma loja de tintas, integrando processos essenciais como estoque, vendas e financeiro em uma única plataforma.\n\n**Automação e Processamento:** Integração com **Python** para execução de rotinas automatizadas e processamento inteligente de dados.\n\n**Arquitetura Moderna:** Estruturação do sistema com uma arquitetura escalável e organizada, garantindo fácil manutenção, expansão futura e alto desempenho.\n\n**Backend Development:** Implementação da aplicação utilizando **C#**, assegurando robustez, segurança e eficiência no processamento de dados.\n\n**Database Management:** Modelagem e gerenciamento de dados com **SQL Server**, garantindo consistência, confiabilidade e performance em operações complexas.\n\n**Gestão e Controle:** Desenvolvimento de funcionalidades como controle de estoque em tempo real, gestão de vendas, acompanhamento financeiro e geração de relatórios estratégicos.\n\n**Escalabilidade e Performance:** Projeto desenvolvido com foco em crescimento, preparado para suportar aumento de demanda e evolução do negócio."
        },
        "OlimpicLink" : {
            "title" : "OlimpicLink — Plataforma Social Moderna para o Ecossistema Esportivo",
            "marks" : ["#ArquiteturaModerna", "#Mobile", "#AltaPerformance", "#Escalável"],
            "text" : "O OlimpicLink é uma plataforma social desenvolvida com foco em performance, escalabilidade e experiência do usuário, projetada para conectar pessoas apaixonadas por esportes em um ambiente totalmente interativo e moderno.\n\nA aplicação foi construída utilizando uma arquitetura moderna baseada em API REST, garantindo uma comunicação eficiente entre frontend e backend, além de permitir fácil expansão e integração com novos serviços.\n\nNo desenvolvimento mobile, foi utilizada Kotlin, proporcionando alta performance e uma experiência fluida e responsiva. No backend, a aplicação foi estruturada com C# e ASP.NET, garantindo segurança, organização e alta capacidade de processamento. O banco de dados MySQL foi utilizado para gerenciar grandes volumes de dados com consistência e confiabilidade.\n\nEntre as principais funcionalidades estão autenticação segura de usuários, feed dinâmico de conteúdo, criação e gerenciamento de eventos, comunidades e publicações, além de um sistema completo de interações sociais.\n\nO projeto foi pensado para suportar crescimento, com uma base sólida e preparada para escalar conforme a demanda, sendo ideal para soluções que exigem alto nível de engajamento, performance e confiabilidade.\n\nO OlimpicLink demonstra na prática a aplicação de boas práticas de desenvolvimento, arquitetura bem definida e foco total na experiência do usuário — características essenciais para sistemas modernos e competitivos."
        },
        "SystemERP" : {
            "title" : "SystemERP — Plataforma Web Completa de Gestão Empresarial",
            "marks" : ["#ERP", "#GestãoCompleta", "#Escalável", "#AltaPerformance"],
            "text" : "Sistema ERP web capaz de centralizar e controlar todas as áreas da empresa em uma única plataforma, proporcionando mais organização, produtividade e visão estratégica do negócio.\n\n**Controle Total do Negócio:** Gerenciamento integrado de financeiro, funcionários, estoque, vendas, compras, fornecedores, produtos e processos de fabricação, eliminando retrabalho e reduzindo erros operacionais.\n\n**Dashboards Inteligentes:** Criação de painéis visuais com dados em tempo real, facilitando a análise de resultados e auxiliando na tomada de decisões rápidas e estratégicas.\n\n**Integração de Processos:** Todos os setores conectados em um único sistema, permitindo um fluxo de informações contínuo e eficiente entre as áreas da empresa.\n\n**Escalabilidade e Crescimento:** Sistema desenvolvido para acompanhar a evolução do negócio, suportando aumento de demanda e novas funcionalidades conforme necessário.\n\n**Arquitetura Moderna:** Estrutura robusta e organizada, garantindo estabilidade, segurança e alta performance mesmo com grande volume de dados.\n\n**Tecnologia Utilizada:** Aplicação web desenvolvida com **React** no frontend e **Python** e **Java** no backend, garantindo uma experiência moderna, rápida e confiável."
        }
    })
    
    useEffect(() => (
        Object.entries(projects).forEach(([key, value]) => {
            if(key == nameProject){
                setProject(value)
            }
        })
    ), [])
    function formatText(text) {
    return text.split("**").map((part, index) => 
        index % 2 === 1 
            ? <strong key={index}>{part}</strong> 
            : part
    )
}
    return(
        <div className="w-[35vw] flex flex-col justify-between overflow-auto h-full bg-gradient-to-b from-black to-gray-800 text-white">
            <div>
                <h2 className="text-4xl font-bold tracking-tight text-heading md:text-3xl p-8 pb-4 font-['Libre_Baskerville']">{project.title}</h2>
                <hr className="border-gray-400 mx-4"/>
                <p className="p-8 text-md text-justify  whitespace-pre-line">{formatText(project.text)}</p>
            </div>
            <a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-center hover:bg-green-600 w-[20vw] py-3 m-auto mb-4 rounded-full font-bold">
                Solicitar orçamento
            </a>
        </div>
    )
}

export default TextProjectComponent