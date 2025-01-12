import { useState } from 'react';
import styles from './List.module.css';

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 },
  ]);

  const handleRemove = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Список приглашенных</h2>
      <ul className={styles.list}>
        {people.map((person) => (
          <li key={person.id} className={styles.item}>
            <span className={styles.info}>
              {person.name}, {person.age} лет
            </span>
            <button
              onClick={() => handleRemove(person.id)}
              className={styles.button}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;