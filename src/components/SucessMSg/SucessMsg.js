import './style.css';

export default function ({title}){
    return(
        <>
            <div className='boxMsg'>
                <h1>{title}</h1>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
        </>
    );
}