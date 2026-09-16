# 13: Rodapé de contato

**What to build:** O Client que rolou a página inteira encontra como falar com a KH. Hoje
o rodapé é uma linha de copyright e três ícones apontando para `href=""` — quem chega ao
fim não tem para onde ir. Passa a trazer o contato de verdade: e-mail
`contato.khsoftwares@gmail.com`, WhatsApp (`wa.link/q560iy`, o mesmo destino dos CTAs),
São Paulo – SP com atendimento em todo o Brasil, as redes sociais do ticket 04 e
navegação secundária para as seções da home.

**Blocked by:** 02 (container e tokens), 04 (ícones sociais).

**Status:** ready-for-agent

- [ ] O e-mail é um `mailto:` que abre o cliente de e-mail
- [ ] O WhatsApp leva ao mesmo destino dos CTAs da página
- [ ] A localização e a abrangência de atendimento aparecem
- [ ] As redes sociais usam o componente do ticket 04, sem link vazio
- [ ] A navegação secundária leva às seções da home
- [ ] O rodapé é `<footer>` e reflui para uma coluna no celular
- [ ] Os dados de contato vêm do módulo de conteúdo, não estão cravados no JSX
