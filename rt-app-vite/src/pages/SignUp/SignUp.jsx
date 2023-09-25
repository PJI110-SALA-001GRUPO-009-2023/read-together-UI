import { useState } from 'react'
import './signup.css'

import { Link } from 'react-router-dom';

function SignUp() {

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [nascdata, setNascdata] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
      e.preventDefault();

      
    }


    return (
      
        <div className="container">
            <div className="box-login">

               <img className='logo'  src="../src/assets/logos/logo-rt-v.png" alt="Logo ReadTogether" />

                <form onSubmit={handleSubmit}>
                <span>Realize seu cadastro:</span>

                <input 
                    type="text" 
                    placeholder="Nome"
                    value={name}
                    onChange={ (e) => setName(e.target.value) } />
                  
                  <input 
                    type="text" 
                    placeholder="Sobrenome"
                    value={lastname}
                    onChange={ (e) => setLastname(e.target.value) } />
                  
                  <input 
                    type="data" 
                    placeholder="Data de nascimento"
                    value={nascdata}
                    onChange={ (e) => setNascdata(e.target.value) } />

                <input 
                    type="email" 
                    placeholder="email@email.com"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) } />

                <input 
                    type="password" 
                    placeholder="********"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) } />

                <Link to="/login">
                  <button type="submit">Cadastrar</button>
                </Link>

                </form>
                

                <Link to="/">Já possui uma conta? Faça login</Link>
                

            </div>
    </div>
     
    )
  }
  
  export default SignUp;
  