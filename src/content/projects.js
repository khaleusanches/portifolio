import OlimpicLinkCover from "../../public/Olimpiclink.png"
import LaunaCover from "../../public/launa.png"
import SystemERPCover from "../../public/ERPSystem.png"
import AHMCover from "../../public/AHM.png"

import OlimpicLinkOne from "../../public/OlimpiclinkOne.png"
import OlimpicLinkTwo from "../../public/OlimpiclinkTwo.png"
import OlimpicLinkThree from "../../public/OlimpiclinkThree.png"
import OlimpicLinkFour from "../../public/OlimpiclinkFour.png"

import LaunaDashboard from "../../public/LaunaDashboard.png"
import LaunaOne from "../../public/LaunaOne.png"
import LaunaTwo from "../../public/LaunaTwo.png"

import SystemERPOne from "../../public/SystemERPOne.png"
import SystemERPTwo from "../../public/SystemERPTwo.png"

import AHMOne from "../../public/ahmum.jpg"
import AHMTwo from "../../public/ahmdois.jpg"
import AHMThree from "../../public/ahmtres.jpg"

/**
 * Fonte única de conteúdo dos Projects. Ver CONTEXT.md para o vocabulário
 * e docs/adr/0001 para por que isto não mora dentro dos componentes.
 *
 * slug        identidade do Project, usada na URL
 * pitch       frase de valor exibida no card
 * headline    título da página de detalhe
 * stack       tecnologias efetivamente usadas
 * marks       posicionamento editorial da Brand
 * evidence    slugs dos Services que este Project comprova
 * liveDemo    endereço público navegável, ou null quando não existe
 * cover       imagem do card
 * description texto longo da página de detalhe
 * screenshots telas com legenda obrigatória
 */
export const projects = {
    OlimpicLink: {
        slug: "OlimpicLink",
        pitch: "Rede Social para esportistas da região de Diadema",
        headline: "OlimpicLink — Plataforma Social Moderna para o Ecossistema Esportivo",
        stack: ["Kotlin", "Java", "Python", "SQL Server"],
        marks: ["#ArquiteturaModerna", "#Mobile", "#AltaPerformance", "#Escalável"],
        evidence: ["mobile"],
        liveDemo: null,
        cover: OlimpicLinkCover,
        description: "O OlimpicLink é uma plataforma social desenvolvida com foco em performance, escalabilidade e experiência do usuário, projetada para conectar pessoas apaixonadas por esportes em um ambiente totalmente interativo e moderno.\n\nA aplicação foi construída utilizando uma arquitetura moderna baseada em API REST, garantindo uma comunicação eficiente entre frontend e backend, além de permitir fácil expansão e integração com novos serviços.\n\nNo desenvolvimento mobile, foi utilizada Kotlin, proporcionando alta performance e uma experiência fluida e responsiva. No backend, a aplicação foi estruturada com Java e Python, garantindo segurança, organização e alta capacidade de processamento. O banco de dados SQL Server foi utilizado para gerenciar grandes volumes de dados com consistência e confiabilidade.\n\nEntre as principais funcionalidades estão autenticação segura de usuários, feed dinâmico de conteúdo, criação e gerenciamento de eventos, comunidades e publicações, além de um sistema completo de interações sociais.\n\nO projeto foi pensado para suportar crescimento, com uma base sólida e preparada para escalar conforme a demanda, sendo ideal para soluções que exigem alto nível de engajamento, performance e confiabilidade.\n\nO OlimpicLink demonstra na prática a aplicação de boas práticas de desenvolvimento, arquitetura bem definida e foco total na experiência do usuário — características essenciais para sistemas modernos e competitivos.",
        screenshots: [
            { image: OlimpicLinkTwo, caption: "Tela de comunidade" },
            { image: OlimpicLinkThree, caption: "Tela inicial e tela com todas as comunidades" },
            { image: OlimpicLinkFour, caption: "Tela de perfil da comunidade | Tela de eventos da comunidade" },
            { image: OlimpicLinkOne, caption: "Tela de perfil do usuário" }
        ]
    },

    Launa: {
        slug: "Launa",
        pitch: "Software de Gestão Empresarial Privada",
        headline: "Launa ERP — Sistema de Gestão Empresarial Inteligente",
        stack: ["C#", "Python", "SQL Server"],
        marks: ["#ERP", "#ArquiteturaModerna", "#AltaPerformance"],
        evidence: ["website"],
        liveDemo: null,
        cover: LaunaCover,
        description: "Sistema completo para gestão de uma loja de tintas, integrando processos essenciais como estoque, vendas e financeiro em uma única plataforma.\n\n**Automação e Processamento:** Integração com **Python** para execução de rotinas automatizadas e processamento inteligente de dados.\n\n**Arquitetura Moderna:** Estruturação do sistema com uma arquitetura escalável e organizada, garantindo fácil manutenção, expansão futura e alto desempenho.\n\n**Backend Development:** Implementação da aplicação utilizando **C#**, assegurando robustez, segurança e eficiência no processamento de dados.\n\n**Database Management:** Modelagem e gerenciamento de dados com **SQL Server**, garantindo consistência, confiabilidade e performance em operações complexas.\n\n**Gestão e Controle:** Desenvolvimento de funcionalidades como controle de estoque em tempo real, gestão de vendas, acompanhamento financeiro e geração de relatórios estratégicos.\n\n**Escalabilidade e Performance:** Projeto desenvolvido com foco em crescimento, preparado para suportar aumento de demanda e evolução do negócio.",
        screenshots: [
            { image: LaunaDashboard, caption: "Dashboard financeiro" },
            { image: LaunaOne, caption: "Tela de pedidos feitos a fornecedores" },
            { image: LaunaTwo, caption: "Tela de gerenciamento de funcionários" }
        ]
    },

    SystemERP: {
        slug: "SystemERP",
        pitch: "Website ERP - Para gerenciar tudo de uma empresa",
        headline: "SystemERP — Plataforma Web Completa de Gestão Empresarial",
        stack: ["React", "C#", "Python", "SQL Server"],
        marks: ["#ERP", "#GestãoCompleta", "#Escalável", "#AltaPerformance"],
        evidence: ["website"],
        liveDemo: null,
        cover: SystemERPCover,
        description: "Sistema ERP web capaz de centralizar e controlar todas as áreas da empresa em uma única plataforma, proporcionando mais organização, produtividade e visão estratégica do negócio.\n\n**Controle Total do Negócio:** Gerenciamento integrado de financeiro, funcionários, estoque, vendas, compras, fornecedores, produtos e processos de fabricação, eliminando retrabalho e reduzindo erros operacionais.\n\n**Dashboards Inteligentes:** Criação de painéis visuais com dados em tempo real, facilitando a análise de resultados e auxiliando na tomada de decisões rápidas e estratégicas.\n\n**Integração de Processos:** Todos os setores conectados em um único sistema, permitindo um fluxo de informações contínuo e eficiente entre as áreas da empresa.\n\n**Escalabilidade e Crescimento:** Sistema desenvolvido para acompanhar a evolução do negócio, suportando aumento de demanda e novas funcionalidades conforme necessário.\n\n**Arquitetura Moderna:** Estrutura robusta e organizada, garantindo estabilidade, segurança e alta performance mesmo com grande volume de dados.\n\n**Tecnologia Utilizada:** Aplicação web desenvolvida com **React** no frontend e **Python** e **Java** no backend, garantindo uma experiência moderna, rápida e confiável.",
        screenshots: [
            { image: SystemERPOne, caption: "Tela de dashboards" },
            { image: SystemERPTwo, caption: "Tela de compras de produtos" }
        ]
    },

    AHM: {
        slug: "AHM",
        pitch: "AHM - Site de Apresentação",
        headline: "AHM — Landing Page Institucional Moderna",
        stack: ["React", "Tailwind", "Javascript"],
        marks: ["#LandingPage", "#Institucional", "#AltaConversão", "#DesignModerno"],
        evidence: ["website"],
        liveDemo: null,
        cover: AHMCover,
        description: "Desenvolvimento de uma landing page institucional moderna para a empresa AHM, com foco em apresentação profissional, fortalecimento da marca e geração de leads.\n\n**Design Estratégico:** Interface planejada para transmitir credibilidade e profissionalismo, utilizando um layout limpo, responsivo e alinhado à identidade visual da empresa.\n\n**Alta Conversão:** Estrutura otimizada com foco em conversão, incluindo chamadas para ação (CTAs) bem posicionadas, navegação intuitiva e seções organizadas para guiar o usuário até o contato.\n\n**Performance e Responsividade:** Página leve e altamente otimizada, garantindo carregamento rápido e excelente experiência em dispositivos móveis, tablets e desktops.\n\n**Experiência do Usuário (UX):** Desenvolvimento centrado no usuário, proporcionando navegação fluida, leitura agradável e fácil acesso às principais informações.\n\n**Tecnologia Utilizada:** Implementação utilizando React, garantindo flexibilidade, componentização e facilidade de manutenção futura.\n\n**Objetivo do Projeto:** Criar uma presença digital sólida para a AHM, destacando seus serviços e facilitando o contato com potenciais clientes de forma eficiente e estratégica.",
        screenshots: [
            { image: AHMOne, caption: "Home do site" },
            { image: AHMTwo, caption: "Serviços oferecidos" },
            { image: AHMThree, caption: "Tela de contato" }
        ]
    }
}

/** Featured: a lista ordenada de Projects da vitrine da home. */
export const featured = ["OlimpicLink", "Launa", "SystemERP", "AHM"]

export const getProject = (slug) => projects[slug] ?? null

export const featuredProjects = () => featured.map((slug) => projects[slug])

/** Os Projects que comprovam um Service. Derivado de Evidence, nunca declarado. */
export const projectsEvidencing = (serviceSlug) =>
    Object.values(projects).filter((project) => project.evidence.includes(serviceSlug))
