import styled from '@emotion/styled';

export const TopBar = styled.div`
  display: flex;
  justify-content: end;
  .dot {
    background-color: grey;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
  }
  .cred {
    margin-right: 10px;
  }
  .small {
    height: 10px;
    width: 10px;
  }
  .large {
    height: 17px;
    width: 17px;
    top: 5px;
    padding-left: 4px;
    padding-top: -5px;
  }
  .right {
    margin-right: 15px;
    margin-top: 5px;
    .large {
      margin-top: 5px;
    }
  }
  strong {
    font-size: 15px;
  }
`;
