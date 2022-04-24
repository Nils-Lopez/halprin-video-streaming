import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  .desktop {
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
    .index-topbar {
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
    }
    .video-topbar {
      margin-top: -30px;
      .head {
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
      }
    }
  }
  .mobile {
    display: none;
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
  @media only screen and (max-width: 1520px) and (min-width: 650px) {
    .desktop {
      .video-topbar {
        margin-top: 4%;
      }
    }
  }
  @media only screen and (max-width: 650px) {
    .embed-menu {
      display: none;
    }
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
      .index-topbar {
        margin-top: -70px;
        width: 100%;
        border-top: 1px solid #95a5a6;
        padding-top: 3px;
        display: flex;
        justify-content: center;
      }
      .video-topbar {
        .head {
          color: #95a5a6;
          border-top: 1px solid #95a5a6;
          border-bottom: 1px solid #95a5a6;
        }
        margin-top: -230px;
        background: #0e111c;
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
    }
  }
`;
