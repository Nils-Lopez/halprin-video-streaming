import styled from '@emotion/styled';

export const Ctn = styled.div`
    position: absolute;
    left: 20%;
    height: 90%;
        overflow-y:scroll;
    right: 20%;
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
`;
