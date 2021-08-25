import styled from '@emotion/styled';

export const Ctn = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
  height: 70px;
  .row {
    width: 100%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-around;
    padding-right: 10px;
    padding-left: 10px;
  }
  .hiddenMenu {
    width: 100%;
    border-top: 1px solid white;
  }
  button {
    border: none;
    &:hover {
      background: none;
    }
    .showMenu {
      height: 35px;
      &:hover {
        filter: opacity(80%);
      }
    }
    margin-left: 75px;
  }
`;
