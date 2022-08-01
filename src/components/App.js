import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/css/reset.css';
import '../assets/css/main.css';
import MainRoute from './MainRoute/MainRoute';
import SectionRoute from './SectionRoute/SectionRoute';
import SeatsRoute from './SeatsRoute/SeatsRoute';
import Sucess from './Sucess/Sucess';

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<MainRoute />}/>
                <Route path='/' element={<MainRoute />}/>
                <Route path='/sessoes/:idFilme' element={<SectionRoute />}/>  
                <Route path='/assentos/:idSessao' element={<SeatsRoute />} />
                <Route path='/sucesso' element={<Sucess />} />
            </Routes>
        </BrowserRouter>
    );
}