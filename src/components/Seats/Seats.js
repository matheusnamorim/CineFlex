import './style.css';
import { useState } from 'react';

export default function Seats({data}){

    const [classSeat, setClassSeat] = useState('seat available');

    function availableSeats(seat){
        if(seat === false) alert('Esse assento não está disponível');
        else{
            if(classSeat === 'seat selected') setClassSeat('seat available');
            else setClassSeat('seat selected');
        }
    }

    return (
        <div onClick={() => availableSeats(data.isAvailable)} className={data.isAvailable ? classSeat : 'seat unavailable'}>{data.name}</div>
    );
}