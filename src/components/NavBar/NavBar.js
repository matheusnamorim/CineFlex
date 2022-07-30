import './style.css';

export default function NavBar({title}){
    return (
        <>       
            <div className='navBar'>CINEFLEX</div>
            <div className='text'>{title}</div>
        </>
    );
}