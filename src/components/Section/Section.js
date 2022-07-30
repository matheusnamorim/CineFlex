import { Link } from 'react-router-dom';
import './style.css';

export default function Section({data}){
    
    return (
        <>
            <li>
                <p className='data'>{data.weekday} - {data.date}</p>
                <div className='sections'>
                {data.showtimes.map(value => (
                    <Link to={`/assentos/${value.id}`} key={value.id}>
                        <div className='schedules'>
                            {value.name}
                        </div>
                    </Link>
                ))}
                </div>
            </li>
        </>
    );
}