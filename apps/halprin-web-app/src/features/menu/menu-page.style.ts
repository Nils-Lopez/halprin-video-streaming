import styled from '@emotion/styled';

export const Ctn = styled.div`
  padding: 10%;
  .mobileDesc {
    display: none;
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
  }
  .leftIcon {
    positon: relative;
    height: 200px;
    width: 250px;
    margin-left: -120px;
    margin-right: auto;
    margin-top: 5px;
    cursor: pointer;
  }
  .mobileLogo {
    display: none;
  }
  .rightIcon {
    positon: relative;
    height: 140px;
    width: 140px;
    margin-right: -80px;
    margin-top: -35px;
    margin-left: auto;
    cursor: pointer;
  }
  .bottomIcon {
    position: relative;
    height: 250px;
    width: 270px;
    margin-left: auto;
    margin-top: 50px;
    margin-right: auto;
    cursor: pointer;
  }
  .midContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }
  .circleContent {
    width: 250px;
    margin-left: -20px;
    .triangleContent {
      top: 20px;
      position: relative;
      z-index: 100;
      line-height: 30px;
      hr {
        border: 1px solid white;
      }
    }
    .triangle {
      height: 250px;
      position: absolute;
      z-index: -100;
      top: 110px;
      right: 120px;
    }
    .triangleContent {
      width: 110px;
      text-align: center;
      left: 45px;
    }
    .centeredBtn {
      cursor: pointer;
    }
  }
  .workshopTxt {
    color: pink;
  }
  .roadmapsTxt {
    color: #ffef9f;
  }
  .indexTxt {
    color: #ee6055;
  }
  .lifeartTxt {
    color: #a2d2ff;
  }
  .logo {
    margin-top: 50px;
  }
  @media only screen and (max-width: 600px) {
    height: 300px;
    width: 300px;
    margin-top: 100px;
    .topIcon {
      positon: relative;
      height: 130px;
      width: 130px;
      margin-top: -50px;
      margin-left: auto;
      margin-right: auto;
      cursor: pointer;
    }
    .leftIcon {
      positon: relative;
      height: 130px;
      width: 190px;
      margin-left: -90px;
      margin-right: auto;
      cursor: pointer;
    }
    .midContainer {
      display: flex;
      justify-content: space-between;
      margin-top: 13px;
    }
    .circleContent {
      display: none;
    }
    .rightIcon {
      positon: relative;
      height: 110px;
      width: 100px;
      margin-right: -60px;
      margin-top: -26px;
      margin-left: auto;
      cursor: pointer;
    }
    .bottomIcon {
      position: relative;
      height: 180px;
      width: 200px;
      margin-left: auto;
      margin-top: 15px;
      margin-right: auto;
      cursor: pointer;
    }
  }
`;
