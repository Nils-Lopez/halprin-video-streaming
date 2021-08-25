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
  @media only screen and (min-width: 600px) and (max-width: 1000px) {
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
  @media only screen and (max-width: 600px) {
    .langChoose {
      margin-left: auto;
      margin-right: auto;
      display: block;
      margin-top: 10%;
    }
    .triangle {
      height: 200px;
      width: 200px;
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
    margin: auto;
    border: 1px solid white;
    display: block;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    padding: 5px;
    padding-left: 10px;
    .arrow {
      width: 25px;
      height: 25px;
    }
    &:hover {
      scale: 1.1;
    }
  }
`;
