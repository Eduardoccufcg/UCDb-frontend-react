import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;

    #info{
        height:100px;
        background-color:black;
    }

    #rankings{
        display:flex;
        flex-direction: row;
    }
    #ranking-comment{
        display:flex;
        flex-direction: column;
        width: 50%;
    }
    #ranking-likes{
        display:flex;
        flex-direction: column;
        width: 50%;
    }
    hr{
        width: 80%;
        align-self: center; 
    }
    h1{
       text-align: center;
    }
   
  
   
`;
