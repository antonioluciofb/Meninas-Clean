import React, { useState, useEffect } from 'react';
import {Container, Title, Product, AddButton, Menu, Contact} from './styles';
import { FaShoppingBag, BsHouseFill, FaTshirt, FiInstagram, AiOutlineWhatsApp } from "react-icons/all";
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';
import produtos from '../../data';
import logo from "../../assets/logo.png"
import formatValue from '../../utils/formatValue';

function Home() {
  const { addToCart, products } = useCart();
  const [allProducts, setAllProducts] = useState(produtos);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const findProductsCasa = produtos.casa.filter(item => item.nome.includes(searchValue));
    const findProductsRoupa = produtos.roupas.filter(item => item.nome.includes(searchValue));
  
    const searchProducts = {
      casa: findProductsCasa,
      roupas: findProductsRoupa,
    }

    if (findProductsCasa.length > 0 || findProductsRoupa.length > 0) {
      setAllProducts(searchProducts)
    } else {
      setAllProducts(produtos)
    }
  
  }, [products, searchValue])

  function handleAddToCart(product) {

    if (products.find(item => item.id === product.id)) {
      return
    }
    addToCart(product)
  
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

   <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Pesquise pelo nome produto"/>

  {allProducts.casa.length !== 0 && (
    <>
     <Title>
     PRODUTOS PARA CASA
     <BsHouseFill size={20} color="#000" />
   </Title>

    <Menu>
      {allProducts.casa.map(product => 
        (
          <Product key={product.id}>
              <img src={product.image_url} alt={product.nome} />
              <p>{product.nome}</p>
              <p>{product.tamanho}</p>
              <strong>{formatValue(product.valor)}</strong>

              <AddButton type="button" onClick={() => handleAddToCart(product)}> 
                <FaShoppingBag size={14} color="#fff" />
                {products.find(item => item.id === product.id) ? 'ADICIONADO' : 'ADICIONAR'}
              </AddButton>
       </Product>
        ))}
      </Menu>

    </>
  )}
  

    {allProducts.roupas.length !== 0 && (
      <>
        <Title>
        PRODUTOS PARA ROUPAS
        <FaTshirt size={20} color="#000" />
          </Title>
        <Menu>
        {allProducts.roupas.map(product => 
          (
            <Product key={product.id}>
                <img src={product.image_url} alt={product.nome} />
                <p>{product.nome}</p>
                <p>{product.tamanho}</p>
                <strong>{formatValue(product.valor)}</strong>

                <AddButton type="button" onClick={() => handleAddToCart(product)}> 
                  <FaShoppingBag size={14} color="#fff" />
                  {products.find(item => item.id === product.id) ? 'ADICIONADO' : 'ADICIONAR'}
                </AddButton>
            </Product>
          ))}
        </Menu>
      </>
    )}
      
    
    <footer>
      <Contact>
        <strong>Entre em contato:</strong>
        <p>(27) 98126-4191 TIM</p>
        <p>(27) 98149-2555 VIVO</p>
        <p>limpezameninas@gmail.com</p>
      </Contact>
      
      <div>
      <a href="https://api.whatsapp.com/send?phone=5527981264191">
      <AiOutlineWhatsApp size={30} color="#fff" />
      </a>  

      <a href="https://www.instagram.com/meninasclean/">
      <FiInstagram size={30} color="#fff" />
      </a>    
      </div>

    </footer>
  </Container>
  );
}

export default Home;