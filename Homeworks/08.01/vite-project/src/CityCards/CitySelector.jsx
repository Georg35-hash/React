import CityCardStyles from "./CityCardStyles.module.css"

export default function CitySelector({ cities, onCitySelect }) {
    return (
        <form className={CityCardStyles.bg}>
            <select className={CityCardStyles.cityselector} onChange={onCitySelect}>
                <option value="">Выберите город</option>
                {cities.map(({ name }) => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
        </form>
    );
}
