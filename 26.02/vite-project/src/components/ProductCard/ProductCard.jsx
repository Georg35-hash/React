import { useContext, useState } from 'react';
import { Card, Image, Title, Actions, Price, Amount, AddButton } from './ProductCard.styles.js';
import { CartContext } from '../../context/CartContext';
import { Snackbar, Alert } from "@mui/material";

export default function ProductCard({ product }) {
  const { image, name, price } = product;
  const { addToCart } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setSuccessMessage(true);
  };

  return (
    <Card>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <Actions>
        <div>
          <Price>PRICE:</Price>
          <Amount>{price}</Amount>
        </div>
        <AddButton onClick={handleAddToCart}>+</AddButton>
      </Actions>
      <Snackbar
                open={successMessage}
                autoHideDuration={3000}
                onClose={() => setSuccessMessage(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={() => setSuccessMessage(false)} severity="success">
                    You have successfully added the product to the basket!
                </Alert>
            </Snackbar>
    </Card>
  );
}
