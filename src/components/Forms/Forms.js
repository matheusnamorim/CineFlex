import './style.css';
import { cpfMask } from "../maskCPF";

export default function ({name, cpf, setCpf, setName}){
    return (
    <>
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
    </>
);
}