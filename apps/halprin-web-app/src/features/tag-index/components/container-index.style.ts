import styled from '@emotion/styled';

export const Ctn = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px;
  margin-top: 15px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  height: 70%;
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
      width: 100%;
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
    }
  }

  .letterTitle {
    font-size: 20px;
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
`;
