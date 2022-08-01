import './style.css';
import { useNavigate } from 'react-router-dom';

export default function NavBar({title, ...otherprops}){
    
    const navigate = useNavigate();

    return (
        <>       
            <div className='navBar'>
                CINEFLEX
                {otherprops.btn ? (<ion-icon onClick={()=>navigate(-1)} name="arrow-back-circle"></ion-icon> ) : <></>}
            </div>
            {otherprops.sucess ? (
            <div className='sucess text'>Pedido feito<br/>com sucesso!</div>
            ) : (<div className='text'>{title}</div>)}
        </>
    );
}