import React from 'react';
import {Container, Title, Product, AddButton, Menu} from './styles.js';
import './styles.css'
import { FaShoppingBag, BsHouseFill, FaTshirt } from "react-icons/all";

function App() {
  return (
    <Container>
      <header>
        <img src="https://svgsilh.com/svg/2899790-3f51b5.svg" alt="logo" />
        <FaShoppingBag size={60} color="#000" />
        <span>3</span>
      </header>

     <input type="text" placeholder="Pesquise pelo nome produto"/>

     <Title>
       PRODUTOS PARA CASA
       <BsHouseFill size={20} color="#000" />
     </Title>

      <Menu>
        <Product>
          <img src="https://protelimp.com.br/wp-content/uploads/2017/04/alcool-perfumado-lavanda-itaja.jpg" alt="nomeProduto" />
          <p>Álcool Perfumado</p>
          <strong>R$10,00</strong>

          <AddButton type="button"> 
            <FaShoppingBag size={14} color="#fff" />
            ADICIONAR
          </AddButton>
        </Product>

        <Product>
          <img src="https://protelimp.com.br/wp-content/uploads/2017/04/alcool-perfumado-lavanda-itaja.jpg" alt="nomeProduto" />
          <p>Álcool Perfumado</p>
          <strong>R$10,00</strong>

          <AddButton type="button"> 
            <FaShoppingBag size={14} color="#fff" />
            ADICIONAR
          </AddButton>
        </Product>

        <Product>
          <img src="https://protelimp.com.br/wp-content/uploads/2017/04/alcool-perfumado-lavanda-itaja.jpg" alt="nomeProduto" />
          <p>Álcool Perfumado</p>
          <strong>R$10,00</strong>

          <AddButton type="button"> 
            <FaShoppingBag size={14} color="#fff" />
            ADICIONAR
          </AddButton>
        </Product>
        </Menu>

        <Title>
       PRODUTOS PARA ROUPAS
       <FaTshirt size={20} color="#000" />
        </Title>

        <Menu>
        <Product>
          <img src="https://protelimp.com.br/wp-content/uploads/2017/04/alcool-perfumado-lavanda-itaja.jpg" alt="nomeProduto" />
          <p>Álcool Perfumado</p>
          <strong>R$10,00</strong>

          <AddButton type="button"> 
            <FaShoppingBag size={14} color="#fff" />
            ADICIONAR
          </AddButton>
        </Product>

        <Product>
          <img src="https://protelimp.com.br/wp-content/uploads/2017/04/alcool-perfumado-lavanda-itaja.jpg" alt="nomeProduto" />
          <p>Álcool Perfumado</p>
          <strong>R$10,00</strong>

          <AddButton type="button"> 
            <FaShoppingBag size={14} color="#fff" />
            ADICIONAR
          </AddButton>
        </Product>

        <Product>
          <img src="https://protelimp.com.br/wp-content/uploads/2017/04/alcool-perfumado-lavanda-itaja.jpg" alt="nomeProduto" />
          <p>Álcool Perfumado</p>
          <strong>R$10,00</strong>

          <AddButton type="button"> 
            <FaShoppingBag size={14} color="#fff" />
            ADICIONAR
          </AddButton>
        </Product>
        </Menu>
      
    </Container>
  );
}

export default App;
