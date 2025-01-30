import React, { useState, useEffect } from "react";

const ListItems = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        if (inputValue.trim()) {
            setItems((prevItems) => [...prevItems, inputValue]);
            setInputValue("");
        }
    };

    useEffect(() => {
        console.log("Компонент ListItems обновлен");
    }, [items]); // Намеренная ошибка для ESLint

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addItem}>Добавить</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListItems;
