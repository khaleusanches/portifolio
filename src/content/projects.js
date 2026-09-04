import RyccoDespachadorCover from "../../public/RyccoDespachador.webp"
import RyccoManagerCover from "../../public/RyccoManager.webp"
import OlimpicLinkCover from "../../public/Olimpiclink.webp"
import LaunaCover from "../../public/launa.webp"
import SystemERPCover from "../../public/ERPSystem.webp"
import AHMCover from "../../public/AHM.webp"

import OlimpicLinkOne from "../../public/OlimpiclinkOne.webp"
import OlimpicLinkTwo from "../../public/OlimpiclinkTwo.webp"
import OlimpicLinkThree from "../../public/OlimpiclinkThree.webp"
import OlimpicLinkFour from "../../public/OlimpiclinkFour.webp"

import LaunaDashboard from "../../public/LaunaDashboard.webp"
import LaunaOne from "../../public/LaunaOne.webp"
import LaunaTwo from "../../public/LaunaTwo.webp"

import SystemERPOne from "../../public/SystemERPOne.webp"
import SystemERPTwo from "../../public/SystemERPTwo.webp"

import RyccoMapa from "../../public/RyccoDespachadorMapa.webp"
import RyccoEmergencias from "../../public/RyccoDespachadorEmergencias.webp"
import RyccoCercas from "../../public/RyccoDespachadorCercas.webp"
import RyccoPatrulha from "../../public/RyccoDespachadorPatrulha.webp"
import RyccoOrdemServico from "../../public/RyccoDespachadorOrdemServico.webp"
import RyccoCameras from "../../public/RyccoDespachadorCameras.webp"

import ManagerVisaoGeral from "../../public/RyccoManagerVisaoGeral.webp"
import ManagerEmpresas from "../../public/RyccoManagerEmpresas.webp"
import ManagerGrupos from "../../public/RyccoManagerGrupos.webp"
import ManagerEquipamentos from "../../public/RyccoManagerEquipamentos.webp"
import ManagerCadastro from "../../public/RyccoManagerCadastro.webp"
import ManagerLicencas from "../../public/RyccoManagerLicencas.webp"
import ManagerAssistente from "../../public/RyccoManagerAssistente.webp"

import AHMOne from "../../public/ahmum.webp"
import AHMTwo from "../../public/ahmdois.webp"
import AHMThree from "../../public/ahmtres.webp"

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
 * cover       imagem do card, com dimensões explícitas: a vitrine fica acima da
 *             dobra, então a caixa precisa estar reservada antes de a imagem chegar
 * description texto longo da página de detalhe
 * screenshots telas com legenda obrigatória e dimensões explícitas, para que
 *             a caixa da imagem seja reservada antes de a imagem chegar
 */
export const projects = {
    RyccoDespachador: {
        slug: "RyccoDespachador",
        pitch: "Console de despacho com voz PTT, GPS e vídeo ao vivo",
        headline: "RyccoDespachador — Central de Operação para Comunicação e Monitoramento de Frotas",
        stack: ["React", "Tailwind", "C#", "WebRTC", "Leaflet"],
        marks: ["#TempoReal", "#Geolocalização", "#MissãoCrítica", "#Escalável"],
        evidence: ["website", "automacao"],
        liveDemo: null,
        cover: RyccoDespachadorCover,
        coverWidth: 810,
        coverHeight: 821,
        description: "Console desenvolvido para a **Rycco Telecom**, central de operação usada pelo despachador para comandar equipes em campo: fala por voz com os grupos, acompanha onde cada rádio está no mapa, recebe emergências e consulta tudo o que aconteceu. Roda no navegador, sem instalação, e conversa com rádios POC — celulares e aparelhos com o aplicativo da operadora — pela internet móvel ou Wi-Fi.\n\n**Voz em Tempo Real:** Comunicação PTT com grupos inteiros e chamada privada rádio a rádio, com sinalização e identificação de usuários em servidor próprio construído em **C#** sobre **WebRTC** e **WebSockets**.\n\n**Monitoramento por GPS:** Posição das equipes em tempo real e histórico de trajeto sobre mapa **Leaflet**, com painel de quem está online e offline.\n\n**Emergências:** Recebimento de SOS acionado pelo botão de pânico do rádio e alertas das câmeras veiculares — fadiga do motorista, uso de celular e risco de colisão — empilhados sobre qualquer tela do console.\n\n**Automação Operacional:** Cercas eletrônicas que registram entradas e saídas sozinhas, patrulhas com pontos e horários conferidos automaticamente, e ordens de serviço com checklist que exige foto e vídeo de comprovação da equipe em campo.\n\n**Vídeo e Câmeras:** Abertura da câmera de um rádio ou de câmera veicular ao vivo, com grade de várias câmeras simultâneas.\n\n**Controle de Acesso:** Três níveis de licença combinados com permissões por operador, definindo o que cada despachador enxerga.\n\n**Tecnologia Utilizada:** Frontend em **React** e **Tailwind**; backend, APIs, WebSockets e servidor de sinalização em **C#**.",
        screenshots: [
            { image: RyccoMapa, width: 1600, height: 950, caption: "Tela principal: grupos e rádios à esquerda, posição das viaturas em tempo real no mapa" },
            { image: RyccoEmergencias, width: 1600, height: 950, caption: "Emergências: SOS e alertas de câmera veicular empilhados sobre qualquer tela" },
            { image: RyccoCercas, width: 1600, height: 950, caption: "Cercas eletrônicas: áreas desenhadas no mapa registram entradas e saídas" },
            { image: RyccoPatrulha, width: 1600, height: 950, caption: "Patrulha: rotas, pontos no mapa e horários da ronda do dia" },
            { image: RyccoOrdemServico, width: 1600, height: 783, caption: "Ordens de serviço: checklist com campos de texto, número e escolha, com foto e vídeo obrigatórios" },
            { image: RyccoCameras, width: 1600, height: 950, caption: "Histórico das câmeras veiculares: fadiga do motorista, uso de celular e colisão iminente" }
        ]
    },

    RyccoManager: {
        slug: "RyccoManager",
        pitch: "Painel de gestão de licenças, empresas e rádios",
        headline: "RyccoManager — Painel Administrativo da Plataforma de Rádios POC",
        stack: ["React", "Tailwind", "C#", "LLM próprio"],
        marks: ["#PainelAdministrativo", "#GestãoDeLicenças", "#MultiEmpresa", "#Escalável"],
        evidence: ["website", "automacao"],
        liveDemo: null,
        cover: RyccoManagerCover,
        coverWidth: 810,
        coverHeight: 821,
        description: "Painel administrativo desenvolvido para a **Rycco Telecom**, onde se administra tudo o que faz os rádios POC funcionarem: quais empresas são clientes, quantas licenças cada distribuidor possui, que aparelhos estão cadastrados, em que grupos de conversa eles entram e até quando a licença de cada um vale. Roda no navegador, em produção, no endereço manager.ryccotelecom.com.\n\n**Hierarquia Multiempresa:** Estrutura em camadas — distribuidor, empresa cliente, grupo e rádio — em que cada nível enxerga apenas o que lhe pertence, permitindo que uma mesma instalação atenda vários distribuidores sem que um veja os dados do outro.\n\n**Gestão de Licenças:** Controle de licenças por versão e validade, com aviso de vencimento que leva direto aos rádios afetados, além de renovação e troca de licença em lote.\n\n**Cadastro em Escala:** Cadastro de aparelhos por IMEI com empresa, tipo de conta, licença e grupos definidos de uma vez, e ativação do rádio em campo pela leitura de um **QR Code**.\n\n**Controle do que o Despachador Vê:** É aqui que se define quais funcionalidades a licença de cada rádio libera no console de operação — mapa, vídeo, patrulha, cercas, mensagens e ordens de serviço.\n\n**Assistente com LLM Próprio:** Assistente virtual embutido no painel, atendido por um modelo de linguagem treinado sob medida e hospedado no servidor da empresa, que tira dúvidas sobre o sistema e automatiza parte das tarefas administrativas.\n\n**Tecnologia Utilizada:** Frontend em **React** e **Tailwind**; backend e integração com o assistente em **C#**.",
        screenshots: [
            { image: ManagerVisaoGeral, width: 1362, height: 854, caption: "Visão geral: indicadores do ecossistema e licenças disponíveis por versão e validade" },
            { image: ManagerEmpresas, width: 1362, height: 854, caption: "Empresas: cadastro dos clientes finais, com agente responsável e rádios online" },
            { image: ManagerGrupos, width: 1362, height: 854, caption: "Grupos: canais de conversa, com gestão de membros separada da edição do grupo" },
            { image: ManagerEquipamentos, width: 1362, height: 854, caption: "Equipamentos: filtros, seleção múltipla e ações em lote sobre os rádios" },
            { image: ManagerCadastro, width: 1362, height: 854, caption: "Cadastro de rádios: empresa, tipo de conta, licença e grupos definidos antes da lista de aparelhos" },
            { image: ManagerLicencas, width: 1362, height: 854, caption: "Funcionalidades por licença: em cinza, o que a licença do rádio não libera no despachador" },
            { image: ManagerAssistente, width: 1362, height: 852, caption: "Assistente Rycco: assistente virtual embutido, atendido por um LLM próprio no servidor da empresa" }
        ]
    },

    OlimpicLink: {
        slug: "OlimpicLink",
        pitch: "Rede Social para esportistas da região de Diadema",
        headline: "OlimpicLink — Plataforma Social Moderna para o Ecossistema Esportivo",
        stack: ["Kotlin", "Java", "Python", "SQL Server"],
        marks: ["#ArquiteturaModerna", "#Mobile", "#AltaPerformance", "#Escalável"],
        evidence: ["mobile"],
        liveDemo: null,
        cover: OlimpicLinkCover,
        coverWidth: 810,
        coverHeight: 821,
        description: "O OlimpicLink é uma plataforma social desenvolvida com foco em performance, escalabilidade e experiência do usuário, projetada para conectar pessoas apaixonadas por esportes em um ambiente totalmente interativo e moderno.\n\nA aplicação foi construída utilizando uma arquitetura moderna baseada em API REST, garantindo uma comunicação eficiente entre frontend e backend, além de permitir fácil expansão e integração com novos serviços.\n\nNo desenvolvimento mobile, foi utilizada Kotlin, proporcionando alta performance e uma experiência fluida e responsiva. No backend, a aplicação foi estruturada com Java e Python, garantindo segurança, organização e alta capacidade de processamento. O banco de dados SQL Server foi utilizado para gerenciar grandes volumes de dados com consistência e confiabilidade.\n\nEntre as principais funcionalidades estão autenticação segura de usuários, feed dinâmico de conteúdo, criação e gerenciamento de eventos, comunidades e publicações, além de um sistema completo de interações sociais.\n\nO projeto foi pensado para suportar crescimento, com uma base sólida e preparada para escalar conforme a demanda, sendo ideal para soluções que exigem alto nível de engajamento, performance e confiabilidade.\n\nO OlimpicLink demonstra na prática a aplicação de boas práticas de desenvolvimento, arquitetura bem definida e foco total na experiência do usuário — características essenciais para sistemas modernos e competitivos.",
        screenshots: [
            { image: OlimpicLinkTwo, width: 1536, height: 1024, caption: "Tela de comunidade" },
            { image: OlimpicLinkThree, width: 1536, height: 1024, caption: "Tela inicial e tela com todas as comunidades" },
            { image: OlimpicLinkFour, width: 1536, height: 1024, caption: "Tela de perfil da comunidade | Tela de eventos da comunidade" },
            { image: OlimpicLinkOne, width: 1536, height: 1024, caption: "Tela de perfil do usuário" }
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
        coverWidth: 810,
        coverHeight: 821,
        description: "Sistema completo para gestão de uma loja de tintas, integrando processos essenciais como estoque, vendas e financeiro em uma única plataforma.\n\n**Automação e Processamento:** Integração com **Python** para execução de rotinas automatizadas e processamento inteligente de dados.\n\n**Arquitetura Moderna:** Estruturação do sistema com uma arquitetura escalável e organizada, garantindo fácil manutenção, expansão futura e alto desempenho.\n\n**Backend Development:** Implementação da aplicação utilizando **C#**, assegurando robustez, segurança e eficiência no processamento de dados.\n\n**Database Management:** Modelagem e gerenciamento de dados com **SQL Server**, garantindo consistência, confiabilidade e performance em operações complexas.\n\n**Gestão e Controle:** Desenvolvimento de funcionalidades como controle de estoque em tempo real, gestão de vendas, acompanhamento financeiro e geração de relatórios estratégicos.\n\n**Escalabilidade e Performance:** Projeto desenvolvido com foco em crescimento, preparado para suportar aumento de demanda e evolução do negócio.",
        screenshots: [
            { image: LaunaDashboard, width: 1536, height: 1024, caption: "Dashboard financeiro" },
            { image: LaunaOne, width: 1536, height: 1024, caption: "Tela de pedidos feitos a fornecedores" },
            { image: LaunaTwo, width: 1536, height: 1024, caption: "Tela de gerenciamento de funcionários" }
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
        coverWidth: 810,
        coverHeight: 821,
        description: "Sistema ERP web capaz de centralizar e controlar todas as áreas da empresa em uma única plataforma, proporcionando mais organização, produtividade e visão estratégica do negócio.\n\n**Controle Total do Negócio:** Gerenciamento integrado de financeiro, funcionários, estoque, vendas, compras, fornecedores, produtos e processos de fabricação, eliminando retrabalho e reduzindo erros operacionais.\n\n**Dashboards Inteligentes:** Criação de painéis visuais com dados em tempo real, facilitando a análise de resultados e auxiliando na tomada de decisões rápidas e estratégicas.\n\n**Integração de Processos:** Todos os setores conectados em um único sistema, permitindo um fluxo de informações contínuo e eficiente entre as áreas da empresa.\n\n**Escalabilidade e Crescimento:** Sistema desenvolvido para acompanhar a evolução do negócio, suportando aumento de demanda e novas funcionalidades conforme necessário.\n\n**Arquitetura Moderna:** Estrutura robusta e organizada, garantindo estabilidade, segurança e alta performance mesmo com grande volume de dados.\n\n**Tecnologia Utilizada:** Aplicação web desenvolvida com **React** no frontend e **Python** e **Java** no backend, garantindo uma experiência moderna, rápida e confiável.",
        screenshots: [
            { image: SystemERPOne, width: 1536, height: 1024, caption: "Tela de dashboards" },
            { image: SystemERPTwo, width: 1536, height: 1024, caption: "Tela de compras de produtos" }
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
        coverWidth: 810,
        coverHeight: 821,
        description: "Desenvolvimento de uma landing page institucional moderna para a empresa AHM, com foco em apresentação profissional, fortalecimento da marca e geração de leads.\n\n**Design Estratégico:** Interface planejada para transmitir credibilidade e profissionalismo, utilizando um layout limpo, responsivo e alinhado à identidade visual da empresa.\n\n**Alta Conversão:** Estrutura otimizada com foco em conversão, incluindo chamadas para ação (CTAs) bem posicionadas, navegação intuitiva e seções organizadas para guiar o usuário até o contato.\n\n**Performance e Responsividade:** Página leve e altamente otimizada, garantindo carregamento rápido e excelente experiência em dispositivos móveis, tablets e desktops.\n\n**Experiência do Usuário (UX):** Desenvolvimento centrado no usuário, proporcionando navegação fluida, leitura agradável e fácil acesso às principais informações.\n\n**Tecnologia Utilizada:** Implementação utilizando React, garantindo flexibilidade, componentização e facilidade de manutenção futura.\n\n**Objetivo do Projeto:** Criar uma presença digital sólida para a AHM, destacando seus serviços e facilitando o contato com potenciais clientes de forma eficiente e estratégica.",
        screenshots: [
            { image: AHMOne, width: 1536, height: 1024, caption: "Home do site" },
            { image: AHMTwo, width: 1536, height: 1024, caption: "Serviços oferecidos" },
            { image: AHMThree, width: 1536, height: 1024, caption: "Tela de contato" }
        ]
    }
}

/** Featured: a lista ordenada de Projects da vitrine da home. */
export const featured = ["RyccoDespachador", "OlimpicLink", "Launa", "RyccoManager", "SystemERP", "AHM"]

export const getProject = (slug) => projects[slug] ?? null

export const featuredProjects = () => featured.map((slug) => projects[slug])

/** Os Projects que comprovam um Service. Derivado de Evidence, nunca declarado. */
export const projectsEvidencing = (serviceSlug) =>
    Object.values(projects).filter((project) => project.evidence.includes(serviceSlug))
