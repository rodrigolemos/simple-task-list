import styled from 'styled-components';

export const Container = styled.div`
  background-color: #EAEFFB;
  height: 85vh;
  width: 80vw;
  border-radius: 5px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, .1);
  display: flex;

  @media only screen and (max-width: 768px) {
    & {
      display: block;
      height: 50vh;
      min-height: 370px;
      width: 90vw;
    }
  }

  aside {
    background-color: #FFF;
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 768px) {
      & {
        display: block;
        width: 100%;
      }
    }
  }

  main {
    width: 65%;
    height: 100%;

    @media only screen and (max-width: 768px) {
      & {
        display: block;
        width: 100%;
      }
    }
  }
`;