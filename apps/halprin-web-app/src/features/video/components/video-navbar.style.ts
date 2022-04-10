import styled from '@emotion/styled';

export const Ctn = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
  height: 70px;
  svg {
    color: lightgrey;
  }
  svg:hover {
    cursor: pointer;
    color: white;
  }
  .row {
    width: 100%;
    border-top: 1px solid #95a5a6;
    display: flex;
    justify-content: center;
    padding-right: 10px;
    overflow-x: auto;
    padding-left: 10px;
    .show {
      width: 90%;
      display: flex;
      justify-content: space-between;
    }
    .hide {
      display: none;
    }
  }
  .unique-row {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #95a5a6;
    padding-left: 10%;
    padding-right: 10%;
  }

  .hiddenMenu {
    width: 100%;
    border-top: 1px solid #95a5a6;
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
    @media only screen and (max-width: 650px) {
      margin-left: 10px;
      position: relative;
      z-index: 9;
    }
  }
  a {
    color: lightgrey;
    &:hover {
      color: white;
    }
  }
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const MobileCtn = styled.div`
  @media only screen and (min-width: 650px) {
    display: none;
  }
  width: 100%;
  padding-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
  height: 70px;
  .hiddenMenu {
    width: 100%;
    border-top: 1px solid #95a5a6;
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
    margin-left: 10px;
    position: relative;
    z-index: 9;
  }

  .row {
    border-top: 1px solid #95a5a6;

    display: flex;
    justify-content: space-between;
    height: 30px;
    overflow-x: auto;
    a {
      color: lightgrey;
      margin-left: 10px;
      margin-right: 10px;
      padding: 0;
      position: relative;
      z-index: 9;
      &:hover {
        color: white;
      }
    }
  }
`;
