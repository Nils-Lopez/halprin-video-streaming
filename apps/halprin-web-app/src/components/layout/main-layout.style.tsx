import styled from '@emotion/styled';

export const Layout = styled.div`
  background: #0e111c;
  color: white;
  height: 100%;
  width: 100%;
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
    position: absolute;
    left: 5040%;
    top: 115%;
  }
  .logo-cd {
    position: absolute;
    left: 2633%;
    top: 3500%;
    width: 65px;
    cursor: pointer;
    &:hover {
      filter: brightness(80%);
    }
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
  #menuToggle span {
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

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  /*
 * But let's hide the middle one.
 */
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
 * Ohyeah and the last one should go the other direction
 */
  #menuToggle input:checked ~ span:nth-last-child(2) {
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

  /*
 * And let's slide it in from the left
 */
  #menuToggle input:checked ~ ul {
    transform: none;
  }
`;
