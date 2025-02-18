import { useState } from 'react';
import ValueDisplay from './components/ValueDisplay';

export default function App() {

  const [initialValue, setValue] = useState("");

  return (
    <div>

      <input type='text' value={initialValue} onChange={(e) => setValue(e.target.value)} />
      <ValueDisplay value={initialValue}/>
    </div>
  );
}