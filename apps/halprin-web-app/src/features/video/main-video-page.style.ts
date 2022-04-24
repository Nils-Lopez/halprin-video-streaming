import styled from '@emotion/styled';

export const Ctn = styled.div`
  height: 100%;
  overflow: hidden;
  .ml-15 {
    margin-left: 25px;
    margin-bottom: 10px;
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
  @media only screen and (min-width: 650px) and (max-height: 670px) {
    .video-container {
      max-height: 330px;
    }
  }
  @media only screen and (max-width: 650px) and (min-width: 594px) {
    .video-container {
      width: 92%;
      margin: auto;
      margin-top: -40px;
    }
  }
  @media only screen and (max-width: ) font-family: AGMedium;
  src: url('../../../public/fonts/akzidenz/AkzidenzGrotesk-Medium.otf')
    format('opentype');
`;
