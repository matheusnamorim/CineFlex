import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './style.css';
import NavBar from "../NavBar/NavBar";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";

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
                <NavBar title='Selecione o horário'/>
                <ul>
                    {sections.map(value => <Section key={value.id} data={value}/>)}
                </ul>
                <Footer img={data.posterURL} title={data.title} lock={false}/>
            </>
        );
    }
}