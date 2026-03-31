import React from 'react';
import styled from 'styled-components';
import ServicesInfosComponent from '../gerais/ServicesInfosComponent';

const ServicesCard = ({type, title, info, button, img}) => {

  return (
    <StyledWrapper>
      <div className="card m-auto mb-8">
        <div className="img">
          <img src={img} alt="" className='w-full p-2' />
        </div>
        <span className='h-[6vw] md:h-[4vw] overflow-hidden'>{title}</span>
        <p className="info">{info}</p>
        <ServicesInfosComponent button={button} type={type}/>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 17em;
    height: 24.5em;
    padding-top: 8px;
    background: #171717;
    transition: 1s ease-in-out;
    clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
  }

  .card span {
    font-weight: bold;
    color: white;
    text-align: center;
    display: block;
    font-size: 1em;
  }

  .card .info {
    font-weight: 400;
    color: white;
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
    color: white;
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
    background: #ffffff;
    color: rgb(0, 0, 0);
    transition: .4s ease-in-out;
  }

  .card .button:hover {
    background: #171717;
    color: white;
    cursor: pointer;
  }`;

export default ServicesCard;
