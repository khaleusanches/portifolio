import React from 'react';
import styled from 'styled-components';
import ServicesInfosComponent from '../gerais/ServicesInfosComponent';

const ServicesCard = ({service}) => {

  return (
    <StyledWrapper className='flex justify-center'>
      <div className="card mb-8">
        <div className="img">
          <img src={service.icon} alt="" className='w-full p-2' />
        </div>
        <span className='h-[6vw] md:h-[4vw] overflow-hidden'>{service.pitch}</span>
        <p className="info">{service.summary}</p>
        <ServicesInfosComponent service={service}/>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 17em;
    height: 24.5em;
    padding-top: 8px;
    background: rgb(var(--card));
    border: 1px solid rgb(var(--line) / 0.12);
    color: rgb(var(--on-card));
    transition: 1s ease-in-out;
    clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
  }

  .card span {
    font-weight: bold;
    color: rgb(var(--on-card));
    text-align: center;
    display: block;
    font-size: 1em;
  }

  .card .info {
    font-weight: 400;
    color: rgb(var(--on-card));
    display: block;
    text-align: center;
    font-size: 0.79em;
    margin: 1em;
    margin-bottom: 1.8em;
  }

  .card .img {
    width: 4.8em;
    height: 4.8em;
    background: white;
    border-radius: 15px;
    margin: auto;
  }

  .card .share {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  .card a {
    color: rgb(var(--on-card));
    transition: .4s ease-in-out;
  }

  .card a:hover {
    color: red;
  }

  .card .button {
    padding: 0.8em 1.7em;
    display: block;
    margin: auto;
    margin-bottom: 1.8em;
    border-radius: 25px;
    border: none;
    font-weight: bold;
    /* O botão é o inverso do cartão, então funciona nos dois temas: cartão escuro
       com botão claro, cartão claro com botão escuro. */
    background: rgb(var(--on-card));
    color: rgb(var(--card));
    transition: .4s ease-in-out;
  }

  .card .button:hover {
    background: transparent;
    color: rgb(var(--on-card));
    box-shadow: inset 0 0 0 2px rgb(var(--on-card));
    cursor: pointer;
  }`;

export default ServicesCard;
