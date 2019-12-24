import React, { Component } from 'react';

// import { Link, withRouter } from "react-router-dom";
// import { isAuthenticated } from "../../services/auth";
import api from "../../services/api";
import { Input } from 'semantic-ui-react'
import { Container } from "./styles";

class Search extends Component {

    state = {
        disciplinas: []
    }
    getDisciplinas = async (substring) => {
        await api.get(`/api/v1/profiles/search/?substring=${substring}`).then((response) => { this.setState({ disciplinas: response.data }) })
            .catch((error) => {
                this.setState({ error: error.response.data.message })
            })
    }

    render() {
        const { disciplinas } = this.state;
        return (

            <Container>
                <div id="entrada">

                   <h1>Buscar disciplinas da UFCG</h1>
                    <input
                        type="text"
                        placeholder="ex. laboratório ..."

                        onChange={e => {
                            if (e.target.value.length >= 3) {
                                this.getDisciplinas(e.target.value);
                            } else {
                                this.setState({ disciplinas: [] })
                            };

                        }}
                    >
                    </input>
                </div>
                <div id="profile-list">
                    
                    {disciplinas.length > 0 && disciplinas.map(disciplina => (
                        
                        <article key={disciplina.id}>   
                            <strong>{disciplina.id}</strong>
                            <p>{disciplina.name}</p>
                        </article>
                    ))}
                    

                </div>
            </Container>
        );

    }

}

export default Search;