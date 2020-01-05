import styled from 'styled-components';

export const MyList = styled.ul`
  .include-enter {
    opacity: 0;
    transform: translateX(-100px);
  }

  .include-enter.include-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 500ms ease-in;
  }

  .include-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .include-leave.include-leave-active {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 500ms ease-in;
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
    cursor: default;

    @media only screen and (max-width: 768px) {
      & {
        display: block;
        width: 100%;
        margin: 10px 0 0;
      }
      &:last-child {
        margin-bottom: 10px;
      }
    }

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

      h2 {
        font-size: 20px;
      }

      span {
        font-size: 12px;
        border-radius: 2px;
        padding: 3px 6px;
        cursor: pointer;
      }
    }

    p {
      padding: 5px;
    }
  }
`;

export const Empty = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64759e;
  opacity: 0.4;
  
  h3 {
    font-size: 40px;
  }

  svg {
    margin-left: 15px;
  }

  @media only screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;