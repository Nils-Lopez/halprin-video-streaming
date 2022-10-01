import styled from '@emotion/styled';

export const HomeLayout = styled.div`
  background: #0e111c;
  height: 100%;
  position: fixed;
  width: 100%;
  padding-top: 1.5%;
`;

export const Ctn = styled.div`
  padding: 10%;
  .mobileDesc {
    display: none;
  }
  .centered {
     position: absolute;
top: 45%;
left: 50%;
transform: translate(-50%, -50%);
    width: 250px;
    z-index: 9;
    cursor: pointer;
    @media only screen and (max-height: 970px) {
      top: 47%;
    }
    @media only screen and (max-height: 840px) {
      top: 49%;
    }
    @media only screen and (max-height: 770px) {
      top: 54%;
    }
    @media only screen and (max-height: 700px) {
      top: 60%;
    }
    @media only screen and (max-width: 650px) {
      top: 50%;
    }


    width: 250px;
    z-index: 10;
    cursor: pointer;
    &:hover {
      filter: brightness(70%);
      opacity: 95%;
    }
  }
  font-family: AGBold;
  src: url('../../../public/fonts/akzidenz/AkzidenzGrotesk-Bold.otf')
    format('opentype');
  font-size: 14pt;
  .beginBtn {
    position: absolute;
    left: 20%;
    font-size: 20px;
  }
  .endBtn {
    position: absolute;
    right: 20%;
    font-size: 20px;
  }
  i .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
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
  opacity: 0.65;
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
    
  }
  .leftIcon {
    positon: relative;
    height: 200px;
    width: 250px;
    margin-left: -120px;
    margin-right: auto;
    margin-top: 5px;
  }
  .rightIcon {
    positon: relative;
    height: 140px;
    width: 140px;
    margin-right: -80px;
    margin-top: -35px;
    margin-left: auto;
  }
  .bottomIcon {
    position: relative;
    height: 250px;
    width: 270px;
    margin-left: auto;
    margin-top: 50px;
    margin-right: auto;
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
    visibility: hidden;
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
      width: 450px;
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
  @media only screen and (max-width: 415px) {
    padding: 1%;
    .video-player {
      margin-top: 150px;
      width: 350px;
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
      @media only screen and (max-width: 1310px) {
        top: 85%;
        left: 53%;
        width: 40px;
      }
      @media only screen and (max-width: 1000px) {
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
  @media only screen and (max-width: 650px) {
    visibility: hidden;
  }
`;
