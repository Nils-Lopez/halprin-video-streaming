import styled from '@emotion/styled';

export const Ctn = styled.div`
  @media only screen and (max-width: 1900px) and (min-width: 1790px){
    height: 694.69px;
  }  
  @media only screen and (max-width: 1920px) and (min-height: 900px) {
    height: 620px;
  }
  @media only screen and (max-width: 1920px) and (max-height: 900px) {
    height: 560px;
  }
  @media only screen and (max-width: 1920px) and (max-height: 860px) {
    height: 520px;
  }
  @media only screen and (max-width: 1920px) and (max-height: 830px) {
    height: 480px;
  }
  margin-left: auto;
  margin-right: auto
  margin-top: 0;
  overflow:hidden;
  padding-top: 0;
  iframe {
    margin: auto;
    height: 100%;
  }
  .loader {
    width: 8vmax;
    height: 8vmax;
    border-right: 4px solid #ffffff;
    border-radius: 100%;
    animation: spinRight 800ms linear infinite;
    margin: auto;
    margin-top: 150px;
    &:before, &:after {
      content: '';
      width: 6vmax;
      height: 6vmax;
      display: block;
      position: absolute;
      top: calc(50% - 3vmax);
      left: calc(50% - 3vmax);
      border-left: 3px solid #ffffff;
      border-radius: 100%;
      animation: spinLeft 800ms linear infinite;
    }
    
    &:after {
      width: 4vmax;
      height: 4vmax;
      top: calc(50% - 2vmax);
      left: calc(50% - 2vmax);
      border: 0;
      border-right: 2px solid #ffffff;
      animation: none;
    }
  }

  @keyframes spinLeft {
    from {transform:rotate(0deg);}
    to {transform:rotate(720deg);}
  }

  @keyframes spinRight {
    from {transform:rotate(360deg);}
    to {transform:rotate(0deg);}
  }
`;
