import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await axios.get('https://67beee1cb2320ee05011f9de.mockapi.io/api/cartData');
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart data: ", error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (product) => {
    try {
      // Check existed item
      const existingItem = cartItems.find(
        item => item.name === product.name && item.price === product.price
      );
  
      if (existingItem) {
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
  
        await axios.put(`https://67beee1cb2320ee05011f9de.mockapi.io/api/cartData/${existingItem.id}`, updatedItem);
  
        setCartItems(prevItems =>
          prevItems.map(item => (item.id === existingItem.id ? updatedItem : item))
        );
      } else {
        const { data } = await axios.post(
          'https://67beee1cb2320ee05011f9de.mockapi.io/api/cartData',
          { ...product, quantity: 1 }
        );
        // Added new item, but if it exist, add id
        setCartItems(prevItems => {
          const alreadyExists = prevItems.find(
            item => item.name === data.name && item.price === data.price
          );
          return alreadyExists
            ? prevItems.map(item => (item.name === data.name && item.price === data.price ? { ...item, id: data.id } : item))
            : [...prevItems, data];
        });
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  

  const deleteToCart = async (productId) => {
    try {
      await axios.delete(`https://67beee1cb2320ee05011f9de.mockapi.io/api/cartData/${productId}`,);
      setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    } catch (error) {
      console.error("Error deleting product to cart: ", error);
    }
  };
  const updateCartItemQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) {
      await deleteToCart(id);
      return;
    }
  
    try {
      const { data } = await axios.put(
        `https://67beee1cb2320ee05011f9de.mockapi.io/api/cartData/${id}`,
        { quantity: newQuantity }
      );
  
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, quantity: data.quantity } : item))
      );
    } catch (error) {
      console.error("Error updating cart item quantity: ", error);
    }
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteToCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};