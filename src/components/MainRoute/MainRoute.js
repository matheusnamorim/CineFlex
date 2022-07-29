import './style.css';
import axios from 'axios';
import { useState } from 'react';
import Movies from '../Movies/Movies';

export default function MainRoute(){

    const [imgs, setImgs] = useState([]);

    const promisse = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
    promisse.then((msg)=>{
        console.log(msg.data);
        setImgs(msg.data);
    });

    return (
        <>
            <div className='navBar'>CINEFLEX</div>
            <div className='text'>Selecione o filme</div>
            <ul className='movies'>
                {imgs.map(value => <Movies key={value.id} img={value.posterURL}/>)}
            </ul>
        </>
    );
}