import styled from '@emotion/styled';

export const Carrousel = styled.div`
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  .carrousel {
    display: flex;
    justify-content: space-between;
  }
  .carrousel-centered {
    display: flex;
    justify-content: center;
  }
  .life-art {
    border-top: 2px solid #a2d2ff;
  }
  .roadmaps {
    border-top: 2px solid #ffef9f;
  }
  .workshops {
    border-top: 2px solid pink;
  }
  .archives {
    border-top: 2px solid #ee6055;
  }
  .slide {
    img {
      width: 150px;
      height: 70px;
      object-fit: cover;
    }
    .video-title {
      width: 150px;
      background: #0e111c;
      transition: height 0.5s ease-in-out;
    }
    min-width: 150px;
    text-align: center;
    cursor: pointer;
    margin-left: 15px;
    margin-right: 15px;
  }
  .slide:hover {
    .video-title {
      position: relative;
      bottom: 30px;
      height: 50px;
      background-color: #0e111c;
      width: 150px;
      text-align: center;
      padding-top: 3px;
    }
  }
  .main {
    min-width: 150px;
    margin-left: 15px;
    margin-right: 15px;
    .video-title {
      max-width: 150px;
      background: black;
      transition: height 0.5s ease-in-out;
    }
    .now-playing {
      font-size: 13px;
      line-height: normal;
    }
    .txt-life-art {
      color: #a2d2ff;
    }
    .txt-roadmaps {
      color: #ffef9f;
    }
    .txt-workshops {
      color: pink;
    }
    .txt-archives {
      color: #ee6055;
    }
  }
  @media only screen and (max-width: 1200px) {
    max-width: 75%;
    .slide {
      img {
        width: 130px;
        height: 60px;
        object-fit: cover;
      }
      .video-title {
        width: 130px;
        background: #0e111c;
        transition: height 0.5s ease-in-out;
      }
      min-width: 130px;
      text-align: center;
      cursor: pointer;
      margin-left: 15px;
      margin-right: 15px;
      &:hover {
        .video-title  {
          width: 130px;
        }
      }
    }
  }
  @media only screen and (max-width: 650px) {
    max-width: 90%;
    margin-top: 30px;
    .slide {
      img {
        width: 150px;
        height: 80px;
        object-fit: cover;
      }
      .video-title {
        width: 150px;
        height: 30px;
        background: #0e111c;
        transition: height 0.5s ease-in-out;
        font-size: 20px;
      }
      min-width: 150px;
      text-align: center;
      cursor: pointer;
      margin-left: 5px;
      margin-right: 5px;
      &:hover {
        .video-title  {
          width: 110px;
        }
      }
    }

    .main {
      margin-right: -20px;
      padding-right: 0px;
      margin-left: 10px;
      min-width: 180px;
      .video-title {
        max-width: 180;
        background: #0e111c;
        transition: height 0.5s ease-in-out;
      }
    }
  }
`;
