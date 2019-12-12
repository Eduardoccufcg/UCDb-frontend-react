import React, { Component } from "react";

import { Link } from "react-router-dom";



import { Form, Container } from "./styles";

import Logo from "../../assets/logo.png";

class SignUp extends Component {

    state = {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    }
    handleSignUp = e => {
        e.preventDefault();
        alert("Eu vou te registrar");
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
                        type="text"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />

                    <button type="submit">Cadastrar grátis</button>
                    <hr />
                    <Link to="/">Fazer login</Link>





                </Form>

            </Container>

        );
    }





}

export default SignUp;



