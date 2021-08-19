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
`;
