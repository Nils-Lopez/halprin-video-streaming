import styled from '@emotion/styled';

export const Layout = styled.div`
  background: #0e111c;
  color: white;
  height: 100%;
  width: 100%;
  position: fixed;
  overflow-y: hidden;
  overflow-x: hidden;
  .mobile-menu-toggle {
    display: none;
  }
  @media only screen and (max-width: 650px) {
    .mobile-menu-toggle {
      img {
        height: 35px;
      }
      margin-top: 25px;
      display: flex;
      justify-content: center;
    }
  }
  // .top {
  //   positon: fixed;
  //   width: 100%;
  //   display: flex;
  //   justify-content: end;
  //   .helpers {
  //     margin-right: 10px;
  //     margin-top: 10px;
  //     display: flex;
  //     justify-content: space-between;
  //     width: 40px;
  //     .helper {
  //       border-radius: 50%;
  //       background-color: lightgrey;
  //       color: lightgrey;
  //       width: 15px;
  //       height: 15px;
  //     }
  //   }
  // }
  // button {
  //   img {
  //     height: 18px;
  //   }
  // }
`;
