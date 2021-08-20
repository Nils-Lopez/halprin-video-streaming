import styled from '@emotion/styled';

export const Ctn = styled.div`
  margin-left: auto;

  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .video-player {
    width: 1000px;
    height: 630px;
  }
  @media only screen and (max-width: 1520px) {
    padding: 0;
    margin: 0;
    .video-player {
      width: 700px;
      height: 450px;
    }
  }
  @media only screen and (max-width: 650px) {
    .video-player {
      height: 350px;
      width: 400px;
    }
  }
`;
