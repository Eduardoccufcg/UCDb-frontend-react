import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import { Form, Container } from "./styles";

import Logo from "../../assets/logo.png";

class SignIn extends Component {

    state = {
        email: "",
        password: "",
        error:""
    };

    handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {

            await api.post("/v1/login/", { email, password }).then(() => { this.props.history.push("/") })
                .catch((error) => {
                    this.setState({ error: error.response.data.message })
            })
        }


    };


    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignIn}>
                    <img src={Logo} alt="UCDb logo" />
                    {this.state.error && <p>{this.state.error}</p>}
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
                    <button type="submit">Entrar</button>
                    <hr />
                    <Link to="/signup">Criar conta grátis</Link>

                </Form>

            </Container>

        );

    };


}
export default withRouter(SignIn);