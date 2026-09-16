import { useTema } from "./useTema"

/**
 * O botão que troca o tema.
 *
 * O rótulo descreve o que o clique vai fazer, não o estado atual: quem usa leitor de
 * tela ouve "Mudar para tema escuro" e sabe o resultado antes de clicar. O ícone segue
 * a mesma lógica — mostra o destino, não onde se está.
 *
 * Os dois ícones e os dois rótulos ficam sempre na marcação, e quem escolhe entre eles
 * é o CSS, a partir do `data-theme` que o script do index.html grava antes da primeira
 * pintura. Escolher em JavaScript daria o mesmo resultado na tela e dois problemas: a
 * página é pré-renderizada em Node, onde não há tema, então o HTML servido traria um
 * ícone e o navegador o outro — e isso quebra a hidratação, fazendo o React descartar o
 * documento pronto; e o botão nasceria com o ícone errado até o React montar.
 *
 * Aparece na NavBar e no topo da página de Project, que são telas diferentes: nunca há
 * dois na mesma página para saírem de sincronia.
 */
function ThemeToggleComponent({ className = "" }) {
    const { trocar } = useTema()

    return (
        <button
            type="button"
            onClick={trocar}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-line/25 text-ink hover:border-line/60 hover:bg-line/5 transition-colors ${className}`}
        >
            {/* Um rótulo por destino. O que não vale para o tema atual fica escondido
                de todos, inclusive do leitor de tela. */}
            <span className="sr-only dark:hidden">Mudar para tema escuro</span>
            <span className="sr-only hidden dark:inline">Mudar para tema claro</span>

            {/* lua: no tema claro, o clique leva ao escuro */}
            <svg className="dark:hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>

            {/* sol: no tema escuro, o clique leva ao claro */}
            <svg className="hidden dark:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
        </button>
    )
}

export default ThemeToggleComponent
