import styled from '@emotion/styled';

export const Carrousel = styled.div`
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  overflow: scroll;

  .carrousel {
    display: flex;
    justify-content: space-between;
  }
  .carrousel-centered {
    display: flex;
    justify-content: center;
  }
  .slide {
    img {
      width: 150px;
      height: 70px;
      object-fit: cover;
    }
    .video-title {
      width: 150px;
      border-top: 2px solid pink;
      background: black;
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
      background-color: black;
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
      border-top: 2px solid pink;
      background: black;
      transition: height 0.5s ease-in-out;
    }
    .now-playing {
      color: pink;
      font-size: 13px;
      line-height: normal;
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
        border-top: 2px solid pink;
        background: black;
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
    .slide {
      img {
        width: 110px;
        height: 50px;
        object-fit: cover;
      }
      .video-title {
        width: 110px;
        border-top: 2px solid pink;
        background: black;
        transition: height 0.5s ease-in-out;
        font-size: 10px;
      }
      min-width: 110px;
      text-align: center;
      cursor: pointer;
      margin-left: 10px;
      margin-right: 10px;
      &:hover {
        .video-title  {
          width: 110px;
        }
      }
    }
  }
`;
