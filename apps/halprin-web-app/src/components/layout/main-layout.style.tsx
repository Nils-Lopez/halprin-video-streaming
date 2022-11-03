import styled from '@emotion/styled';

export const Layout = styled.div`
  color: #fff;
  height: 100%;
  width: 100%;
  @font-face {
    font-family: Akizdenz;
    src: url('../../../public/fonts/akizdenz/AkzidenzGrotesk-Regular.otf')
      format('truetype');
  }

  .bg-blue {
    height: 100%;
    width: 100%;
    background: #0e111c;
  }

  position: fixed;
  overflow-y: hidden;
  overflow-x: hidden;
  .authBtn {
    position: absolute;

    top: 15px;
    z-index: 9;
    button {
      margin-left: 15px;
      padding: 4px;
      border: 1px solid white;
      background: #0e111c;
    }
  }
  .helpers {
    font-family: Akizdenz;
    position: fixed;
    width: 100px;
    top: 1%;
    right: 0;
    z-index: 2000;
    @media (max-width: 600px) {
      top: 3%;
      right: -5px;
    }
  }
  .mobile-helpers {
    position: absolute;
    top: 9%;
    left: 70%;
    color: black;
    @media (min-width: 600px) {
      display: none;
    }
  }

  .logo-cd {
    z-index: 110000;
    h3 {
      font-family: Akizdenz;
      margin-top: 10px;
      margin-left: -77px;
      font-size: 16px;
    }
    .dark {
      filter: brightness(60%);
      margin-bottom: -2%;
    }
    .lg {
      width: 40px;
      position: fixed;
      bottom: 6.5%;
      left: 95%;
      cursor: pointer;
      &:hover {
        filter: brightness(80%);
      }
    }

    position: fixed;
    bottom: 3%;
    left: 88.5%;
    width: 100%;
    @media (max-width: 600px) {
      .lg {
        left: 85%;
        bottom: 7%;
      }
      left: 54%;
    }
  }
  nav {
    position: absolute;
    top: -8px;
    z-index: 10;
  }
  #menuToggle {
    font-family: Akizdenz;
    display: block;
    position: relative;
    top: 30px;
    left: 20px;

    z-index: 1000;

    -webkit-user-select: none;
    user-select: none;

    .logoInMenu {
      position: absolute;
      width: 100px;
      top: 5px;
    }
  }

  #menuToggle li {
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: color 0.3s ease;
    border: 1px solid white;
  }
  .menu-background {
    width: 100%;
    height: 100%;
    background: black;
    position: absolute;
    z-index: 10;
    opacity: 60%;
  }
  #menuToggle li:hover {
    color: grey;
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  /*
 * Just a quick hamburger
 */
  #menuToggle .brgr {
    display: block;
    width: 22px;
    height: 2.5px;
    margin-bottom: 3.5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  .bg-beige {
    height: 100%;
    width: 100%;
    background: #fffce5;
    #menuToggle .brgr {
      background: #0e111c;
    }
  }

  #menuToggle .brgr:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle .brgr:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
  #menuToggle input:checked ~ .brgr {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    visibility: hidden;
    margin-top: -15px;
  }

  /*
 * But let's hide the middle one.
 */
  #menuToggle input:checked ~ .brgr:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
 * Ohyeah and the last one should go the other direction
 */
  #menuToggle input:checked ~ .brgr:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  /*
 * Make this absolute positioned
 * at the top left of the screen
 */
  #menu {
    position: absolute;
    width: 220px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    margin-top: 30px;
    background: #0e111c;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px;
    font-size: 20px;
    padding-left: 15px;
    margin-left: -22px;
  }
  #menu .logout-fr {
    color: tomato;
    &:hover {
      color: white;
    }
    margin-left: -20px;
    padding-right: 51px;
    margin-bottom: 22px;
  }
  #menu .logout-en {
    color: tomato;
    &:hover {
      color: white;
    }
    margin-left: -20px;
    padding-right: 69px;
    margin-bottom: 22px;
  }
  .logout-btn {
    background: #c23616;
    padding: 3.5px;
    font-size: 16px;
    color: white;

    &:hover {
      filter: brightness(80%);
    }
  }
  .btn-en {
    margin-left: 50px;
  }
  .btn-fr {
    margin-left: 29px;
  }
  #menu .auth {
    padding-top: 3px;
    margin-top: 5px;
    color: white;
  }
  #menu .auth-login {
    margin-top: 8px;
    margin-bottom: -24px;
  }
  #menu .buy {
    color: tomato;
    &:hover {
      color: white;
    }
  }
  .login-btn {
    background: #009432;
    padding: 3.5px;
    font-size: 16px;
    color: white;

    &:hover {
      filter: brightness(80%);
    }
  }
  .loginbtn-en {
    margin-left: 45px;
  }
  .loginbtn-fr {
    margin-left: 32px;
  }

  /*
 * And let's slide it in from the left
 */
  #menuToggle input:checked ~ ul {
    transform: none;
  }
`;
