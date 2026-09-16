# 05: Metadados por rota e JSON-LD

**What to build:** Cada página passa a se apresentar. Hoje o `index.html` tem um `<title>`
genérico e nenhuma `description`, e as páginas de Project não têm metadado nenhum —
compartilhar qualquer link no WhatsApp, que é para onde todo CTA aponta, não gera prévia.
Nasce um módulo que, dada uma rota, devolve `title`, `description`, `canonical` e os
campos de Open Graph e Twitter Card, derivados do conteúdo que já existe: `headline` e
`pitch` do Project, e um par fixo para a home. Nada de texto de SEO escrito à parte —
duas fontes divergem. A home ganha também JSON-LD de `Organization`.

A origem canônica é `https://khsoftwares.vercel.app`, onde o site é servido. Ela vive numa
constante única, porque o dia do domínio próprio vai chegar.

Aqui os metadados são aplicados no navegador. É o ticket 16 que os coloca no HTML servido,
que é o que o robô lê.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** done

- [x] Existe uma função que, dada uma rota, devolve os metadados dela
- [x] O `title` e a `description` de um Project derivam de `headline` e `pitch`, sem texto paralelo
- [x] A origem canônica é uma constante única
- [x] Toda URL de Open Graph é absoluta, inclusive a imagem
- [x] A imagem de Open Graph de um Project é a `cover` dele
- [x] A home tem JSON-LD de `Organization` com nome, logo, e-mail e área de atuação
- [x] Navegar entre home e Project troca os metadados, sem acumular tags repetidas
- [x] Um teste cobre a derivação dos metadados a partir do conteúdo
