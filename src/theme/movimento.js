/**
 * As constantes do movimento do site, num lugar só.
 *
 * Elas vivem fora dos componentes pelo mesmo motivo que a cor vive em tokens
 * (ADR 0005): duração e curva são decisões do sistema, e uma seção que escolhesse a
 * sua faria a página animar em dois ritmos.
 *
 * A curva é `easeOut` e nada mais. O `backOut` foi tentado e abandonado — é o ease
 * que fazia a página quicar ao parar (ver PageTransition).
 */

export const EASE = "easeOut"

/** Transição entre páginas. Metade de uma navegação, que é ~400ms com mode="wait". */
export const DURACAO_PAGINA = 0.2

/**
 * Entrada de um bloco ao chegar na viewport. Mais longa que a de página porque
 * percorre mais distância: 16px contra os 24px de uma página inteira deslizando.
 */
export const DURACAO_ENTRADA = 0.4

/** Quanto um bloco sobe ao entrar. Curto de propósito: é um assentar, não um voo. */
export const DESLOCAMENTO = 16

/**
 * Intervalo entre os filhos de uma lista em cascata. Acima de ~80ms a cascata
 * deixa de ser leitura e vira espera: o último card de uma grade de doze chegaria
 * quase um segundo depois do primeiro.
 */
export const CASCATA = 0.06

/**
 * Quanto do elemento precisa estar visível para a entrada disparar, e que ela
 * dispara uma vez só. Rolar de volta não remonta a animação: repetição a cada
 * passagem transforma a página num carrossel de piscadas.
 */
export const VIEWPORT = { once: true, amount: 0.2 }
