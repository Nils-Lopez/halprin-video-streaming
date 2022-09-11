import styled from '@emotion/styled';

export const Container = styled.div`
  .header {
    text-align: center;
    margin-top: 15px;
  }
  form {
    width: 100%;
    margin-left: 13%;
    .inputs {
      width: 80%;
      input {
        width: 90%;
        color: black;
        border-radius: 3px;
        margin: auto;
      }
      .pwd {
        margin-top: 15px;
      }
    }
    .alert {
      margin-top: 20px;
      color: #c0392b;
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
      }
      width: 71%;
      display: flex;
      justify-content: center;
    }
  }
  .footer {
    text-align: center;
    margin-bottom: 15px;
    padding-top: 15px;
    border-top: 1px solid white;
    a {
      text-decoration: underline;
    }
  }
`;
