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
    #profile-list{
        background:#ffffff;
        display: flex;
        width:100%;
        flex-direction: column;
        padding-top: 20px;
        align-items: center;
        justify-content: center;

        
       
    }
    article{
        
        display: flex;
        flex-direction: row;
        width:70%;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        background-color: #fff;
        margin-bottom: 15px;
        padding: 2px 16px;
        transition: 0.3s;  
    }
    strong{
        margin:20px;
    }
    p{
        margin:20px;
    }
  
   
`;
