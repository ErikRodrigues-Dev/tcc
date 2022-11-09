import { useState } from 'react';

function Aluno(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div className="container-login-usuario">
        <div className='container-login'>
        <img src="/imagens/LogoTelaInicial.png" alt="Logo"/>

        <form onSubmit={handleSubmit}>
            <h1>Bem vindo Aluno</h1>
            <input type="text" placeholder="digite sua matricula" value={email} onChange={(e) =>setEmail(e.target.value)}/>
            <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Acessar</button>
        </form>
        </div>
    </div>
    )
}

export default Aluno;