import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/css/reset.css';
import '../assets/css/main.css';
import MainRoute from './MainRoute/MainRoute';
import SectionRoute from './SectionRoute/SectionRoute';


export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainRoute />}/>
                <Route path='/sessoes/:idFilme' element={<SectionRoute />}/>  
            </Routes>
        </BrowserRouter>
    );
}