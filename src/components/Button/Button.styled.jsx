import styled from 'styled-components';

export const ButtonBox = styled.div`
justify-content: center;
display: flex;
`;

export const Button = styled.button`
display: inline-block;
  text-decoration: none;
  padding: 15px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #565678 inset, 0 0 0 0 #565678;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s else-in-out;
  :hover {
    color: #565678;
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
  }
  &.active {
    color: #565678;
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
  }
`;