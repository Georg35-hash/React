import { useState } from 'react';

export default function Switcher() {

    const [isVisible, setVisible] = useState(true);
    const [inputValue, setInputValue] = useState(''); // Для текста
    const [submittedValue, setSubmittedValue] = useState('');


    const handleChange = (e) => {
        e.target.value;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue); // Сохраняем отправленное значение
        setInputValue(''); // Очищаем текстовое поле
    };

    function toggleVisibility(){
        setVisible(!isVisible);
    };
    return (
        <div>
            <div>
                <button onClick={toggleVisibility}>
                    {isVisible ? 'Скрыть форму' : 'Показать форму'}
                </button>
                {isVisible && (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            placeholder="Введите текст"
                        />
                        <button type="submit">Отправить</button>
                    </form>
                )}
                {submittedValue && <p>Вы ввели: {submittedValue}</p>}
            </div>
        </div>
    );
}