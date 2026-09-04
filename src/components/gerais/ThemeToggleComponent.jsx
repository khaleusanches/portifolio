import { ESCURO } from "../../theme/tema"
import { useTema } from "./useTema"

/**
 * O botão que troca o tema.
 *
 * O rótulo descreve o que o clique vai fazer, não o estado atual: quem usa leitor de
 * tela ouve "Mudar para tema escuro" e sabe o resultado antes de clicar. O ícone
 * segue a mesma lógica — mostra o destino, não onde se está.
 *
 * Aparece na NavBar e no topo da página de Project, que são telas diferentes: nunca
 * há dois na mesma página para saírem de sincronia.
 */
function ThemeToggleComponent({ className = "" }) {
    const { tema, trocar } = useTema()
    const vaiParaEscuro = tema !== ESCURO

    return (
        <button
            type="button"
            onClick={trocar}
            aria-label={vaiParaEscuro ? "Mudar para tema escuro" : "Mudar para tema claro"}
            title={vaiParaEscuro ? "Tema escuro" : "Tema claro"}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-line/25 text-ink hover:border-line/60 hover:bg-line/5 transition-colors ${className}`}
        >
            {vaiParaEscuro ? (
                /* lua: o clique leva ao escuro */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            ) : (
                /* sol: o clique leva ao claro */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
            )}
        </button>
    )
}

export default ThemeToggleComponent
