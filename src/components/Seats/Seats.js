import './style.css';
import { useState } from 'react';

export default function Seats({data, setSeatsArray, seatsArray, seatsId, setSeatsId}){

    const [classSeat, setClassSeat] = useState('seat available');

    function availableSeats(seat){
        
        if(seat.isAvailable === false) alert('Esse assento não está disponível');
        else{
            if(classSeat === 'seat selected') {
                setClassSeat('seat available');
                const aux = seatsArray.filter(value => value !== seat.id);
                setSeatsArray([...aux]);    
                const auxId = seatsId.filter(value => value !== seat.name);
                setSeatsId([...auxId]);
            }else {
                setClassSeat('seat selected');
                setSeatsArray([...seatsArray, seat.id]);
                setSeatsId([...seatsId, seat.name]);
            }
        }
    }

    return (
        <div onClick={() => availableSeats(data)} className={data.isAvailable ? classSeat : 'seat unavailable'}>{data.name}</div>
    );
}