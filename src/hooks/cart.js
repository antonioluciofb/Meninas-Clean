import React, { 
  useState, 
  createContext, 
  useCallback, 
  useEffect, 
  useContext } from 'react';

const CartContext = createContext(null);

function CartProvider({children}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function loadProducts() {
      const allProducts = localStorage.getItem('@Product');
      
      if (allProducts) {
        setProducts([...JSON.parse(allProducts)]);
        
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    product => {
      const thisProduct = products.find(item => item.id === product.id);

      if (thisProduct) {
        setProducts(
          products.map(item =>
            item.id === product.id
              ? { ...product, quantity: item.quantity + 1 }
              : item,
          ),
        );
      } else {
        setProducts([...products, { ...product, quantity: 1 }]);
      }

      localStorage.setItem('@Product', JSON.stringify(products));
    },
    [products],
  );

  const removeToCart = useCallback(product => {
    
    const thisProduct = products.find(item => item.id === product.id);
    if (thisProduct) {
      
      const outroArray = products.filter(item => item.id !== thisProduct.id )

      setProducts(outroArray)
      // localStorage.removeItem('@Product');
      localStorage.setItem('@Product', JSON.stringify(outroArray));
    }
  }, [products])

  const increment = useCallback(
    id => {
      const newProducts = products.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );

      setProducts(newProducts);

      localStorage.setItem('@Product', JSON.stringify(newProducts));
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const newProducts = products.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      );

      setProducts(newProducts);

      localStorage.setItem('@Product', JSON.stringify(newProducts));
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, removeToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement, removeToCart],
  );


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };