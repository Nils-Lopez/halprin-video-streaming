import styled from '@emotion/styled';

export const Ctn = styled.div`
  padding: 5px;
  margin-top: 15px;
  width: 60%;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  height: 70%;
  overflow-y: auto;
  .selected {
    color: red;
    &:hover {
      color: red;
    }
  }
  .tag {
    cursor: pointer;
    margin: 5px;
  }

  table {
    width: 100%;
    tr {
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
    }
    .desktop {
      width: 100%;
    }
  }
  .letterTitle {
    text-align: center;
    th {
      margin: auto;
    }
  }
  td  {
    cursor: pointer;
    &:hover {
      color: grey;
    }
  }
  .mobile {
    display: none;
  }
  @media only screen and (max-width: 1520px) {
    height: 60%;
  }
  @media only screen and (max-width: 650px) {
    width: 95%;
    margin-top: -100px;
    .mobile {
      display: block;
      width: 100%;
      tr {
        width: 100%;
        td {
          width: 100%;
        }
      }
    }
    .desktop {
      display: none;
    }
  }
`;
