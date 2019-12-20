import React, { Component } from 'react';

import { Link, withRouter } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";
import api from "../../services/api";


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

            <div id="search">
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

                <div className="profile-list">
                    {disciplinas.length > 0 && disciplinas.map(disciplina => (
                        <article key={disciplina.id}>

                            <strong>{disciplina.id}</strong>
                            <p>{disciplina.name}</p>

                        </article>

                    ))}


                </div>
            </div>
        );

    }

}

export default Search;