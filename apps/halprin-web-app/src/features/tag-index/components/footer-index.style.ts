import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  @media screen and (min-width: 1024px) {
    .btn-mobile {
      display: none;
    }
  }

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
        .arrow {
          height: 17px;
          margin-top: 2.3px;
          cursor: pointer;
        }
        .dir-right {
          margin-right: -5px;
          margin-left: 5px;
        }
        .dir-left {
          margin-right: 5px;
          margin-left: -5px;
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
        margin-top: 120px;
        width: 100%;
        border-top: 1px solid #95a5a6;
        padding-top: 3px;
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
        justify-content: center;
      }
      .video-topbar {
        .head {
          color: #95a5a6;
          border-top: 1px solid #95a5a6;
          border-bottom: 1px solid #95a5a6;
          .center {
            margin-top: -30px;
            
          }
          .arrow {
            margin-left: 3px;
            margin-right: 3px;
            margin-bottom: -3px;
          }
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
        
        margin-top: -230px;
        background: #1D1C22;
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
