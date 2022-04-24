import styled from '@emotion/styled';

export const MobileMenu = styled.div`
  .mobile-menu-toggle {
    display: none;
  }
  @media only screen and (max-width: 796px) {
    .mobile-menu-toggle {
      img {
        height: 35px;
      }
      position: relative;
      z-index: 9;
      margin-top: 25px;
      display: flex;
      justify-content: center;
    }
    .mobile-menu {
      .close {
        margin-top: 8px;
        display: flex;
        position: relative;
        z-index: 9;
        justify-content: center;
      }

      .menu {
        width: 90%;
        margin-left: 5%;
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
        position: relative;
        z-index: 9;
      }
      .workshopTxt {
        color: pink;
        opacity: 80%;

        border-bottom: 2px solid pink;
      }
      .roadmapsTxt {
        color: #ffef9f;
        opacity: 80%;

        border-bottom: 2px solid #ffef9f;
      }
      .indexTxt {
        color: #ee6055;
        opacity: 80%;

        border-bottom: 2px solid #ee6055;
      }
      .lifeartTxt {
        color: #a2d2ff;
        opacity: 80%;
        border-bottom: 2px solid #a2d2ff;
      }
      .mdiv {
        height: 20px;
        width: 2px;
        background-color: white;
        transform: rotate(45deg);
        z-index: 1;
      }

      .md {
        height: 20px;
        width: 2px;
        background-color: white;
        transform: rotate(90deg);
        z-index: 2;
      }
    }
  }
`;
