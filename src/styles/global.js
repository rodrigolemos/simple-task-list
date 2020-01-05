import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    background-color: #7A96FF;
    color: #283346;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    -webkit-font-smoothing: antialiased !important;

    @media only screen and (max-width: 768px) {
      & {
        align-items: flex-start;
        margin-top: 10px;
      }
    }
  }
`;