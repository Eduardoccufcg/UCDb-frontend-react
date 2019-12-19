import React, { Component } from 'react';

import { Link, withRouter } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";



class Search extends Component {

    state = {
        disciplinas:[]
    }
    // getDisciplinas = async e=> {
    //     e.preventDefault();
        
    //     const { email, password } = this.state;
    //     if (!email || !password) {
    //         this.setState({ error: "Preencha todos os dados para se cadastrar" });
    //     } else {

    //         await api.post("/api/v1/auth/login/", { email, password }).then((response) => {login(response.data.token);this.props.history.push("/app") })
    //             .catch((error) => {
    //                 this.setState({ error: error.response.data.message })
    //         })
    //     }


    // };


    render() {
        return (
            <div id="search">
                <input
                
                 type ="text"
                 placeholder="ex. laboratório ..."
                //  onChange={e => {this.getDisciplinas(e.target.value)}}

                >
                </input>
                <h1>Search</h1>
            </div>
        );

    }

}

export default Search;