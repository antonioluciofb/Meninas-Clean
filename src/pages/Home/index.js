import React, { useEffect, useState } from 'react';
import {Container, Title, Product, AddButton, Menu, Contact} from './styles';
import { FaShoppingBag, BsHouseFill, FaTshirt, FiInstagram } from "react-icons/all";
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';
import api from '../../services/api';
import produtos from '../../data';

function Home() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState(produtos);

  // useEffect(() => {
  //   async function loadProducts() {
  //     const response = await api.get('produtos');
  //     setProducts(response.data)
  //   }

  //   loadProducts()
  // }, [])

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
      { products !== undefined && products.casa.map(product => 
        (
          <Product key={product.id}>
              <img src={product.image_url} alt={product.nome} />
              <p>{product.nome}</p>
              <strong>{product.valor}</strong>

              <AddButton type="button"> 
                <FaShoppingBag size={14} color="#fff" />
                ADICIONAR
              </AddButton>
       </Product>
        ))}
      </Menu>

      <Title>
     PRODUTOS PARA ROUPAS
     <FaTshirt size={20} color="#000" />
      </Title>

      <Menu>
      { products !== undefined && products.roupas.map(product => 
        (
          <Product key={product.id}>
              <img src={product.image_url} alt={product.nome} />
              <p>{product.nome}</p>
              <strong>{product.valor}</strong>

              <AddButton type="button"> 
                <FaShoppingBag size={14} color="#fff" />
                ADICIONAR
              </AddButton>
       </Product>
        ))}
      </Menu>
    
    <footer>
      <Contact>
        <strong>Entre em contato:</strong>
        <p>(27) 98126-4191 TIM</p>
        <p>(27) 98149-2555 VIVO</p>
        <p>limpezameninas@gmail.com</p>
      </Contact>


      <a href="https://www.instagram.com/meninasclean/">
      <FiInstagram size={30} color="#fff" />
      </a>    
      
    </footer>
  </Container>
  );
}

export default Home;