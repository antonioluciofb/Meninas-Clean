import React from 'react';
import {Container, Title, Product, AddButton, Menu} from './styles';
import { FaShoppingBag, BsHouseFill, FaTshirt } from "react-icons/all";
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';

function Home() {
  const { addToCart } = useCart();

  return (
    <Container>
    <header>
      <img src="https://svgsilh.com/svg/2899790-3f51b5.svg" alt="logo" />
      <Link to="/cart">
        <FaShoppingBag size={60} color="#000" />
        <span>3</span>
      </Link>
      
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

export default Home;