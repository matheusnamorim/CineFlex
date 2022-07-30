import axios from "axios";
import './style.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Seats from "../Seats/Seats";

export default function SeatsRoute(){
    
    const params = useParams();
    const [seats, setSeats] = useState({});
    const [data, setData] = useState({});
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [seatsArray, setSeatsArray] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        promise.then((msg) => {
            setData(msg.data);
            setSeats(msg.data.seats);
        });
    
    }, []);
    
    // console.log(seats);
    //  console.log(data);

    if(seats.length === undefined) return <></>;
    else{
        return (
            <>
                <NavBar title='Selecione o(s) assento(s)'/>
                <div className="seats">
                    {seats.map(value => <Seats key={value.id} data={value} setSeatsArray={setSeatsArray} seatsArray={seatsArray}/>)}
                </div>
                <div className="legends">
                    <div className="icons">
                        <div className="dimensions selected"></div>
                        <div className="dimensions available"></div>
                        <div className="dimensions unavailable"></div>
                    </div>
                    <div className="description">
                        <p>Selecionado</p>
                        <p>Disponível</p>
                        <p>Indisponível</p>
                    </div>
                </div>
                <div className="forms">
                    <div className="dimensionsForms">
                        <p>Nome do comprador:</p>
                        <input  value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome..."/>
                    </div>
                    <div className="dimensionsForms">
                        <p>CPF do comprador:</p>
                        <input value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
                    </div>
                </div>
                <div className="dimensionsButton">
                    <div className="button">
                        <p>Reservar assento(s)</p>
                    </div>
                </div>
                <Footer img={data.movie.posterURL} title={data.movie.title} lock={true} weekday={data.day.weekday} hour={data.name}/>
            </>
        );
    }
}