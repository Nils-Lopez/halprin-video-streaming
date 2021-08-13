import styled from '@emotion/styled';

export const Ctn = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  margin: 0;
  background: #fefae0;
  color: black;
  display: flex;
  justify-content: center;
  .langChoose {
    margin-top: 20%;
    height: 120px;
    display: flex;
    justify-content: space-around;
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    .langChoose {
      margin-left: auto;
      margin-right: auto;
      display: block;
      margin-top: 40%;
      button {
        text-align: center;
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }
  }
`;

export const Video = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  .video-player {
    height: 900px;
    width: 1200px;
  }
`;

export const SkipLink = styled.div`
  .skipLink {
    float: right;
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
    margin-right: 10px;
    margin-top: 25%;
  }
`;
