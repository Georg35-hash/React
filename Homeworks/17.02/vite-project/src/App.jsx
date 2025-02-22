
import UserList from './components/UserList';

function App() {

  const userList = [
    {
      id: 1,
      name: "Irina",
      age: 21
    },
    {
      id: 2,
      name: "Bodya",
      age: 25
    }
  ];

  return (
  <>
    <UserList userList={userList}/>
  </>
  );
}

export default App;
