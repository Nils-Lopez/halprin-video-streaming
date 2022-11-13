import styled from '@emotion/styled';

export const Ctn = styled.div`
  position: fixed;
  width: 100%;
  bottom: 20px;
  height: 200px;
  background: #1D1C22;
  z-index: 10000;
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
      width: 35%;
      margin-left: 5px;
      color: #95a5a6;
      display: flex;
      .favBtn {
        margin-left: 15px;
        &:hover {
          filter: brightness(125);
        }
      }
      .credBtn {
        margin-left: 5px;
        &:hover {
          filter: brightness(125);
        }
      }
    }
    .arrow {
      height: 17px;
      margin-top: 2.3px;
      cursor: pointer;
      z-index: 1000;
    }
    .dir-right {
      margin-right: -5px;
      margin-left: 5px;
    }
    .dir-left {
      margin-right: 5px;
      margin-left: -5px;
    }
    .right {
      width: 35%;
      display: flex;
      justify-content: end;
      .favBtn {
        margin-top: 2.5px;
        height: 20px;
        cursor: pointer;
      }
      .allBtn {
        margin-right: 5px;
        height: 19.5px;
        margin-top: 2px;
        cursor: pointer;
      }
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
    .toggle-road {
      margin-top: 79px;
      margin-left: 34px;

      height: 45px;
      width: 30px;
    }
    .toggle-workshop {
      margin-top: 79px;
      margin-left: 27px;

      height: 45px;
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
  }
  @media only screen and (max-width: 950px) {
    min-height: 130px;
    max-height: 130px;
  }
  @media screen and (min-width: 1024px) {
    .btn-mobile {
      display: none;
    }
  }
  @media only screen and (max-width: 796px) {
    min-height: 200px;
    max-height: 200px;
    .topBar {
      .desktop {
        display: none;
      }
      .mobile {
        .left {
          margin-left: -10px;
        }
        display: flex;
        .allBtn {
          height: 20px;
          margin-top: 2px;
          margin-right: 5px;
        }
        .favBtn {
          height: 21px;
          margin-top: 2px;
        }
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
  @media screen and (max-height: 610px) {
    margin-bottom: -30px;
  
  }
`;
