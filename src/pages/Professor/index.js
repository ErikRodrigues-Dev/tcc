import { useState } from 'react';

import './index.css';

function Professor(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div className="container-professor">
            <div className='container-login'>
            <img src="/imagens/LogoTelaInicial.png" alt="Logo"/>

            <form onSubmit={handleSubmit}>
                <h1>Bem vindo Professor</h1>
                <input type="text" placeholder="digite sua matricula"  value={email} onChange={(e) =>setEmail(e.target.value)} />
                <input type="password" placeholder="********"  value={password} onChange={(e) =>setPassword(e.target.value)}/>
                <button type="submit">Acessar</button>
            </form>
            </div>
        </div>
    );
}

export default Professor;