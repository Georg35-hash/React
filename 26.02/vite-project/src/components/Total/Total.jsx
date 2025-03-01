import { useContext, useState } from "react";
import { StyledTotal, Title, Text, Action, Price, TextWrapper } from "./Total.styles.js";
import { CartContext } from "../../context/CartContext";
import Button from '@mui/material/Button';
import Order from '../Order/Order';

export default function Total() {
    const { cartItems } = useContext(CartContext);
    const total = cartItems.reduce((sum, product) => sum + parseFloat(product.price.replace(/[^\d.]/g, '')) * product.quantity, 0);



    const [modalOpen, setModalOpen] = useState(false);
    return (
        
        <StyledTotal>
            
            <Title>Total</Title>
            <TextWrapper>
                {cartItems.map((product) => (
                    <Text key={product.id}>
                        {product.name} <b>x{product.quantity}</b>
                    </Text>
                ))}
            </TextWrapper>

            <Action>
                <Price>Price:</Price>
                <p>{total} $</p>
            </Action>
            <div>
                <Button onClick={() => setModalOpen(true)} variant="contained" color="success">
                    Make an order
                </Button>
                <Order open={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
        </StyledTotal>
    );
}
