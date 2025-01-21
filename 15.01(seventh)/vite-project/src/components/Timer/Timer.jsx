import { useEffect, useState } from 'react';
// import 
export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Устанавливаем интервал, который каждую секунду меняет seconds
        const timerId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);
    return <div>{seconds}</div>;
}