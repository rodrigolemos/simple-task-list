import styled from 'styled-components';

export const MyForm = styled.form`
  width: 80%;
  height: 65%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  .heading-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    font-size: 20px;

    svg {
      color: #4345ED;
    }
  }

  input, button {
    display: block;
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
    margin-bottom: 35px;
    border-radius: 3px;
    border: 1px solid #DDD;
    transition: border-color .2s ease-in-out;

    &:last-child {
      margin-bottom: 200px;
    }

    &:focus {
      border: 1px solid #5456FE;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
    }
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 3px;
    border: none;
    background-color: #5456FE;
    color: #FFF;
    font-weight: bold;
    cursor: pointer;
  }
`;