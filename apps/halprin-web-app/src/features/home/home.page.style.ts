import styled from '@emotion/styled';

export const Ctn = styled.div`
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #f7d794;
    color: black;
    display: flex;
    justify-content: center;
    padding-top: 25%;
    padding-bottom: 25%;
    .langChoose {
        height: 120px;
        display: flex;
        justify-content: space-around;
        width: 50%;
    }
`;

export const Video = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    .video-player {
        height: 900px;
        width: 1200px;
    }
`

export const SkipLink = styled.div`
    .skipLink {
        float: right;
        cursor: pointer;
        &:hover {
            scale: 1.1;
        }
        margin-right: 10px;
        margin-top: 25%;
    }
`