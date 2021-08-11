import styled from '@emotion/styled';

export const Ctn = styled.div`
  padding: 5px;
  width: 80%;
  height: 50%;
  margin: auto;
  .center {
    display: flex;
    justify-content: center;
  }
  .slider {
    display: flex;
    justify-content: center;
    overflow-z: auto;
  }
`;

export const Slide = styled.div`
  margin-left: 40px;
  width: 140px;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    .video-title {
      bottom: 10px;
      height: 50px;
      border-top: 2px solid #f1f2f6;
    }
  }
  .video-title {
    position: absolute;
    bottom: 40px;
    height: 30px;
    transition: height 0.3s ease-in-out;
    background-color: #101010;
    width: 140px;
    text-align: center;
    padding-top: 3px;
  }
`;

export const MainSlide = styled.div`
  width: 180px;
  margin-right: 20px;
  scale: 1.1;
  .video-title {
    bottom: 0px;
    height: 30px;
    border-top: 2px solid #f1f2f6;
    background-color: #101010;
    width: 180px;
    text-align: center;
    padding-top: 3px;
    position: absolute;
  }
`;

