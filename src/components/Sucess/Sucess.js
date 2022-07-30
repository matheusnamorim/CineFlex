import './style.css';
import NavBar from '../NavBar/NavBar';
import { useLocation } from 'react-router-dom';

export default function Sucess(){

    const {state} = useLocation();

    return (
        <>
            <NavBar sucess={true}/>
            <div className='boxMsg'>
                <h1>Filme e sessão</h1>
                <p>{state.title}</p>
                <p>{state.day} {state.hour}</p>
            </div>
            <div className='boxMsg'>
                <h1>Ingressos</h1>
                {(state.seatsId).map(value => <p>Assento {value}</p>)}
            </div>
            <div className='boxMsg'>
                <h1>Comprador</h1>
                <p>Nome: {state.nameUser}</p>
                <p>CPF: {state.cpf}</p>
            </div>
            <div className='dimensionsBtn'>
                <div className='HomeButton'>
                    Voltar pra Home
                </div>
            </div>
        </>
    );
}