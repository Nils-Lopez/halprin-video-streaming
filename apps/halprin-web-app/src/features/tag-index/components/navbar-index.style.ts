import styled from '@emotion/styled';

export const Ctn = styled.div`
  margin: auto;
  margin-top: 15px;
  width: 98%;
  border-top: 1px solid #95a5a6;
  border-bottom: 1px solid #95a5a6;
  display: flex;
  .indexTitle {
    font-size: 12px;
    color: #95a5a6;
  }
  .nav {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    width: 58%;
  }
  .alphabetNav {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  .link {
    color: #95a5a6;
    padding: 3px;
    &:hover {
      color: white;
    }
    cursor: pointer;
  }
`;
