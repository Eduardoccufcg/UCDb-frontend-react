import React from 'react';
import { Container } from "./styles";
import Header from '../../components/Header'
import Search from '../../components/Search';

const Main = () => (
    <Container>
        <Header class= "header"></Header>
        <Search></Search>
    </Container>
   
);
export default Main;
