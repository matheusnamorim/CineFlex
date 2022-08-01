import './style.css';

export default function NavBar({title, ...otherprops}){

    return (
        <>       
            <div className='navBar'>
                CINEFLEX
            </div>
            {otherprops.sucess ? (
            <div className='sucess text'>Pedido feito<br/>com sucesso!</div>
            ) : (<div className='text'>{title}</div>)}
        </>
    );
}