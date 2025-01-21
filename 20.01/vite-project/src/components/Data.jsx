import { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Data() {
  const data = useContext(DataContext);

  // data && data.user && data.user.credentials && data.user.credentials.login - сахарочек
  
  
  // data?.user?.credentials?.login
  if(!data) return <p>Nema</p>
  return (
    <ul>
      {data?.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  )
}