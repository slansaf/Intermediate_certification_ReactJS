import React, { useState, useEffect } from 'react';

const ItemsInBasket = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        updateCartCount();
        window.addEventListener('storage', updateCartCount);
        return () => {
            window.removeEventListener('storage', updateCartCount);
        };
      }, ["storage"]);

    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || null;
        if (cart) {
          const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
          setCartCount(totalCount);
        } else {
          setCartCount(0);
        }
        
        
      };

    return (
        <div className="number hidden"> {cartCount}</div>
    );
}

export default ItemsInBasket;