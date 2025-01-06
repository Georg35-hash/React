import CardsList from '../CardsList/CardList';
import './App.css';
import { useState } from 'react';
function App() {
  const teams = [
    {
      name: 'Dragons United',
      members: ['David Miller', 'Ethan Turner', 'Natalie Clark', 'Sophie Gomez', 'Tom Hanks']
    },
    {
      name: 'Golden Eagles',
      members: ['Lisa Ray', 'Harry Ford', 'Betty Cooper', 'George King', 'Alice Morgan']
    },
    {
      name: 'Mighty Warriors',
      members: ['Sam Wilson', 'John Norton', 'Emma Cartright', 'Daniel Lewis', 'Megan Stone']
    },
    {
      name: 'Falcon Flyer',
      members: ['Oscar Wilde', 'Robert Brown', 'Victoria Smith', 'Rachel Adams', 'Matthew Johns']
    },
    {
      name: 'Storm Breakers',
      members: ['Lucas White', 'Eva Taylor', 'Charles Anderson', 'Emily Johnson', 'Aaron Carter']
    }
  ];

  const [counter, setCounter] = useState(0);
  const [teams, setTeams] = useState(defaultTeams);

  const addTeam = team => {
    setTeams(defaultTeams => [...defaultTeams, team])
  }

//good example
  const badIncrement = () => {
    setCounter(counter + 1) // 0 + 1
    setCounter(counter + 1) // 0 + 1
  }
//bad example
  const goodIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  
  return (
    <>

      <div className='App'>
        <CardsList teamsData={teams} />
      </div>

      <div className='App'>
        {/* <CardsList teamsData={teams} /> */}
        <button onClick={badIncrement}>+</button>
        <button onClick={goodIncrement}>+</button>
        <h1>{counter}</h1>
      </div>
    </>
  );
}

export default App;
