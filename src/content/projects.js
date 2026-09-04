import RyccoDespachadorCover from "../../public/RyccoDespachador.webp"
import RyccoPTTCover from "../../public/RyccoPTT.webp"
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

import PTTPrincipal from "../../public/RyccoPTTPrincipal.webp"
import PTTMensagens from "../../public/RyccoPTTMensagens.webp"
import PTTPrivado from "../../public/RyccoPTTPrivado.webp"
import PTTMapa from "../../public/RyccoPTTMapa.webp"
import PTTOrdens from "../../public/RyccoPTTOrdens.webp"
import PTTBotoes from "../../public/RyccoPTTBotoes.webp"

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
 * capabilities capacidades que a Brand escolhe contar, cada uma com título, texto
 *             e, opcionalmente, o Slug da Screenshot que a demonstra (ver ADR 0002)
 * screenshots telas com Slug próprio, legenda obrigatória e dimensões explícitas,
 *             para que a caixa seja reservada antes de a imagem chegar
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
        description: "Console desenvolvido para a **Rycco Telecom**, central de operação usada pelo despachador para comandar equipes em campo: fala por voz com os grupos, acompanha onde cada rádio está no mapa, recebe emergências e consulta tudo o que aconteceu. Roda no navegador, sem instalação, e conversa com rádios POC — celulares e aparelhos com o aplicativo da operadora — pela internet móvel ou Wi-Fi.",
        capabilities: [
            {
                title: "Voz em Tempo Real",
                text: "Comunicação PTT com grupos inteiros e chamada privada rádio a rádio, com sinalização e identificação de usuários em servidor próprio construído em **C#** sobre **WebRTC** e **WebSockets**.",
                screenshot: null
            },
            {
                title: "Monitoramento por GPS",
                text: "Posição das equipes em tempo real e histórico de trajeto sobre mapa **Leaflet**, com painel de quem está online e offline.",
                screenshot: "mapa"
            },
            {
                title: "Emergências",
                text: "Recebimento de SOS acionado pelo botão de pânico do rádio e alertas das câmeras veiculares — fadiga do motorista, uso de celular e risco de colisão — empilhados sobre qualquer tela do console.",
                screenshot: "emergencias"
            },
            {
                title: "Automação Operacional",
                text: "Cercas eletrônicas que registram entradas e saídas sozinhas, patrulhas com pontos e horários conferidos automaticamente, e ordens de serviço com checklist que exige foto e vídeo de comprovação da equipe em campo.",
                screenshot: "cercas"
            },
            {
                title: "Vídeo e Câmeras",
                text: "Abertura da câmera de um rádio ou de câmera veicular ao vivo, com grade de várias câmeras simultâneas.",
                screenshot: "cameras"
            },
            {
                title: "Controle de Acesso",
                text: "Três níveis de licença combinados com permissões por operador, definindo o que cada despachador enxerga.",
                screenshot: null
            }
        ],
        screenshots: [
            { slug: "mapa", image: RyccoMapa, width: 1600, height: 950, caption: "Grupos e rádios à esquerda; viaturas posicionadas no mapa em tempo real" },
            { slug: "emergencias", image: RyccoEmergencias, width: 1600, height: 950, caption: "Um SOS e alertas de câmera veicular empilhados sobre a tela que estava aberta" },
            { slug: "cercas", image: RyccoCercas, width: 1600, height: 950, caption: "Áreas desenhadas sobre o mapa, com o registro de entradas e saídas ao lado" },
            { slug: "patrulha", image: RyccoPatrulha, width: 1600, height: 950, caption: "A ronda do dia: rota traçada, pontos de conferência no mapa e horários" },
            { slug: "ordem-servico", image: RyccoOrdemServico, width: 1600, height: 783, caption: "Checklist com campos de texto, número e escolha, e os anexos de foto e vídeo obrigatórios" },
            { slug: "cameras", image: RyccoCameras, width: 1600, height: 950, caption: "Histórico de alertas das câmeras: fadiga do motorista, uso de celular e colisão iminente" }
        ]
    },

    RyccoPTT: {
        slug: "RyccoPTT",
        pitch: "Aplicativo de rádio PTT para Android",
        headline: "Rycco PTT — Rádio Digital no Celular para Equipes em Campo",
        stack: ["Kotlin", "Android", "C#", "WebRTC"],
        marks: ["#Mobile", "#TempoReal", "#MissãoCrítica", "#Offline"],
        evidence: ["mobile"],
        liveDemo: null,
        cover: RyccoPTTCover,
        coverWidth: 810,
        coverHeight: 821,
        description: "Aplicativo desenvolvido para a **Rycco Telecom**, o lado do campo da plataforma de rádios POC: transforma um celular Android num rádio digital que fala por PTT com o grupo inteiro, recebe ordens da central, mostra a posição no mapa e aciona emergência. É a ponta que conversa com o **RyccoDespachador** — o que o despachador envia chega aqui, e o que a equipe registra volta para lá.",
        capabilities: [
            {
                title: "Falar Apertando um Botão",
                text: "Transmissão para o grupo inteiro segurando a barra na tela ou o botão físico do aparelho, com indicação de quem está falando e aviso quando o canal está ocupado.",
                screenshot: "principal"
            },
            {
                title: "Grupos e Canais",
                text: "Troca de canal a qualquer momento, com a lista de grupos disponíveis e quantos rádios estão online em cada um. É a mesma tela de abertura: o canal ativo fica sempre à vista.",
                screenshot: null
            },
            {
                title: "Texto sem Ocupar a Voz",
                text: "Mensagens com um colega ou com o grupo, com confirmação de entrega, para o que não precisa interromper o canal de voz.",
                screenshot: "mensagens"
            },
            {
                title: "Chamada Privada",
                text: "Conversa de voz direta entre dois rádios, fora do canal do grupo, para o que não é assunto de todos.",
                screenshot: "privado"
            },
            {
                title: "Posição no Mapa",
                text: "Localização do próprio rádio em tempo real, com a opção de acompanhar quem está transmitindo no momento.",
                screenshot: "mapa"
            },
            {
                title: "Ordens de Serviço no Campo",
                text: "As tarefas enviadas pela central chegam com prazo e checklist, e cada uma exige a comprovação que a central definiu — foto, vídeo ou assinatura — antes de poder ser concluída.",
                screenshot: "ordens"
            },
            {
                title: "Configuração do Rádio",
                text: "Os botões físicos do aparelho são mapeáveis: PTT, SOS, vídeo de emergência e troca de canal ganham tecla dedicada, para operar sem olhar a tela. Junto vêm perfil, histórico de áudio e diagnóstico de conexão e GPS.",
                screenshot: "botoes"
            }
        ],
        screenshots: [
            { slug: "principal", image: PTTPrincipal, width: 720, height: 1280, caption: "Tela principal: as abas fixas, a lista de grupos e a barra Segure para falar" },
            { slug: "mensagens", image: PTTMensagens, width: 720, height: 1280, caption: "Mensagens: texto com um colega ou com o grupo, sem ocupar o canal de voz" },
            { slug: "privado", image: PTTPrivado, width: 720, height: 1280, caption: "Chamada privada: conversa de voz direta com um colega, sem passar pelo canal" },
            { slug: "mapa", image: PTTMapa, width: 720, height: 1280, caption: "Mapa: a posição do rádio, com a opção de focar em quem está transmitindo" },
            { slug: "ordens", image: PTTOrdens, width: 720, height: 1280, caption: "Ordem de serviço no campo: tarefas com prazo, foto e vídeo de comprovação e assinatura" },
            { slug: "botoes", image: PTTBotoes, width: 720, height: 1280, caption: "Mapeamento de botões: PTT, SOS, vídeo de emergência e troca de canal em teclas físicas" }
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
        description: "Painel administrativo desenvolvido para a **Rycco Telecom**, onde se administra tudo o que faz os rádios POC funcionarem: quais empresas são clientes, quantas licenças cada distribuidor possui, que aparelhos estão cadastrados, em que grupos de conversa eles entram e até quando a licença de cada um vale. Roda no navegador, em produção, no endereço manager.ryccotelecom.com.",
        capabilities: [
            {
                title: "Hierarquia Multiempresa",
                text: "Estrutura em camadas — distribuidor, empresa cliente, grupo e rádio — em que cada nível enxerga apenas o que lhe pertence, permitindo que uma mesma instalação atenda vários distribuidores sem que um veja os dados do outro.",
                screenshot: "empresas"
            },
            {
                title: "Gestão de Licenças",
                text: "Controle de licenças por versão e validade, com aviso de vencimento que leva direto aos rádios afetados, além de renovação e troca de licença em lote.",
                screenshot: "visao-geral"
            },
            {
                title: "Cadastro em Escala",
                text: "Cadastro de aparelhos por IMEI com empresa, tipo de conta, licença e grupos definidos de uma vez, e ativação do rádio em campo pela leitura de um **QR Code**.",
                screenshot: "cadastro"
            },
            {
                title: "Controle do que o Despachador Vê",
                text: "É aqui que se define quais funcionalidades a licença de cada rádio libera no console de operação — mapa, vídeo, patrulha, cercas, mensagens e ordens de serviço.",
                screenshot: "licencas"
            },
            {
                title: "Assistente com LLM Próprio",
                text: "Assistente virtual embutido no painel, atendido por um modelo de linguagem treinado sob medida e hospedado no servidor da empresa, que tira dúvidas sobre o sistema e automatiza parte das tarefas administrativas.",
                screenshot: "assistente"
            }
        ],
        screenshots: [
            { slug: "visao-geral", image: ManagerVisaoGeral, width: 1362, height: 854, caption: "Indicadores do ecossistema e as licenças disponíveis por versão e validade" },
            { slug: "empresas", image: ManagerEmpresas, width: 1362, height: 854, caption: "Os clientes finais cadastrados, com agente responsável e contagem de rádios online" },
            { slug: "grupos", image: ManagerGrupos, width: 1362, height: 854, caption: "Canais de conversa, com a gestão de membros separada da edição do grupo" },
            { slug: "equipamentos", image: ManagerEquipamentos, width: 1362, height: 854, caption: "Filtros, seleção múltipla e as ações em lote sobre os rádios" },
            { slug: "cadastro", image: ManagerCadastro, width: 1362, height: 854, caption: "Empresa, tipo de conta, licença e grupos definidos antes da lista de aparelhos" },
            { slug: "licencas", image: ManagerLicencas, width: 1362, height: 854, caption: "Em cinza, o que a licença daquele rádio não libera no console do despachador" },
            { slug: "assistente", image: ManagerAssistente, width: 1362, height: 852, caption: "O assistente embutido no painel, atendido pelo modelo hospedado no servidor da empresa" }
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
        description: "Rede social mobile para o ecossistema esportivo da região de Diadema: cada modalidade e cada grupo tem a sua comunidade, com publicações, agenda de eventos e perfil dos participantes.",
        capabilities: [
            {
                title: "Comunidades por Modalidade",
                text: "Cada grupo tem comunidade própria, com capa, descrição, regras fixadas, participantes e seguidores — e a entrada pode depender de pedido para participar.",
                screenshot: "comunidade"
            },
            {
                title: "Criação e Descoberta",
                text: "Qualquer participante cria a sua comunidade, e encontra as existentes e outros esportistas pela busca.",
                screenshot: "inicio-e-comunidades"
            },
            {
                title: "Agenda de Eventos",
                text: "Cada comunidade tem calendário próprio, onde os eventos ficam marcados no dia com foto e descrição.",
                screenshot: "perfil-da-comunidade"
            },
            {
                title: "Perfil do Esportista",
                text: "Perfil com amigos e seguidores, as modalidades que a pessoa acompanha e as comunidades de que participa.",
                screenshot: "perfil-do-usuario"
            },
            {
                title: "Feed e Interações",
                text: "Publicações dentro da comunidade, com curtida, comentário e compartilhamento.",
                screenshot: null
            }
        ],
        screenshots: [
            { slug: "comunidade", image: OlimpicLinkTwo, width: 1536, height: 1024, caption: "Uma comunidade de torcida: capa, participantes e seguidores, regras fixadas e as publicações dos membros" },
            { slug: "inicio-e-comunidades", image: OlimpicLinkThree, width: 1536, height: 1024, caption: "Abertura do app à esquerda; à direita a lista de comunidades, com busca e o botão de criar" },
            { slug: "perfil-da-comunidade", image: OlimpicLinkFour, width: 1536, height: 1024, caption: "Perfil de uma comunidade à esquerda; à direita o calendário dela, com um evento marcado no dia 14" },
            { slug: "perfil-do-usuario", image: OlimpicLinkOne, width: 1536, height: 1024, caption: "Perfil do esportista: amigos e seguidores, as modalidades que ele salvou e as comunidades de que participa" }
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
        description: "Sistema completo para gestão de uma loja de tintas, integrando estoque, vendas e financeiro numa única plataforma.",
        capabilities: [
            {
                title: "Gestão e Controle",
                text: "Controle de estoque em tempo real, gestão de vendas, acompanhamento financeiro e geração de relatórios estratégicos.",
                screenshot: "dashboard-financeiro"
            },
            {
                title: "Automação e Processamento",
                text: "Rotinas automatizadas e processamento de dados por integração com **Python**, tirando da mão o que era repetitivo.",
                screenshot: null
            }
        ],
        screenshots: [
            { slug: "dashboard-financeiro", image: LaunaDashboard, width: 1536, height: 1024, caption: "O resultado do semestre por mês, com a legenda das linhas do DRE ao lado" },
            { slug: "lotes", image: LaunaOne, width: 1536, height: 1024, caption: "Cadastro de lotes: nota fiscal, fornecedor, datas de fabricação e validade, e os lotes recebidos ao lado" },
            { slug: "funcionarios", image: LaunaTwo, width: 1536, height: 1024, caption: "Cadastro de funcionários com cargo, setor, admissão e salário, e a folha completa abaixo" }
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
        description: "Sistema ERP web que centraliza as áreas de uma empresa numa única plataforma, do estoque ao financeiro, com os setores enxergando os mesmos dados.",
        capabilities: [
            {
                title: "Controle Total do Negócio",
                text: "Gerenciamento integrado de financeiro, funcionários, estoque, vendas, compras, fornecedores, produtos e processos de fabricação, eliminando retrabalho e reduzindo erros operacionais.",
                screenshot: "compras"
            },
            {
                title: "Dashboards Inteligentes",
                text: "Painéis visuais com dados em tempo real, para analisar resultado e decidir sem esperar relatório.",
                screenshot: "dashboards"
            },
            {
                title: "Integração de Processos",
                text: "Todos os setores num único sistema, com o fluxo de informação passando de uma área para a outra sem digitação repetida.",
                screenshot: null
            }
        ],
        screenshots: [
            { slug: "dashboards", image: SystemERPOne, width: 1536, height: 1024, caption: "Receita, pedidos, estoque baixo e produção no topo; receita mensal e vendas por categoria abaixo" },
            { slug: "compras", image: SystemERPTwo, width: 1536, height: 1024, caption: "Pedidos de compra com fornecedor, entrega prevista, prazo de pagamento e status de aprovação" }
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
        description: "Landing page institucional para a **AHM Conservadora e Portaria**, que atua em conservação, limpeza, zeladoria, portaria e administração de condomínios. Existe para apresentar a empresa e gerar contato.",
        capabilities: [
            {
                title: "Design Estratégico",
                text: "Interface planejada para transmitir credibilidade, com layout limpo, responsivo e alinhado à identidade visual da empresa.",
                screenshot: "home"
            },
            {
                title: "Alta Conversão",
                text: "Estrutura com chamadas para ação bem posicionadas, navegação direta e seções organizadas para levar o visitante até o contato.",
                screenshot: "contato"
            },
            {
                title: "Performance e Responsividade",
                text: "Página leve, com carregamento rápido e a mesma experiência em celular, tablet e desktop.",
                screenshot: null
            }
        ],
        screenshots: [
            { slug: "home", image: AHMOne, width: 1536, height: 1024, caption: "Topo do site: a chamada, o WhatsApp e o botão de orçamento sobre a fachada da empresa" },
            { slug: "servicos", image: AHMTwo, width: 1536, height: 1024, caption: "Os serviços em cartões: portaria social, conservação e limpeza, recepção e vigilância desarmada" },
            { slug: "contato", image: AHMThree, width: 1536, height: 1024, caption: "Formulário com assunto, nome, telefone, e-mail e mensagem, com alternativa por WhatsApp" }
        ]
    }
}

/** Featured: a lista ordenada de Projects da vitrine da home. */
export const featured = ["RyccoDespachador", "OlimpicLink", "Launa", "RyccoManager", "SystemERP", "AHM"]

export const getProject = (slug) => projects[slug] ?? null

export const featuredProjects = () => featured.map((slug) => projects[slug])

/**
 * O próximo Project na ordem de curadoria da vitrine, ou ausência no último.
 *
 * O fim da lista é o fim do caminho: a ordem de Featured é curadoria da Brand e decai de
 * propósito — do console de missão crítica à landing page institucional. Circular de
 * volta ao primeiro reiniciaria o argumento de venda e mascararia para o Client o fato de
 * que ele já viu tudo.
 */
export const nextFeatured = (slug) => {
    const posicao = featured.indexOf(slug)
    if (posicao === -1) return null
    return projects[featured[posicao + 1]] ?? null
}

/**
 * A corrente de blocos de um Project: a sequência que a página de detalhe renderiza.
 *
 * As Capabilities mandam na ordem — elas são o argumento que a Brand faz. Uma
 * Capability que reivindica uma Screenshot vira um bloco `pair`; sem Screenshot, vira
 * um bloco `capability`. Uma Screenshot que nenhuma Capability reivindicou vira um
 * bloco `screenshot`, na posição que ela ocupa entre os pares.
 *
 * As contagens de Capability e de Screenshot não fecham na maioria dos Projects, e é
 * por isso que a referência é opcional nos dois sentidos (ver ADR 0002). Um Project sem
 * nenhuma Capability produz uma corrente só de blocos `screenshot` — é o que mantém a
 * página dos Projects ainda não migrados funcionando.
 */
export const projectChain = (project) => {
    if (!project) return []

    const screenshots = project.screenshots ?? []
    const capabilities = project.capabilities ?? []
    const porSlug = new Map(screenshots.map((screenshot) => [screenshot.slug, screenshot]))
    const reivindicadas = new Set(capabilities.map((capability) => capability.screenshot).filter(Boolean))

    const corrente = []
    const emitidas = new Set()

    /** Emite as telas não reivindicadas que vêm antes de `slugLimite` na ordem das
     *  Screenshots. Sem limite, emite todas as que ainda faltam. */
    const emitirNaoReivindicadasAntesDe = (slugLimite) => {
        for (const screenshot of screenshots) {
            if (screenshot.slug === slugLimite) return
            if (reivindicadas.has(screenshot.slug) || emitidas.has(screenshot.slug)) continue
            corrente.push({ kind: "screenshot", screenshot })
            emitidas.add(screenshot.slug)
        }
    }

    for (const capability of capabilities) {
        const tela = capability.screenshot ? porSlug.get(capability.screenshot) : null

        /* Sem tela — ou apontando para uma que não existe — a Capability vira bloco de
           texto. A invariante de referência impede o segundo caso no conteúdo, mas a
           função não pode devolver um par sem imagem: quebraria a renderização. */
        if (!tela) {
            corrente.push({ kind: "capability", capability })
            continue
        }

        emitirNaoReivindicadasAntesDe(capability.screenshot)
        corrente.push({ kind: "pair", capability, screenshot: tela })
        emitidas.add(capability.screenshot)
    }

    emitirNaoReivindicadasAntesDe(null)

    return corrente
}

/** Os Projects que comprovam um Service. Derivado de Evidence, nunca declarado. */
export const projectsEvidencing = (serviceSlug) =>
    Object.values(projects).filter((project) => project.evidence.includes(serviceSlug))
