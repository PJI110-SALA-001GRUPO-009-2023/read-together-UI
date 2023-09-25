import { useState } from 'react'
import './signin.css'

import { Link } from 'react-router-dom';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  
    async function handleSignIn(e){
      e.preventDefault();
  
      if(email !== '' && password !== ''){
        await signIn(email, password);
      } else {
        alert ("Realize seu cadastro");
      }
  
    }

    return (
      
        <div className="container">
            <div className="box-login">

               <img className='logo'  src="../src/assets/logos/logo-rt-v.png" alt="Logo ReadTogether" />

                <form onSubmit={handleSignIn}>
                <span>Acesse seu cadastro:</span>
                <input 
                    type="text" 
                    placeholder="email@email.com"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) } />

                <input 
                    type="password" 
                    placeholder="********"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) } />

                
                <Link to="/perfil">
                <button type="submit">Entrar</button>
                </Link>
                

                </form>
                
                <Link to="/cadastro"> Criar uma conta</Link>
                

            </div>
    </div>
     
    )
  }
  
  export default SignIn;
  