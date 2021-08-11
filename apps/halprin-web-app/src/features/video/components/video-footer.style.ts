import styled from '@emotion/styled';

export const Ctn = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 20%;
  padding: 5px;
  .topbar {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    margin-left: 15px;
    margin-right: 15px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .center {
      display: flex;
      justify-content: center;
    }
  }
  .chevron {
    cursor: pointer;
    color: #747d8c;
    margin-left: 10px;
    margin-right: 10px;

  }
  .chevron:hover {
    color: white;
  }
`;
