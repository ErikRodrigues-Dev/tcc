import React from 'react';
import { Link } from 'react-router-dom';

import Botao from '../../components/button';
import './index.css';
import '../../components/button/Botao.css'

function Home(){
    return(
        <div className='container-tela-inicial'> 
         <img src="/imagens/LogoTelaInicial.png" alt="Logo" />
       
       <Link className='botao' to="/professor">Professor</Link>
       <Link className='botao' to="/aluno">Aluno</Link>

        </div>
        
    )
}
export default Home;