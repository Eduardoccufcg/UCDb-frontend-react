import styled from "styled-components";

export const Container = styled.div`
    
    width: 100%;
    height: 70px;
    background: #00507c;
    color:black;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
   
    img{
        height: 70px;
        weight: 50px;
    }
    
    #imagem-header{ 
     
        height: 100%;
        padding: 0;
        display: flex;
        width: 40%; 
        align-items: center;
        
    }
    #menu-header{ 
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 60%;
        
    }
    
    a{
        text-decoration: none;
        margin: 1.0rem;
        padding: 0.5rem
        color: black;
        font-size: 17px;
        cursor:pointer;
    
       
    }
    a:hover{
       color:#ADD8E6
       
       text-decoration: underline #ADD8E6; 
    }

`;


