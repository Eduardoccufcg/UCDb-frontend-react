import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;

    #entrada{
        flex-direction: column;
        display: flex;
        height: 250px
        align-items: center;
        justify-content: center;
        background:#00507c;
    }
    h1{
        color: #ffffff;
        padding-bottom:20px;
    }
    input{ 
        width:40%;
    
        height:35px;
        border:1px solid #000000;
        border-radius:5px;

    }
   
`;
