function CarList() {
    const cars = [
        { id: 1, brand: 'BMW', model: 'X5', year: 2021, color: 'Черный' },
        { id: 2, brand: 'Mercedes', model: 'E-Class', year: 2020, color: 'Серебристый' },
        { id: 3, brand: 'Audi', model: 'Q7', year: 2022, color: 'Белый' },
        { id: 4, brand: 'Tesla', model: 'Model 3', year: 2021, color: 'Красный' },
        { id: 5, brand: 'Toyota', model: 'Camry', year: 2019, color: 'Синий' }
    ];
    return (
        <div>
            <h2>
                <ul>
                    {cars.map(car => (
                        <li key={car.id}>
                            <h3>{car.brand}{car.model}</h3>
                            <p>Year of :{car.year}</p>
                            <p>Color{car.color}</p>
                        </li>
                    ))}
                </ul>
            </h2>
        </div>
    )
}
export default CarList