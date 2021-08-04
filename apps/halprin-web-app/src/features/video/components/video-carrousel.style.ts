import styled from '@emotion/styled';

export const Ctn = styled.div`
  padding: 5px;
  border: 1px solid black;
  width: 80%;
  height: 150px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Slide = styled.div`
  width: 300px;
  img {
    object-fit: cover;
  }
  h5 {
    color: white;
    font-size: 2em;
    position: absolute;
  }
`;
