import styled from 'styled-components';

export const MyList = styled.ul`
  .include-enter {
    opacity: 0.01;
  }

  .include-enter.include-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .include-leave {
    opacity: 1;
  }

  .include-leave.include-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  span {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    background-color: #fff;
    width: 45%;
    list-style: none;
    margin: 10px;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 5px;

      svg {
        color: #3CD7D5;
      }
    }

    p {
      padding: 5px;
    }
  }
`;