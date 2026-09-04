import websiteIcon from "../../public/erp-icon.png"
import automacaoIcon from "../../public/n8n-icon.svg"
import mobileIcon from "../../public/mobile-icon.png"
import consultoriaIcon from "../../public/consul-icon.png"

/**
 * Fonte única de conteúdo dos Services. Ver CONTEXT.md para o vocabulário.
 *
 * slug        identidade do Service
 * pitch       título do card na home
 * summary     texto curto do card
 * headline    título do modal de detalhe
 * description texto longo do modal
 * cta         rótulo do botão que abre o detalhe
 * icon        ícone do card
 * tiers       degraus de escopo, cada um com faixa de preço e faixa de horas
 */
export const services = {
    website: {
        slug: "website",
        pitch: "Desenvolvimento de WebSites Personalizados",
        summary: "Soluções completas para gerenciar estoque, vendas, compras, financeiro e funcionários em uma única plataforma, aumentando produtividade e controle do seu negócio.",
        headline: "Websites Personalizados",
        description: "Utilizando das tecnologias mais modernas no mercado como: **Wordpress, React e Tailwind**. Podemos construir o site da maneira que você imaginar, seja desde um site simples apresentando sua empresa e sua ideia, até um complexo site de e-commerce como o **Mercado Livre** ou um **Site de gerenciamento da sua empresa** como a **OMIE**, **PROTHEUS**, por um **preço muito mais acessível**.",
        cta: "Solicite Orçamento",
        icon: websiteIcon,
        tiers: [
            { name: "Pequeno Porte", price: "R$400 – R$800", hours: "10h – 20h" },
            { name: "Médio Porte", price: "R$1.200 – R$2.400", hours: "30h – 60h" },
            { name: "Grande Porte", price: "R$3.200 – R$8.000+", hours: "80h – 200h+" }
        ]
    },

    automacao: {
        slug: "automacao",
        pitch: "Automação de Processos",
        summary: "Reduza tarefas manuais e otimize sua rotina com sistemas inteligentes que automatizam processos e reduzem erros operacionais.",
        headline: "Automação de Processos",
        description: "Automatize tarefas repetitivas e aumente a eficiência do seu negócio com soluções inteligentes. Utilizando tecnologias modernas como **N8N**, **APIs**, **Integrações com sistemas existentes**, **Bots** e **Processos automatizados**, desenvolvemos sistemas capazes de eliminar trabalhos manuais, reduzir erros operacionais e melhorar a produtividade da sua equipe. Desde automações simples como envio automático de mensagens e organização de dados, até sistemas complexos de integração entre plataformas, como **ERPs, CRMs e sistemas internos personalizados**.",
        cta: "Descubra Soluções",
        icon: automacaoIcon,
        tiers: [
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

    mobile: {
        slug: "mobile",
        pitch: "Aplicativos Mobile",
        summary: "Criação de apps intuitivos para Android e iOS, conectando clientes e colaboradores de forma prática e moderna.",
        headline: "Aplicativos Mobile Personalizados",
        description: "Desenvolvemos aplicativos utilizando as mesmas tecnologias das grandes empresas como **Google, Microsoft e Android**, garantindo alta performance, segurança e uma experiência fluida para o usuário. Criamos desde aplicativos simples até soluções completas com **integração com APIs, autenticação, notificações push e banco de dados local/remoto**. Ideal para empresas que desejam digitalizar processos, melhorar o relacionamento com clientes ou criar novos produtos digitais escaláveis.",
        cta: "Conheça nossos apps",
        icon: mobileIcon,
        tiers: [
            {
                name: "Aplicativo Base",
                price: "R$600 – R$2.000",
                hours: "20h – 30h",
                description: "Aplicativo enxuto, com poucas telas e integração simples"
            },
            {
                name: "Aplicativo Médio",
                price: "R$2.000 – R$5.500",
                hours: "40h – 80h",
                description: "Autenticação, integração com APIs e fluxos completos de uso"
            },
            {
                name: "Aplicativo Avan.",
                price: "R$5.500 – R$14.000+",
                hours: "100h – 250h+",
                description: "Sistemas completos com múltiplas integrações, dashboards, regras de negócio e alta escalabilidade"
            }
        ]
    },

    consultoria: {
        slug: "consultoria",
        pitch: "Consultoria e Planejamento de Sistemas",
        summary: "Analisamos seu negócio e sugerimos soluções digitais sob medida para transformar gestão, vendas e operação em alta performance.",
        headline: "Consultoria e Planejamento de Sistemas",
        description: "Oferecemos consultoria especializada em tecnologia para analisar seu negócio e identificar oportunidades de melhoria através de soluções digitais. Avaliamos sua arquitetura atual, processos internos e fluxos de trabalho, propondo estratégias utilizando **boas práticas como Clean Architecture, escalabilidade, integrações via APIs e automação de processos**. Ideal para empresas que desejam reduzir custos, aumentar produtividade e estruturar sistemas preparados para crescimento.",
        cta: "Agende uma reunião",
        icon: consultoriaIcon,
        tiers: [
            {
                name: "Diagnóstico Pontual",
                price: "R$240 – R$1.000",
                hours: "2h – 5h",
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

export const serviceList = Object.values(services)

/** Ausência para Slug desconhecido, como getProject. Devolver um Service de
  * fallback exibiria silenciosamente o Service errado — e o ticket 08 torna esse
  * caminho alcançável pelo Client, via parâmetro de URL. */
export const getService = (slug) => services[slug] ?? null
