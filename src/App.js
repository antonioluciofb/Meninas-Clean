import React from 'react';
import {Container, Title, Product, AddButton} from './styles.js';
import './styles.css'
import { FaShoppingBag, BsHouseFill } from "react-icons/all";

function App() {
  return (
    <Container>
      <div>
        <img src="https://svgsilh.com/svg/2899790-3f51b5.svg" alt="logo" />
        <FaShoppingBag size={60} color="#000" />
      </div>

     <input type="text" placeholder="Pesquise pelo nome produto"/>

     <Title>
       PRODUTOS DE CASA
       <BsHouseFill size={20} color="#000" />
     </Title>
      <Product>
        <img src="#" alt="nomeProduto" />
        <p>Álcool Perfumado</p>
        <strong>R$10,00</strong>

        <AddButton type="button"> 
          <FaShoppingBag size={14} color="#000" />
          ADICIONAR
        </AddButton>
      </Product>

    </Container>
  );
}

export default App;
