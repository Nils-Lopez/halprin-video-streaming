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
    height: 55px;
    width: 52px;
    margin-top: -25px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
  }
  .topIcon-road {
    positon: relative;
    height: 45px;
    width: 63px;
    margin-top: -15px;
    margin-left: 19px;
    cursor: pointer;
  }
  .topIcon-workshop {  
    positon: relative;
    height: 45px;
    width: 70px;
    margin-top: -13px;
    margin-left: 16px;
    cursor: pointer;
  }
  .topIcon-lifeart {
    positon: relative;
    width: 43px;
    margin-right: 24px;
    margin-top: -38px;
    margin-left: auto;
    cursor: pointer;   
  }
  .leftIcon {
    positon: relative;
    height: 45px;
    width: 66px;
    margin-left: -30px;
    margin-right: auto;
    margin-top: 0px;
    cursor: pointer;
  }
  .leftIcon-road {
    positon: relative;
    height: 45px;
    width: 65px;
    margin-left: -35px;
    margin-right: auto;
    margin-top: 2px;
    cursor: pointer;
  }
  
  .leftIcon-lifeart {
    positon: relative;
    height: 42px;
    width: 53px;
    margin-left: -25px;
    margin-top: -8px;
    z-index: 10;  
    cursor: pointer;
  }
  .rightIcon {
    positon: relative;
    height: 45px;
    width: 35px;
    margin-right: -18px;
    margin-top: -55px;
    margin-left: auto;
    cursor: pointer;
  }
  .leftIcon-workshop {
    positon: relative;
    width: 60px;
    height: 45px;
    margin-right: -18px;
    margin-top: -3px;
    margin-left: 65px;
    cursor: pointer;
  }
  .rightIcon-road {
    positon: relative;
    height: 55px;
    width: 48px;
    margin-right: -23px;
    margin-top: -52px;
    margin-left: auto;
    cursor: pointer;
  }
  .rightIcon-workshop {
    position: relative;
    display: block;
    height: 45px;
    width: 38px;
    margin-top: -55px;
    margin-left: -12px;
  }
  .rightIcon-lifeart {
    positon: relative;
    height: 45px;
    width: 69px;
    margin-left: 65px;
    margin-right: auto;
    margin-top: -30px;
    cursor: pointer;
  }
  .bottomIcon {
    position: relative;
    height: 45px;
    width: 70px;
    margin-left: auto;
    margin-top: 15px;
    margin-right: auto;
    cursor: pointer;
  }
  .bottomIcon-road {
    position: relative;
    height: 45px;
    width: 35px;
    margin-left: auto;
    margin-top: -7px;
    margin-right: auto;
    cursor: pointer;
  }
  .bottomIcon-workshop {
    position: relative;
    height: 55px;
    width: 52px;
    margin-left: auto;
    margin-top: 10px;
    margin-right: auto;
    cursor: pointer;
  }
  .bottomIcon-lifeart {
    width: 68px;
    position: relative;
    margin-left: 15px;
  }
  .centered {
    position: relative;
    margin-right: auto;
    top: -50px;
    left: 25px;
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
    top: -55px;
    left: 23px;
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
  .centered-workshop {
    position: relative;
    margin-right: auto;
    top: -55px;
    left: 25px;
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
  .centered-lifeart {
    position: relative;
    margin-right: auto;
    top: -40px;
    left: 25px;
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
