import React, { Component } from 'react';
import {Container} from './styles.js'
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";
import Logo from "../../assets/logo.png";

class Header extends Component {

    render() {
        return (
            <Container>
                <div id= "imagem-header"><img src={Logo} alt="UCDb logo" /></div>
                {isAuthenticated() && <div id="menu-header">
                    <Link to="/top10">TOP 10</Link>
                    <Link to="/">Sair</Link>
                </div>}
                {!isAuthenticated() && <div id="menu-header">
                    <Link to="/signup">Cadastrar</Link>
                    <Link to="/">Entrar</Link>
                </div>}

            </Container>

        )

    }


}

export default Header;