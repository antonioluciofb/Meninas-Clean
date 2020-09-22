import React, { useEffect, useState } from 'react';
import {Container, Product, Menu, Contact, Options} from './styles';
import { FiInstagram, BsTrash , AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/all";
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';
import produtos from '../../data';
import logo from "../../assets/logo.png"
import img from "../../assets/a5l.png";

function Cart() {
  const { addToCart, removeToCart, increment, decrement, products } = useCart();


  // useEffect(() => {
  //   async function loadProducts() {
  //     const response = await api.get('produtos');
  //     setProducts(response.data)
  //   }

  //   loadProducts()
  // }, [])

  var value = "R$100,00"

  return (
    <Container>
    <header>
      <div className="logo">
      <Link to="/">
      <img src={logo} alt="logo" />
      </Link>
      <p className="text">Meninas <br/> Clean</p>
      </div>

      

    <strong>VALOR TOTAL: <br/> {value}</strong>
      
    </header>

    <Menu>

      {products.map(product => (
        <div className="menuItem">
        <Product>

        <div className="info">

        <img src={product.image_url} alt="alcool" />

          <div>

          <p>{product.nome}</p>

          <p>{product.valor}</p>

          </div>
          
        </div>

        <Options>
          
          <button type="button" onClick={() => increment(product)}>
            <AiOutlineMinusCircle size={20} color="rgba(8, 14, 51, 1)"/>
            </button>
          
          <p>{product.quantity}</p>
        
          <button type="button" onClick={() => decrement(product)}>
            <AiOutlinePlusCircle size={20} color="rgba(8, 14, 51, 1)"/>
            </button>


        </Options>

        
      </Product>

      <button className="lixo" type="button" onClick={() => {
        removeToCart(product)
        console.log('foi')
      }}>
            <BsTrash size={20} color="rgba(8, 14, 51, 1)" /> 
        </button>

      </div>
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

export default Cart;