import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import { Form, Container } from "./styles";

import Logo from "../../assets/logo.png";

class SignUp extends Component {

    state = {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    };
    handleSignUp = async e => {
        e.preventDefault();
        const { email, firstName, lastName, password } = this.state;
        if (!email || !firstName || !lastName || !password) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {

            await api.post("/v1/users/", { email, firstName, lastName, password }).then(() => { this.props.history.push("/") })
                .catch((error) => {
                    this.setState({ error: error.response.data.message })
                })
        }


    };
    render() {
        return (
            <Container>

                <Form onSubmit={this.handleSignUp}>
                    <img src={Logo} alt="UCDb logo" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Nome"
                        onChange={e => this.setState({ firstName: e.target.value })}


                    />
                    <input
                        type="text"
                        placeholder="Sobrenome"
                        onChange={e => this.setState({ lastName: e.target.value })}
                    />

                    <input
                        type="text"
                        placeholder="Email"
                        onChange={e => this.setState({ email: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />

                    <button type="submit">Cadastrar</button>
                    <hr />
                    <Link to="/">Fazer login</Link>





                </Form>

            </Container>

        );
    }

}
export default withRouter(SignUp);




