import React, { Component } from 'react';
import Header from '../../components/Header'
import { Container } from "./styles";
import api from "../../services/api";
import { getToken } from "../../services/auth";


class Ranking extends Component {

    state = {
        ranking: {}
    }

    getPerfis = async () => {
        await api.get("/api/v1/profiles/ranking", { headers: { 'Authorization': "bearer " + getToken } }).then((response) => { this.setState({ ranking: response.data }) })
            .catch((error) => {
                this.setState({ error: error.response.data.message })
            })

    }
    componentDidMount() {

        this.getPerfis();

    }

    render() {

        return (

            <Container>
                <Header></Header>
                <div>
                    <h1>Ranking de Likes</h1>
                    {this.state.ranking.rankingLikes !== undefined && this.state.ranking.rankingLikes.map(disciplina => (

                        <article key={disciplina.id}>
                            <strong>{disciplina.id}</strong>
                            <p>{disciplina.name}</p>
                            <p>{disciplina.num}</p>
                        </article>
                    ))}

                </div>

                <div>
                    <h1>Ranking de Comentários</h1>
                    {this.state.ranking.rankingComments !== undefined && this.state.ranking.rankingComments.map(disciplina => (

                        <article key={disciplina.id}>
                            <strong>{disciplina.id}</strong>
                            <p>{disciplina.name}</p>
                            <p>{disciplina.num}</p>
                        </article>
                    ))}

                </div>
            </Container>
        );

    }

}

export default Ranking;