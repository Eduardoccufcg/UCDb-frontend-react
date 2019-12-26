import React,{Component} from 'react';
import Header from '../../components/Header'
import {Container } from "./styles";
import api from "../../services/api";
import {getToken} from "../../services/auth";


class Ranking extends Component {

    state = {
        ranking:{}
    }

    getPerfis = async () => {
        await api.get("/api/v1/profiles/ranking",{headers: {'Authorization': "bearer " + getToken}}).then((response) => { this.setState({ ranking: response.data }) })
            .catch((error) => {
                this.setState({ error: error.response.data.message })
            })
        console.log(this.state.ranking)
    }
    componentDidMount(){

        this.getPerfis();

    }  

    render() {

        return (

            <Container>
               <Header></Header>
            </Container>
        );

    }

}

export default Ranking;