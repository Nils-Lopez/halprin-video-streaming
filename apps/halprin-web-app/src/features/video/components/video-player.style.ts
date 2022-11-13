import styled from '@emotion/styled';

export const Ctn = styled.div`
  

  @media only screen and (min-width: 1920px) {
    height: 700px;
  }
  .favBtn-index {
    position: absolute;
    margin-left: 51.5%;
    margin-top: 0.3%;
  }
  .credBtn-index {
    position: absolute;
    margin-left: 50.2%;
    margin-top: 0.3%;
  }
  .favBtn-video {
    position: absolute;
    margin-left: 72.5%;
    margin-top: 0.3%;
  }
  .credBtn-video {
    position: absolute;
    margin-left: 71.2%;
    margin-top: 0.3%;
  }
    .previousBtn {
      position: absolute;
      top: 37%;
      left: 15%;
    }
    .nextBtn {
      position: absolute;
      top: 37%;
      right: 15%;
      
    }
    .arrow {
      height: 25px;
    }
    @media screen and (max-width: 1024px) {
      .nextBtn {
        display: none;
      }
      .previousBtn {
        display: none;
      }
    }
  @media only screen and (max-width: 650px) {
     .favBtn-index {
    display:none;
  }
  .credBtn-index {
    display:none;
  }
  .favBtn-video {
    display:none;
  }
  .credBtn-video {
   display:none;
  }
  }
  .login-card {
    width: 50%;
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px;
  margin: auto;
  margin-top: 12%;
  }
  margin-left: auto;
  margin-right: auto
  margin-top: 0;
  overflow:hidden;
  padding-top: 0;
  iframe {
    margin: auto;
    height: 100%;
  }
  .loader {
    width: 8vmax;
    height: 8vmax;
    border-right: 4px solid #ffffff;
    border-radius: 100%;
    animation: spinRight 800ms linear infinite;
    margin: auto;
    margin-top: 150px;
    &:before, &:after {
      content: '';
      width: 6vmax;
      height: 6vmax;
      display: block;
      position: absolute;
      top: calc(50% - 3vmax);
      left: calc(50% - 3vmax);
      border-left: 3px solid #ffffff;
      border-radius: 100%;
      animation: spinLeft 800ms linear infinite;
    }
    
    &:after {
      width: 4vmax;
      height: 4vmax;
      top: calc(50% - 2vmax);
      left: calc(50% - 2vmax);
      border: 0;
      border-right: 2px solid #ffffff;
      animation: none;
    }
  }

  @keyframes spinLeft {
    from {transform:rotate(0deg);}
    to {transform:rotate(720deg);}
  }

  @keyframes spinRight {
    from {transform:rotate(360deg);}
    to {transform:rotate(0deg);}
  }
  @media only screen and (max-width: 1900px) and (min-width: 1790px){
    height: 694.69px;
  }  
  @media only screen and (max-width: 1920px) and (min-height: 900px) {
    height: 620px;
  }
  @media only screen and (max-width: 1920px) and (max-height: 900px) {
    height: 560px;
  }
  @media only screen and (max-width: 1920px) and (max-height: 860px) {
    height: 520px;
  }
  @media only screen and (max-width: 1920px) and (max-height: 830px) {
    height: 480px;
  }
@media only screen and (min-width: 1920px) and (max-height: 830px) {
    margin-top: -35%;
  } 
  .arrow {
      cursor: pointer;
      height: 120px;
      left: 90%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      transition: transform 0.1s;
      width: 45px;
      &:hover {
        filter: brightness(130%);
      }
      $transition-time: 0.15s;
      @media only screen and (max-width: 1310px) {
        top: 85%;
        left: 53%;
        width: 40px;
      }
      @media only screen and (max-width: 1000px) {
        top: 85%;
        left: 53%;
        width: 40px;
      }
      &-top,
      &-bottom {
        background-color: #666;
        height: 4px;
        left: -5px;
        position: absolute;
        top: 50%;
        width: 100%;

        &:after {
          background-color: #fff;
          content: '';
          height: 100%;
          position: absolute;
          top: 0;
          transition: all $transition-time;
        }
      }

      &-top {
        transform: rotate(45deg);
        transform-origin: bottom right;

        &:after {
          left: 100%;
          right: 0;
          transition-delay: 0s;
        }
      }

      &-bottom {
        transform: rotate(-45deg);
        transform-origin: top right;

        &:after {
          left: 0;
          right: 100%;
          transition-delay: $transition-time;
        }
      }

      &:hover & {
        &-top:after {
          left: 0;
          transition-delay: $transition-time;
        }

        &-bottom:after {
          right: 0;
          transition-delay: 0s;
        }
      }

      
    }
    .previous-arrow {
      transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      margin-top: -58px;
    }
    @media screen and (max-height: 610px) {
          margin-top: -150px;
          
        }
`;
