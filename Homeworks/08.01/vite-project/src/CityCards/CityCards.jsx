import { useState } from 'react';
import CitySelector from './CitySelector';
import CityCard from './CityCard';

export default function CityCards() {
    const citiesData = [
        {
            name: "Токио",
            description: "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
            imageUrl: "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
            facts: [
                "Токио - самый населенный мегаполис в мире.",
                "Здесь расположена самая высокая башня в Японии - Токийская башня.",
                "В Токио проходят множество культурных событий и фестивалей."
            ]
        },
        {
            name: "Киото",
            description: "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
            imageUrl: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663423488_24-mykaleidoscope-ru-p-kioto-stolitsa-yaponii-instagram-25.jpg",
            facts: [
                "В Киото насчитывается более 1600 буддийских храмов.",
                "Этот город был столицей Японии более тысячи лет."
            ]
        },
        {
            name: "Осака",
            description: "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
            imageUrl: "https://sportishka.com/uploads/posts/2022-04/1650631594_29-sportishka-com-p-osaka-gorod-v-yaponii-krasivo-foto-30.jpg",
            facts: [
                "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
                "Город является кулинарной столицей Японии."
            ]
        }
    ];

    const [currentCity, setCurrentCity] = useState(citiesData[0]);

    const handleCitySelect = (e) => {
        const cityName = e.target.value;
        const city = citiesData.find(city => city.name === cityName);
        if (city) {
            setCurrentCity(city);
        }
    };

    return (
        <>
            <CitySelector cities={citiesData} onCitySelect={handleCitySelect} />
            <CityCard city={currentCity} />
        </>
    );
}
