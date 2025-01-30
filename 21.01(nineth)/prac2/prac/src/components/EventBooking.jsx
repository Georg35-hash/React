import { useState } from "react";
import EventDetails from "./EventDetails";
import SeatSelector from "./SeatSelector";

export default function EventBooking() {
    const [selectedSeats, setSelectedSeats] = useState([]); // Состояние для выбранных мест
    const seats = [
        { id: 1, label: "1A" },
        { id: 2, label: "1B" },
        { id: 3, label: "1C" },
        { id: 4, label: "1D" },
        { id: 5, label: "1E" },
        { id: 6, label: "1F" },
        { id: 7, label: "1G" },
    ];

    return (
        <div>
            <EventDetails />
            <SeatSelector onSeatSelected={setSelectedSeats} seats={seats} />
            <p>
                Selected seats:{" "}
                {selectedSeats.length > 0
                    ? selectedSeats
                        .map((id) => seats.find((seat) => seat.id === id)?.label)
                        .join(", ")
                    : "None"}
            </p>
        </div>
    );
}
