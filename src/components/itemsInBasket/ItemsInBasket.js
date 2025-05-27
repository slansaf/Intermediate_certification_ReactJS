import React, { useState, useEffect } from 'react';

const ItemsInBasket = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        updateCartCount();
        window.addEventListener('storage', updateCartCount);
        return () => {
            window.removeEventListener('storage', updateCartCount);
        };
      }, []);

    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || null;
        const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
        setCartCount(totalCount);
      };

    return (
        <div className="number hidden"> {cartCount}</div>
    );
}

export default ItemsInBasket;