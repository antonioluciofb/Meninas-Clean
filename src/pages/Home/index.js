import React from 'react';
import {Container, Title, Product, AddButton, Menu, Contact} from './styles';
import { FaShoppingBag, BsHouseFill, FaTshirt, FiInstagram } from "react-icons/all";
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';
import produtos from '../../data';
import logo from "../../assets/logo.png"
import formatValue from '../../utils/formatValue';

function Home() {
  const { addToCart, products } = useCart();

  function handleAddToCart(product) {
    addToCart(product);

    console.log(product);
  }

  
  return (
    <Container>
    <header>
      <div className="logo">
      <Link to="/">
      <img src={logo} alt="logo" />
      </Link>
      <p className="text">Meninas <br/> Clean</p>
      </div>         

      <Link to="/cart">
        <FaShoppingBag size={60} color="#0C154A" />
        <span>{products.length}</span>
      </Link>
      
    </header>

   <input type="text" placeholder="Pesquise pelo nome produto"/>

   <Title>
     PRODUTOS PARA CASA
     <BsHouseFill size={20} color="#000" />
   </Title>

    <Menu>
      {produtos.casa.map(product => 
        (
          <Product key={product.id}>
              <img src={product.image_url} alt={product.nome} />
              <p>{product.nome}</p>
              <p>{product.tamanho}</p>
              <strong>{formatValue(product.valor)}</strong>

              <AddButton type="button" onClick={() => handleAddToCart(product)}> 
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
      {produtos.roupas.map(product => 
        (
          <Product key={product.id}>
              <img src={product.image_url} alt={product.nome} />
              <p>{product.nome}</p>
              <p>{product.tamanho}</p>
              <strong>{formatValue(product.valor)}</strong>

              <AddButton type="button" onClick={() => handleAddToCart(product)}> 
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