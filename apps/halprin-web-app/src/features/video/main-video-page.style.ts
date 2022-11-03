import styled from '@emotion/styled';

export const Ctn = styled.div`
  height: 100%;
  overflow: hidden;
  .ml-15 {
    margin-left: 25px;
    margin-bottom: 10px;
  }
  .navbar {
    margin-top: 10px;
  }
  video-container {
    h1 {
      color: red;
    }
    .loader {
      width: 8vmax;
      height: 8vmax;
      border-right: 4px solid #ffffff;
      border-radius: 100%;
      animation: spinRight 800ms linear infinite;
      margin: auto;
      margin-top: 150px;
      &:before,
      &:after {
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
  }
  @keyframes spinLeft {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(720deg);
    }
  }

  @keyframes spinRight {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  @media only screen and (max-width: 650px) {
    .video-container {
      width: 92%;
      margin: auto;
      margin-top: -100px;
    }
  }
  @media only screen and (max-width: 650px) and (min-width: 483px) {
    .video-container {
      width: 92%;
      margin: auto;
      margin-top: -60px;
    }
  }
  @media only screen and (max-width: 703px) and (min-width: 650px) {
    .video-container {
      width: 92%;
      margin: auto;
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 650px) and (max-height: 740px) {
    width: 100%;
    .video-container {
      width: 80%;
      margin: auto;
    }
  }

  @media only screen and (max-width: 650px) and (min-width: 594px) {
    .video-container {
      width: 92%;
      margin: auto;
      margin-top: -40px;
    }
  }
  @media (min-width: 650px) and (max-height: 730px) {
    .video-container {
      margin-top: -25px;
      max-width: 570px;
    }
  }
  @media (min-width: 650px) and (max-height: 685px) {
    .video-container {
      max-width: 530px;
      margin-top: -35px;
    }
  }
  @media (min-width: 650px) and (max-height: 645px) {
    .video-container {
      max-width: 500px;
      margin-top: -55px;
    }
  }
  @media (min-width: 650px) and (max-height: 620px) {
    .video-container {
      max-width: 470px;
      margin-top: -75px;
    }
  }
  src: url('../../../public/fonts/akzidenz/AkzidenzGrotesk-Medium.otf')
    format('opentype');
`;
