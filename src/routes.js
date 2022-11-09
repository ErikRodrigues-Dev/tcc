import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Professor from './pages/Professor';
import Aluno from './pages/Aluno';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/professor' element={ <Professor/> } />
                <Route path='/aluno' element={ <Aluno/> } />

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;