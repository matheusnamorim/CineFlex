import './style.css';

export default function Seats({data}){

    return (
        <div className={data.isAvailable ? 'seat available' : 'seat unavailable'}>{data.name}</div>
    );
}