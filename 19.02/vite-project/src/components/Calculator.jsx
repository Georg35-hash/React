import { Container, Typography } from '@mui/material';
import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)

  const handleNum1Change = e => setNum1(e.target.value)
  const handleNum2Change = e => setNum2(e.target.value)

  const handleAddition = () => setResult(parseFloat(num1) + parseFloat(num2))
  const handleSubtraction = () => setResult(parseFloat(num1) - parseFloat(num2))
  const handleMultiplication = () => setResult(parseFloat(num1) * parseFloat(num2));
  const handleDivision = () => setResult(parseFloat(num1) / parseFloat(num2));

  return (
    <Container>
      <Typography>
        Calculator
      </Typography>
    </Container>
  )
}