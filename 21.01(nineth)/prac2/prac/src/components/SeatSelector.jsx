export default function SeatSelector({ seats, onSeatSelected }) {
    function handleClick(id) {
        onSeatSelected((prevSeats) =>
            prevSeats.includes(id)
                ? prevSeats.filter((seatId) => seatId !== id) // Удаляем, если уже выбрано
                : [...prevSeats, id]
        );
    }

    return (
        <div>
            {seats.map((seat) => (
                <button onClick={() => handleClick(seat.id)} key={seat.id}>
                    {seat.label}
                </button>
            ))}
        </div>
    );
}
