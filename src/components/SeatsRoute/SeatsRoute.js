import axios from "axios";
import './style.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function SeatsRoute(){
    const params = useParams();
    const [seats, setSeats] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        promise.then((msg) => {
            // console.log(msg.data);
            setSeats(msg.data.seats);
        });
    
    }, []);
    
    // console.log(seats);

    if(seats.length === undefined) return <></>;
    else{
        return (
            <>
                <NavBar title='Selecione o(s) assento(s)'/>
                <div className="seats">
                    {seats.map((value, index) => <div className="seat">{index+1}</div>)}
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
            </>
        );
    }
}