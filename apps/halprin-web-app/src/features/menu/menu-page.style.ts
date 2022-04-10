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
  @media only screen and (max-width: 650px) {
    display: none;
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
      width: 300px;
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
    .arrow {
      cursor: pointer;
      height: 120px;
      left: 90%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      transition: transform 0.1s;
      width: 70px;

      $transition-time: 0.15s;
      @media only screen and (max-width: 650px) {
        top: 85%;
        left: 53%;
        width: 40px;
      }
      &-top,
      &-bottom {
        background-color: #666;
        height: 4px;
        left: -5px;
        position: absolute;
        top: 50%;
        width: 100%;

        &:after {
          background-color: #fff;
          content: '';
          height: 100%;
          position: absolute;
          top: 0;
          transition: all $transition-time;
        }
      }

      &-top {
        transform: rotate(45deg);
        transform-origin: bottom right;

        &:after {
          left: 100%;
          right: 0;
          transition-delay: 0s;
        }
      }

      &-bottom {
        transform: rotate(-45deg);
        transform-origin: top right;

        &:after {
          left: 0;
          right: 100%;
          transition-delay: $transition-time;
        }
      }

      &:hover & {
        &-top:after {
          left: 0;
          transition-delay: $transition-time;
        }

        &-bottom:after {
          right: 0;
          transition-delay: 0s;
        }
      }

      &:active {
        transform: translateX(-50%) translateY(-50%) scale(0.9);
      }
    }
  }
`;

export const Mobile = styled.div`
  @media only screen and (min-width: 650px) {
    display: none;
  }
  margin-top: -20px;
  .eyeImg {
    height: 70px;
    margin: auto;
  }
  .roundImg {
    width: 95px;
    margin: auto;
  }
  .handImg {
    margin: auto;
    height: 95px;
  }
  .lifeart {
    color: #a2d2ff;
  }
  .roadmaps {
    color: #ffef9f;
  }
  .index {
    color: #ee6055;
  }
  .mouthImg {
    height: 65px;
    margin: auto;
  }
  height: 100%;
  .ctn {
    width: 100%;
    left: 2%;
    right: 2%;
    .workshop {
      color: pink;
    }
    margin-top: 10px;
    margin-bottom: 10px;
    .content {
      margin: auto;
      text-align: center;
      width: 80%;
      padding: 8px;
      .title {
        font-size: 20px;
      }
      .desc {
        font-size: 13px;
        color: white;
      }
    }
  }
`;
