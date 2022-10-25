import styled from '@emotion/styled';

export const Layout = styled.div`
  
  color: #fff;
  height: 100%;
  width: 100%;
  .bg-blue {
    height: 100%;
    width: 100%;
    background: #0e111c;
  }
  .bg-beige {
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
    position: fixed;
    width: 100px;
    top: 1%;
    right: 0;
    @media (max-width: 600px) {
      display:none;
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
    
    h3 {
      margin-top: 10px;
      margin-left: -75px;
      font-size: 17px;
    }
    .lg {
      width: 80px;
      cursor: pointer;
      &:hover {
        filter: brightness(80%);
      }
    }

    position: fixed;
    bottom: 3%;
    left: 48%;
    width: 100%;
  }
  nav {
    position: absolute;
    top: -8px;
    z-index: 10;
  }
  #menuToggle {
    display: block;
    position: relative;
    top: 30px;
    left: 30px;

    z-index: 1;

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
    color: #232323;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  #menuToggle li:hover {
    color: tomato;
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
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
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
    background: #232323;
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
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;

    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px 0;
    font-size: 22px;
  }
  #menu .logout {
    color: tomato;
    &:hover {
      color: black;
    }
  }
  #menu .auth {
    border-top: 2px solid lightgrey;
    padding-top: 3px;
    margin-top: 3px;
  }
  #menu .buy {
    color: tomato;
    &:hover {
      color: black;
    }
  }

  .logoBtn {
    width: 80px;
    margin: auto;
    position: absolute;
    a { 
      display: flex;
      justify-content: center;
      align-item: center;

    }
    left: 39%;


    .helpers-mobile {
      display: none;
    }
  }
  /*
 * And let's slide it in from the left
 */
  #menuToggle input:checked ~ ul {
    transform: none;
  }



  @media (max-width: 600px) {
    .logo-cd {
      display: none;
    }
  }
  @media (min-width: 600px) {
    br {
      display: none;
    }
    .logoBtn {
      display: none;
    }
  }
`;

