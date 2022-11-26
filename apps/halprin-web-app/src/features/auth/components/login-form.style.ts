import styled from '@emotion/styled';

export const Container = styled.div`
  .header {
    text-align: center;
    margin-top: 15px;
    h2 {
      font-size: 19px;
      margin-bottom: 10px;
      color: #57606f;
      margin-top: 30px;
    }
    h3 {
      color: #747d8c;
      font-size: 15px;
    }
    a {
      background: #030;
      filter: brightness(125%);
      color: white;
      padding: 7px;
      padding-right: 10px;
      padding-left: 10px;
      font-size: 15px;
      &:hover {
        text-decoration: underline;
      }
      box-shadow: 3px 3px 3px grey;
    }
    p {
      margin-top: 10px;
      color: #747d8c;
      font-size: 15px;
    }
    hr {
      width: 65%;
      margin: auto;
      margin-top: 20px;
    }
  }

  form {
    width: 100%;
    margin-top: -20px;
    .inputs {
      width: 100%;
      margin-left: 5%;
      input {
        width: 90%;
        color: black;
        border-radius: 1px;
        margin: auto;
        height: 35px;
        margin-top: 0;
        margin-bottom: -10px;
        bottom: -20px;
        font-size: 17px;
      }
      label {
        color: #747d8c;
        font-size: 14px;
      }
      .pwd {
        margin-top: 15px;
      }
    }
    .alert {
      margin-top: 20px;
      color: #c0392b;
      margin-left: 5%;
    }
    .btn {
      margin-top: 25px;
      margin-bottom: 15px;

      .sending-btn {
        border: 1px solid white;
        padding: 5px;
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
        background: #2e7d32;
        color: white;
        width: 90%;
        height: 42px;
        &:hover {
          filter: opacity(95%);
        }
      }
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .footer {
    img {
      height: 55px;
      background: black;
      margin: auto;
      margin-top: 35px;
      margin-bottom: 25px;
      cursor: pointer;
    }
  }
`;

export const Loader = styled.div`
  width: 8vmax;
  height: 8vmax;
  border-right: 4px solid black;
  border-radius: 100%;
  animation: spinRight 800ms linear infinite;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 60px;
  &:before,
  &:after {
    content: '';
    width: 6vmax;
    height: 6vmax;
    display: block;
    position: absolute;
    top: calc(50% - 3vmax);
    left: calc(50% - 3vmax);
    border-left: 3px solid black;
    border-radius: 100%;
    animation: spinLeft 800ms linear infinite;
  }

  &:after {
    width: 4vmax;
    height: 4vmax;
    top: calc(50% - 2vmax);
    left: calc(50% - 2vmax);
    border: 0;
    border-right: 2px solid black;
    animation: none;
  }

  @keyframes spinLeft {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(720deg);
    }
  }

  @keyframes spinRight {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
