import styled from 'styled-components';

export const MyForm = styled.form`
  width: 80%;
  height: 65%;

  input, button {
    display: block;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 12px;
    margin-bottom: 15px;
    border-radius: 3px;
    border: 1px solid #DDD;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 3px;
    border: none;
    background-color: #5456FE;
    color: #FFF;
    font-weight: bold;
  }
`;