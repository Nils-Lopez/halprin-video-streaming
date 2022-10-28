import styled from '@emotion/styled';

export const Ctn = styled.div`
    padding-bottom: 60px;
    top: 80px;
    position: absolute;
    left: 10%;
    height: 90%;
        overflow-y:scroll;
    right: 10%;
    color: #0e111c;
    @media (min-width: 600px) {
        left: 20%;
        right: 20%;
    }
    .txt-img {
        height: 17px;
        display: inline-block;
        &.hand {
            height: 25px;
            margin-top: -4px;
        }
    }
    .jumbo {
        width: 50%;
        display: inline-block;
        float: left;
        margin-right:3px;
    }
    @media only screen and (max-width: 768px) {
        .jumbo { width: 100%; }
        margin:0;
    }
    h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }
    a {
        text-decoration: underline;
        &:hover {
            color: lightgrey;
        }
    }


    .ctn-body {

        p {
            margin-top: 7px;
        }
    }



    h3 { 
        font-size: 18px;
        margin-top 10px;
    }
    ul {
        margin-top: 10px;
        font-size: 13px;
    }

    @media (min-width: 600px) {
        .beginBtn {
            display: inline-block;
            text-align: center;
            position: absolute;
        }
        .endBtn {
            display: inline-block;
            color: blue;
            text-align: center;
            position: absolute;
            bottom: 5vh;
        }
    }
`;
