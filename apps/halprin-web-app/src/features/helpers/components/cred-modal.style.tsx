import styled from '@emotion/styled';

export const Modal = styled.div`
  position: fixed;
  top: -50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  text-align: center;
  .centered {
    border: 0.5px solid white;
    padding: 5px;
    background: black;
    display: inline-block;
    vertical-align: middle;
    max-width: 400px;
    min-height: 150px;
    margin: 10px;
    position: relative;
    z-index: 10000;
    color: white;
    max-height: 60%;
    overflow-y: auto;
    .head {
      height: 50px;
      padding-top: 10px;
      border-bottom: 1px solid black;
    }
    .body  {
      padding-top: 10px;
    }
  }
  h2 {
    font-size: 22px;
  }
  &:before {
    content: '';
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
`;
