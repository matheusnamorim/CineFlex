import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './style.css';
import NavBar from "../NavBar/NavBar";
import Section from "../Section/Section";

export default function SectionRoute(){
    
    const params = useParams();
    const [data, setData] = useState({});
    const [sections, setSections] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`)
        promise.then((msg) => {
            setData(msg.data);
            setSections(msg.data.days);
        });
    }, []);

    if(sections.length === undefined) return <></>;
    else{
        return (
            <>
                <NavBar/>
                <div className="text">Selecione o horário</div>
                <ul>
                    {sections.map(value => <Section key={value.id} data={value}/>)}
                </ul>
                <div className="footer">
                    <div className="backgroundImg">
                        <img src={data.posterURL}/>
                    </div>
                    <div className="title">
                        <p>{data.title}</p>
                    </div>
                </div>
            </>
        );
    }
}