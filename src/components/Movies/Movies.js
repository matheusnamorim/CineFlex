import './style.css';

export default function Movies({img}){
    return (
        <li className='movie'>
            <img src={img}/>
        </li>
    );
}