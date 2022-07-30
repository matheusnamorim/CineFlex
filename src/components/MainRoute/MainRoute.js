import './style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Movies from '../Movies/Movies';
import NavBar from '../NavBar/NavBar';

export default function MainRoute(){

    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
        promise.then((msg)=> setImgs(msg.data));
        
    }, []);

    return (
        <>
            <NavBar title='Selecione o filme'/>
            <ul className='movies'>
                {imgs.map(value => <Movies key={value.id} img={value.posterURL} id={value.id}/>)}
            </ul>
        </>
    );
}