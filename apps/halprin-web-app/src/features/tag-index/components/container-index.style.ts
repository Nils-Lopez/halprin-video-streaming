import styled from '@emotion/styled';

export const Ctn = styled.div`
  overflow-y: scroll;
  padding: 5px;
  margin-top: 15px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  height: 680px;
  .selected {
    color: red;
  }
  .tag {
    cursor: pointer;
    margin: 5px;
  }
  table {
    width: 100%;
    tr {
      width: 100%;
      border-top: 1px solid #95a5a6;
      border-bottom: 1px solid #95a5a6;
    }
  }
  h3 {
    text-align: center;
    font-style: bold;
    font-size: 20px;
    width: 100%;
  }
`;
