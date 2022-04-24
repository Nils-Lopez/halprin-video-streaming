import styled from '@emotion/styled';

export const Ctn = styled.div`
  position: fixed;
  width: 100%;
  bottom: 20px;
  height: 200px;
  background: #0e111c;
  .topBar {
    width: 97%;
    border-top: 1px solid #95a5a6;
    border-bottom: 1px solid #95a5a6;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .desktop {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .left {
      width: 20%;
      margin-left: 5px;
      color: #95a5a6;
    }
    .right {
      width: 20%;
      display: flex;
      justify-content: end;
    }
    .center {
      text-align: center;
      display: flex;
      justify-content: center;
    }

    .center-icon {
      cursor: pointer;
      &:hover {
        scale: 1.1;
      }
      margin-left: 3px;
      margin-right: 3px;
    }
    .btn-icon {
      height: 20px;
      margin-top: 3px;
      cursor: pointer;
      margin-left: 5px;
      &:hover {
        filter: brightness(130%);
      }
    }
    .mobile {
      display: none;
    }
  }
  .embed-menu {
    margin-left: 80px;
    margin-top: -130px;
    width: 100px;
    cursor: pointer;
    .toggle {
      margin-left: 20px;
      height: 30px;
      margin-top: 90px;
    }
    position: fixed;
  }
  @media only screen and (max-width: 1200px) {
    min-height: 180px;
    max-height: 180px;
    bottom: 20px;

    .topBar {
      .right {
        width: 40%;
      }
      .left {
        width: 40%;
      }
    }
  }
  @media only screen and (min-width: 950px) and (max-height: 782px) {
    bottom: -25px;
  }
  @media only screen and (min-width: 650px) and (max-height: 729px) {
    position: absolute;
    z-index: -1;
  }
  @media only screen and (max-width: 950px) {
    min-height: 130px;
    max-height: 130px;
  }
  @media only screen and (max-width: 796px) {
    min-height: 200px;
    max-height: 200px;
    .topBar {
      .desktop {
        display: none;
      }
      .mobile {
        display: block;
        width: 100%;
      }
      .center {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .bottom {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
    .embed-menu {
      display: none;
    }
  }
`;
