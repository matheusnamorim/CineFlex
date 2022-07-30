import './style.css';
import NavBar from '../NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import SucessMsg from '../SucessMSg/SucessMsg';

export default function Sucess(){

    const title = ['Filme e sessão', 'Ingressos', 'Comprador'];
    const {state} = useLocation();
    console.log(state);

    return (
        <>
            <NavBar sucess={true}/>
            {title.map(value => <SucessMsg title={value}/>)}
            <div className='dimensionsBtn'>
                <div className='HomeButton'>
                    Voltar pra Home
                </div>
            </div>
        </>
    );
}