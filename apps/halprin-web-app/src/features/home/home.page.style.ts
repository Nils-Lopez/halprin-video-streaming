import styled from '@emotion/styled';

export const Ctn = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  margin: 0;
  background: #fefae0;
  color: black;
  .langChoose {
    margin-top: 15%;
    height: 120px;
    display: flex;
    justify-content: space-around;
    position: relative;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  .leftBtn {
    &:hover {
      scale: 1.1;
    }
  }
  .rightBtn {
    &:hover {
      scale: 1.1;
    }
  }
  .triangle {
    height: 250px;
    width: 250px;
  }
  @media only screen and (min-width: 650px) and (max-width: 1000px) {
    .langChoose {
      width: 70%;
      display: flex;
      justify-content: space-between;
    }
    .triangle {
      height: 200px;
      width: 200px;
    }
  }
  @media only screen and (max-width: 650px) {
    .langChoose {
      margin-left: auto;
      margin-right: auto;
      display: block;
      .rightBtn {
        margin-top: 70%;
      }
      margin-top: 15%;
    }
    .triangle {
      height: 100%;
      width: 100%;
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
    .video-player {
      margin-top: 150px;
      width: 95%;
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
