import styled from '@emotion/styled';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 0;
  .video {
    max-width: 850px;
  }
  .menu {
    max-width: 850px;
  }
  .index {
    max-width: 500px;
  }
  .intro {
    max-width: 500px;
  }
  .begin {
    max-width: 600px;
  }
  .ending {
    max-width: 600px;
  }
  .tour {
    max-width: 600px;
  }
  .centered {
    padding: 5px;
    display: inline-block;
    vertical-align: middle;
    .intro {
      max-width: 800px;
      min-height: 150px;
    }
    .tour  {
      max-width: 800px;
      min-height: 150px;
    }
    .index {
      max-width: 800px;
      min-height: 150px;
    }
    .video {
      max-width: 800px;
      min-height: 150px;
    }
    .menu {
      max-width: 800px;
      min-height: 150px;
    }
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
