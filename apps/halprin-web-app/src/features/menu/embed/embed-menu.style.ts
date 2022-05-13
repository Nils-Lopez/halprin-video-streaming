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
  .topIcon-road {
    positon: relative;
    height: 45px;
    width: 55px;
    margin-top: -15px;
    margin-left: 23px;
    cursor: pointer;
  }
  .topIcon-workshop {  
    positon: relative;
    height: 45px;
    width: 60px;
    margin-top: -13px;
    margin-left: 23px;
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
  .leftIcon-road {
    positon: relative;
    height: 45px;
    width: 55px;
    margin-left: -25px;
    margin-right: auto;
    margin-top: -45px;
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
  .rightIcon-road {
    positon: relative;
    height: 42px;
    width: 42px;
    margin-right: -18px;
    margin-top: -55px;
    margin-left: auto;
    cursor: pointer;
  }
  .rightIcon-workshop {
    position: relative;
    display: block;
    max-height: 10px;
    margin-top: -65px;
    margin-right: -20px;
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
  .bottomIcon-road {
    position: relative;
    height: 45px;
    width: 30px;
    margin-left: auto;
    margin-top: -3px;
    margin-right: auto;
    cursor: pointer;
  }
  .bottomIcon-workshop {
    position: relative;
    height: 45px;
    width: 45px;
    margin-left: auto;
    margin-top: -70px;
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
  .centered-road {
    position: relative;
    margin-right: auto;
    top: -60px;
    left: -17px;
    .logo {
      position: fixed;
      margin-left: auto;
      margin-right: auto;
      height: 45px;
      width: 45px;
      .triangle {
        cursor: pointer;
      }
    }
  }
  .centered-workshop {
    position: relative;
    margin-right: auto;
    top: -70px;
    left: -17px;
    .logo {
      position: fixed;
      margin-left: auto;
      margin-right: auto;
      height: 45px;
      width: 45px;
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
