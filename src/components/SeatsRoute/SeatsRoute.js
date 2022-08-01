import axios from "axios";
import './style.css';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Seats from "../Seats/Seats";
import { cpfMask } from "../maskCPF";

export default function SeatsRoute(){
    
    const params = useParams();
    const navigate = useNavigate();
    const [seats, setSeats] = useState({});
    const [data, setData] = useState({});
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [seatsArray, setSeatsArray] = useState([]);
    const [seatsId, setSeatsId] = useState([]);

    useEffect(() => {
        
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        promise.then((msg) => {
            setData(msg.data);
            setSeats(msg.data.seats);
        });
    
    }, []);
    
    function makeReserv(){
        if(seatsArray.length !== 0 && cpf !== '' && name !== ''){
            const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', {
                ids: seatsArray,
                name: name,
                cpf: cpf
            });

            promise.then(() => navigate('/sucesso', {state: {nameUser: name, cpf: cpf, title: data.movie.title, hour: data.name, day: data.day.date, seatsId: seatsId}}));
            
        }else {
            alert('Insira os dados novamente!');
            setCpf('');
            setName('');
        }
    }

    if(seats.length === undefined) return <></>;
    else{
        return (
            <>
                <NavBar title='Selecione o(s) assento(s)' btn={true}/>
                <div className="seats">
                    {seats.map(value => <Seats key={value.id} data={value} setSeatsArray={setSeatsArray} seatsArray={seatsArray} seatsId={seatsId} setSeatsId={setSeatsId}/>)}
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
                        <input value={cpf} onChange={(e) => setCpf(cpfMask(e.target.value))} placeholder="Digite seu CPF..."/>
                    </div>
                </div>
                <div className="dimensionsButton">
                    <div className="button" onClick={() => makeReserv()}>
                        <p>Reservar assento(s)</p>
                    </div>
                </div>
                <Footer img={data.movie.posterURL} title={data.movie.title} lock={true} weekday={data.day.weekday} hour={data.name}/>
            </>
        );
    }
}