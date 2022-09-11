import styled from '@emotion/styled';

export const Ctn = styled.div`
  margin: auto;
  margin-top: 15px;
  width: 98%;
  border-top: 1px solid #95a5a6;
  border-bottom: 1px solid #95a5a6;
  display: flex;
  .indexTitle {
    font-size: 12px;
    color: #95a5a6;
  }
  .nav {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    width: 58%;
  }
  .alphabetNav {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  .link {
    color: #95a5a6;
    padding: 3px;
    &:hover {
      color: white;
    }
    cursor: pointer;
  }
  .mobile {
    display: none;
  }
  .desktop {
    width: 100%;
  }
  @media only screen and (max-width: 900px) {
    .mobile {
      display: block;
      .top {
        width: 100%;
        display: block;
        .top-left {
          font-size: 12px;
          color: #95a5a6;
          float: left;
        }
        .top-right {
          float: right;
        }
      }

      width: 100%;
      .nav-mobile {
        width: 100%;
        display: flex;
        justify-content: center;
        .alphabetNav-mobile {
          margin: auto;
          width: 80%;
          .alphabetlinksmobile {
            width: 100%;
            display: flex;
            justify-content: space-around;
            overflow-x: auto;
            padding-left: 170px;
          }
        }
      }
    }
    .desktop {
      display: none;
    }
  }
`;
