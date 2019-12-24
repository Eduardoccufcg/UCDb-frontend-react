import React, { Component } from 'react';
import { Container } from './styles.js'
import { Link} from "react-router-dom";
import { isAuthenticated,logout } from "../../services/auth";
import Logo from "../../assets/logo.png";

class Header extends Component {

    render() {
        return (
            <Container>

                <div id="imagem-header"><img src={Logo} alt="UCDb logo" /></div>
                <div id="menu-header">
                   
                    {isAuthenticated() && <div>
                        <Link to="/home">Inicio</Link>
                        <Link to="/ranking">TOP 10</Link>
                        <Link onClick={logout} to="/">Sair</Link>
                    </div>}
                    {!isAuthenticated() && <div>
                        <Link to="/home">Inicio</Link>
                        <Link to="/signup">Cadastrar</Link>
                        <Link to="/">Entrar</Link>
                    </div>}
                    
                </div>

            </Container>
        )
    }
}

export default Header;