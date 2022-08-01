import './style.css';
import NavBar from '../NavBar/NavBar';
import { useLocation, Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

export default function Sucess(){

    const navigate = useNavigate();
    const {state} = useLocation();
 
    useEffect(() => {
        if(state === null) navigate('/');
    }, []);

    if(state !== null){
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
                    {(state.seatsId).map((value ,index)=>  <p key={index}>Assento {value}</p>)}
                </div>
                <div className='boxMsg'>
                    <h1>Comprador</h1>
                    <p>Nome: {state.nameUser}</p>
                    <p>CPF: {state.cpf}</p>
                </div>
                <div className='dimensionsBtn'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <div className='HomeButton'>
                            Voltar pra Home
                        </div>
                    </Link>
                </div>
            </>
        );
    }else return <></>;
}