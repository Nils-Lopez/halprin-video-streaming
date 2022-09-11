import styled from '@emotion/styled';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 11;
  .centered {
    padding: 5px;
    background: #fefae0;
    display: inline-block;
    vertical-align: middle;
    max-width: 400px;
    min-height: 150px;
    margin: 10px;
    color: black;
    .head {
      height: 50px;
      padding-top: 10px;
      border-bottom: 1px solid black;
    }
    .body  {
      padding-top: 10px;
    }
  }
  &:before {
    content: '';
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
`;
