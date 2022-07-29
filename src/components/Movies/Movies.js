import './style.css';
import { Link } from 'react-router-dom';

export default function Movies({img, id}){
    return (
        <>
        <Link to={`/sessoes/${id}`}>
            <li className='movie'>
                <img src={img}/>
            </li>
        </Link>
        </>
    );
}