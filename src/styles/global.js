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
  }
`;