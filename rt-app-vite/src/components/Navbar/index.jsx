import React from "react";
import { Link } from 'react-router-dom';



const Navbar = ()=> {
    return(
        <nav>
            <Link to="/">Started</Link>
            <Link to="/register">Cadastro</Link>
        </nav>
    )
}

export default Navbar;