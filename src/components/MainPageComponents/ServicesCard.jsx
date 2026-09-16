import styled from 'styled-components';
import ServicesInfosComponent from '../gerais/ServicesInfosComponent';

/**
 * O cartão de um Service.
 *
 * O chanfro `clip-path` que cortava dois cantos saiu: era a única forma desse tipo no
 * site, e cortava o canto do cartão sem nada acompanhar o corte. O raio agora é o do
 * sistema, como no cartão de Project e nas Screenshots.
 *
 * A altura também saiu. Era fixa em `em`, e o pitch — que tinha `overflow-hidden` e
 * altura em `vw` — era cortado no meio quando o texto crescia. Agora o cartão ocupa a
 * altura da linha da grade, o texto manda no tamanho e o botão é empurrado para o pé
 * por `margin-top: auto`, de modo que os botões de uma linha se alinham entre si mesmo
 * com resumos de tamanhos diferentes.
 */
const ServicesCard = ({ service }) => {
  return (
    <StyledWrapper className="h-full">
      <div className="card">
        <div className="img">
          <img src={service.icon} alt={`Ícone de ${service.pitch}`} className="w-full p-2" />
        </div>
        <span>{service.pitch}</span>
        <p className="info">{service.summary}</p>
        <ServicesInfosComponent service={service} />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    height: 100%;
    padding: 1.75rem 1.25rem;
    background: rgb(var(--card));
    border: 1px solid rgb(var(--line) / 0.12);
    color: rgb(var(--on-card));
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
  }

  /* O mesmo gesto do cartão de Project: subir um pouco e ganhar elevação. Antes
     era uma transição de 1s sobre 'all', que arrastava e não dizia o que mudava. */
  .card:hover {
    transform: translateY(-4px);
    border-color: rgb(var(--line) / 0.25);
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.09), 0 20px 44px -16px rgb(0 0 0 / 0.42);
  }

  .card span {
    margin-top: 1.25rem;
    font-weight: bold;
    text-align: center;
    display: block;
    line-height: 1.35;
  }

  .card .info {
    font-weight: 400;
    display: block;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.55;
    margin-top: 0.75rem;
    color: rgb(var(--on-card) / 0.75);
  }

  .card .img {
    width: 4.5rem;
    height: 4.5rem;
    /* Era 'background: white' cravado: no tema escuro o ícone ficava sobre um
       quadrado branco no meio de um cartão preto. O fundo é o da superfície do
       cartão, levemente destacado. */
    background: rgb(var(--on-card) / 0.06);
    border-radius: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Empurra o botão para o pé do cartão: é o que alinha os botões de uma linha
     mesmo quando os resumos têm tamanhos diferentes. */
  .card > div:last-child {
    margin-top: auto;
    padding-top: 1.5rem;
  }

  .card .button {
    padding: 0.8em 1.7em;
    display: block;
    margin: auto;
    border-radius: 999px;
    border: none;
    font-weight: bold;
    /* O botão é o inverso do cartão, então funciona nos dois temas: cartão escuro
       com botão claro, cartão claro com botão escuro. */
    background: rgb(var(--on-card));
    color: rgb(var(--card));
    transition: background-color .3s ease, color .3s ease, box-shadow .3s ease;
  }

  .card .button:hover {
    background: transparent;
    color: rgb(var(--on-card));
    box-shadow: inset 0 0 0 2px rgb(var(--on-card));
    cursor: pointer;
  }`;

export default ServicesCard;
