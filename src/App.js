import React from 'react';
import {Container} from './styles.js';
import './styles.css'
import {FaShoppingBag} from "react-icons/fa"

function App() {
  return (
    <Container>
      <div>
        <img src="https://svgsilh.com/svg/2899790-3f51b5.svg" alt="logo" />
        <FaShoppingBag size={60} color="#000" />
      </div>

     <input type="text" placeholder="Pesquise pelo nome produto"/>
    </Container>
  );
}

export default App;
