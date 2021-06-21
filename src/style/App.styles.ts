import styled, { createGlobalStyle } from "styled-components";
import Bg from "../assets/img/bc.jpg";

export const GlobalStyle = createGlobalStyle`

    html{
        height: 100%;
    }

    body{
        background-image: url(${Bg});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        position: relative;
        color: #fff;
        z-index: -2;
    }
    .quiz{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        min-height: 100vh;
        z-index: 9;
        background-color: #00000089;
    }
    

    *{ 
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }


`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .quiz__score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  .quiz__title {
    font-family: FasCinate Impact, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-size: 100%;
    background-clip: text;
    color: #fff;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
`;
