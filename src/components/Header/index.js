import React, { Component } from 'react';
import './styles.css'
import { Link, withRouter } from "react-router-dom";

import { isAuthenticated } from "../../services/auth"

class Header extends Component {

    render() {
        return (
            <div id="main-header">
                {isAuthenticated() && <div className="menu-header">
                    <Link to="/top10">TOP 10</Link>
                    <Link to="/">Sair</Link>
                </div>}
                {!isAuthenticated() && <div className="menu-header">
                    <Link to="/signup">Cadastrar</Link>
                    <Link to="/">Entrar</Link>
                </div>}

            </div>

        )

    }


}

export default withRouter(Header);