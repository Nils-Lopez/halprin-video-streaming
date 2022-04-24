import styled from '@emotion/styled';

export const Ctn = styled.div`
  padding: 5px;
  margin-top: 15px;
  width: 60%;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  height: 75%;
  .container {
    height: 90%;
    overflow-y: auto;
  }
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
    .video-container {
      margin-top: -3%;
    }
  }
  @media only screen and (max-width: 650px) {
    .video-container {
      height: 0;
      background: red;
      margin-top: -120px;
    }
    height: 80%;
    width: 96%;
    .container {
      height: 80%;
    }
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
