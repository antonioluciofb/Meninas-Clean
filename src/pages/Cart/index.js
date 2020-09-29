import React, {useMemo} from 'react';
import {Container, Product, Menu, Contact, Options, ButtonWhatsApp} from './styles';
import { FiInstagram, BsTrash , AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineWhatsApp } from "react-icons/all";
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';
import logo from "../../assets/logo.png"


function Cart() {
  const { removeToCart, increment, decrement, products } = useCart();

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const subTotal = product.valor * product.quantity;
      return accumulator + subTotal;
    }, 0);

    return formatValue(total);
  }, [products]);  


  function joinArrayObjs(ar) {
    var str = `Olá, eu gostaria de fazer esses pedidos:

`;

    for (var i = 0; i < ar.length; i++) {
      str +=`• ${ar[i].quantity}x ${ar[i].nome} ${ar[i].tamanho}: ${formatValue(ar[i].valor * ar[i].quantity)}
      
`;
    }
    str+= `
*Valor total*: ${cartTotal}`

    return window.encodeURIComponent(str);
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

      

    <strong>VALOR TOTAL: <br/> {cartTotal}</strong>
      
    </header>

    <Menu>
      {products.length === 0 && <p className="carrinho">Seu carrinho está vazio</p>}

      {products.map(product => (
        <div key={product.id} className="menuItem">
            <Product>
            <div className="info">
            <img src={product.image_url} alt="alcool" />
              <div>
              <p>{product.nome}</p>
              <p>{formatValue(product.valor)}</p>
              </div>
            </div>

            <Options>
              <button type="button" onClick={() => {
                decrement(product.id)
                product.quantity === 1 && removeToCart(product)
                }}>
                <AiOutlineMinusCircle size={20} color="rgba(8, 14, 51, 1)"/>
                </button>
              <p>{product.quantity}</p>
              <button type="button" onClick={() => increment(product.id)}>
                <AiOutlinePlusCircle size={20} color="rgba(8, 14, 51, 1)"/>
                </button>
            </Options>
          </Product>

          <button 
          className="lixo" 
          type="button" 
          onClick={() => {
          removeToCart(product)
            console.log('foi')
          }}>
            <BsTrash size={20} color="rgba(8, 14, 51, 1)" /> 
          </button>

      </div>
      ))}
    </Menu>
    
    {products.length !== 0 && 
      <ButtonWhatsApp 
      href={`https://api.whatsapp.com/send?phone=55279812641910&text=${joinArrayObjs(products)}`}>
        <AiOutlineWhatsApp size={20} color="#FFF" />
        <p>FAZER PEDIDO</p>
      </ButtonWhatsApp>
    }
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