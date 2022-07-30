import './style.css';
import { useState } from 'react';

export default function Seats({data, setSeatsArray, seatsArray}){

    const [classSeat, setClassSeat] = useState('seat available');

    function availableSeats(seat){
        
        if(seat.isAvailable === false) alert('Esse assento não está disponível');
        else{
            if(classSeat === 'seat selected') {
                setClassSeat('seat available');
                const aux = seatsArray.filter(value => value !== seat.id);
                setSeatsArray([...aux]);
            }else {
                setClassSeat('seat selected');
                setSeatsArray([...seatsArray, seat.id]);
            }
        }
    }

    return (
        <div onClick={() => availableSeats(data)} className={data.isAvailable ? classSeat : 'seat unavailable'}>{data.name}</div>
    );
}