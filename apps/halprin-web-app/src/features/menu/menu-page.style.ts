import styled from '@emotion/styled';

export const Ctn = styled.div`
  padding: 10%;
  .mobileDesc {
    display: none;
  }
  font-family: AGBold;
  src: url('../../../public/fonts/akzidenz/AkzidenzGrotesk-Bold.otf')
    format('opentype');
  font-size: 14pt;
  @media only screen and (max-width: 600px) {
    .mobileDesc {
      display: block;
      margin-top: 50px;
      width: 80%;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: 500px;
  height: 500px;
  border: 3px solid white;
  z-index: 0;
  position: relative;
  margin: auto;
  padding: 0;
  .topIcon {
    positon: relative;
    height: 200px;
    width: 200px;
    margin-top: -80px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    &:hover {
      filter: brightness(110%);
    }
  }
  .leftIcon {
    positon: relative;
    height: 200px;
    width: 250px;
    margin-left: -120px;
    margin-right: auto;
    margin-top: 5px;
    cursor: pointer;
    &:hover {
      filter: brightness(120%);
    }
  }
  .rightIcon {
    positon: relative;
    height: 140px;
    width: 140px;
    margin-right: -80px;
    margin-top: -35px;
    margin-left: auto;
    cursor: pointer;
    &:hover {
      filter: brightness(140%);
    }
  }
  .bottomIcon {
    position: relative;
    height: 250px;
    width: 270px;
    margin-left: auto;
    margin-top: 50px;
    margin-right: auto;
    cursor: pointer;
    &:hover {
      filter: brightness(140%);
    }
  }
  .centered {
    position: relative;
    margin-right: auto;
    top: -50px;
    left: -90px;
    .logo {
      position: fixed;
      margin-left: auto;
      margin-right: auto;
      height: 220px;
      width: 220px;
      .triangle {
        cursor: pointer;
      }
    }
    .linkDesc {
      position: fixed;
      width: 220px;
      margin-top: 50px;
      text-align: center;
    }
  }
  .midContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }
  .workshopTxt {
    color: pink;
  }
  .roadmapsTxt {
    color: #ffef9f;
    margin-top: -50px;
  }
  .indexTxt {
    color: #ee6055;
  }
  .lifeartTxt {
    color: #a2d2ff;
  }
  @media only screen and (max-width: 600px) {
    height: 300px;
    width: 300px;
    margin-top: 100px;
    .topIcon {
      positon: relative;
      height: 130px;
      width: 130px;
      margin-top: -50px;
      margin-left: auto;
      margin-right: auto;
      cursor: pointer;
    }
    .leftIcon {
      positon: relative;
      height: 130px;
      width: 180px;
      margin-left: -90px;
      margin-right: auto;
      cursor: pointer;
    }
    .midContainer {
      display: flex;
      justify-content: space-between;
      margin-top: 13px;
    }
    .centered {
      position: relative;
      margin-right: auto;
      top: -20px;
      left: -70px;
      .logo {
        position: fixed;
        margin-left: auto;
        margin-right: auto;
        height: 150px;
        width: 150px;
        .triangle {
          cursor: pointer;
        }
      }
      .linkDesc {
        display: none;
      }
    }
    .rightIcon {
      positon: relative;
      height: 110px;
      width: 100px;
      margin-right: -60px;
      margin-top: -26px;
      margin-left: auto;
      cursor: pointer;
    }
    .bottomIcon {
      position: relative;
      height: 180px;
      width: 200px;
      margin-left: auto;
      margin-top: 15px;
      margin-right: auto;
      cursor: pointer;
    }
  }
`;

export const Video = styled.div`
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 5%;
  .video-player {
    margin: auto;
    width: 1100px;
    height: 750px;
  }
  @media only screen and (max-width: 1500px) {
    padding: 2%;
    .video-player {
      width: 1000px;
      height: 690px;
    }
  }
  @media only screen and (max-width: 1100px) {
    padding: 2%;
    .video-player {
      width: 800px;
      height: 550px;
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 2%;
    .video-player {
      width: 600px;
      height: 450px;
    }
  }
  @media only screen and (max-width: 680px) {
    padding: 1%;
    .video-player {
      margin-top: 150px;
      width: 500px;
      height: 350px;
    }
  }
  @media only screen and (max-width: 550px) {
    padding: 1%;
    .video-player {
      margin-top: 150px;
      width: 400px;
      height: 300px;
    }
  }
  .nextBtn {
    cursor: pointer;
    display: flex;
    justify-content: end;
    margin-right: 100px;
    margin-top: -400px;
  }
`;
