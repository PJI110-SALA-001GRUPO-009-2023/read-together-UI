
import './start.css'

import { Link } from 'react-router-dom';

function Start() {

    function letsread(){}

    return (

        <div className='container' >
            <div className='box'>
                <img className='logo'  src="../src/assets/logos/logo-rt-h.png" alt="Logo ReadTogether" />

                <h1 className='title'>Seja bem bem-vindo ao clube.</h1>

                <img className='girl' src="../src/assets/illustrations/bg-homepage-rt-squad.png" alt="Garota lendo" />

                <p>Somos uma Aplicação Web de Gerenciamento de Clube de Leituras Virtuais.</p>

                <Link to="/login">
                    <button className='start'  onClick={letsread}>LET'S READ!</button>
                </Link>
                
            </div>

        </div>
     
     
    )
  }
  
export default Start;
  