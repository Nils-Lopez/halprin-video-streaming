import styled from '@emotion/styled';

export const Circle = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 1px solid white;
  z-index: 0;
  position: relative;
  margin-bottom: 20px;
  padding: 0;
  .topIcon {
    positon: relative;
    height: 45px;
    width: 45px;
    margin-top: -25px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
  }
  .leftIcon {
    positon: relative;
    height: 45px;
    width: 55px;
    margin-left: -25px;
    margin-right: auto;
    margin-top: -35px;
    cursor: pointer;
  }
  .rightIcon {
    positon: relative;
    height: 45px;
    width: 30px;
    margin-right: -18px;
    margin-top: -45px;
    margin-left: auto;
    cursor: pointer;
  }
  .bottomIcon {
    position: relative;
    height: 45px;
    width: 65px;
    margin-left: auto;
    margin-top: 5px;
    margin-right: auto;
    cursor: pointer;
  }
  .centered {
    position: relative;
    margin-right: auto;
    top: -50px;
    left: -22px;
    .logo {
      position: fixed;
      margin-left: auto;
      margin-right: auto;
      height: 50px;
      width: 50px;
      .triangle {
        cursor: pointer;
      }
    }
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

  }
`;
