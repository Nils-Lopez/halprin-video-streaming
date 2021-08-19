import styled from '@emotion/styled';

export const Ctn = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  min-height: 200px;
  background: black;
  .topBar {
    width: 97%;
    border-top: 1px solid #95a5a6;
    border-bottom: 1px solid #95a5a6;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .left {
      width: 20%;
      margin-left: 5px;
      color: #95a5a6;
    }
    .right {
      width: 20%;
      text-align: right;
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
    .listBtn {
      background: #dcdde1;
      border-radius: 5%;
      margin-right: 5px;
      margin-top: 2px;
      margin-bottom: 2px;
      color: black;
      padding-left: 2px;
      padding-right: 2px;
      &:hover {
        scale: 1.1;
      }
    }
  }
  height: 10%;
`;
