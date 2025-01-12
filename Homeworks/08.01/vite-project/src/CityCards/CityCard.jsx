
import CityCardStyles from "./CityCardStyles.module.css";
export default function CityCard({ city }) {

    const { name, description, imageUrl, facts } = city;

    return (
        <div className={CityCardStyles.bg}>
            <div className={CityCardStyles.container}>
                <img className={CityCardStyles.image} src={imageUrl} alt={name} />
            </div>

            <div className={CityCardStyles.text}>
                <h2>{name}</h2>
                <p>{description}</p>
                <ul>
                    {facts.map(fact => <li key={fact}>{fact}</li>)}
                </ul>
            </div>
        </div>

    );
}
