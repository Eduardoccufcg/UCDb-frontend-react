import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background: #00507c;
    font-size: 18px;
    font-weight: bold;
    color:black;
    display: flex;
    flex-direction: row;
   
    img{
        height: 50px;
        weight: 50px;
    }
    
    #imagem-header{ 
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        width: 30%; 
        align-items: center;
        background-color: black;
    }
    #menu-header{ 
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: red;
        width: 70%;
        
    }
    
    a{
        text-decoration: none;
        padding: 7px;
        color: #ffffff;
        background: chartreuse;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        cursor:pointer;
    }
`;


