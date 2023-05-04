import styled from 'styled-components';

export const ArticlesList = styled.ul`
display: grid;
justify-items: center;

@media screen and (min-width: 320px) and (max-width: 767px) {
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 42px;
  grid-row-gap: 42px;
}

@media screen and (min-width: 1280px) {
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
`;

export const ArticlesItem = styled.li`
display: grid;
width: 100%;
background-color: rgb(227 227 230);
padding: 0 15px;
  list-style: none;
  border-radius: 5px;
  max-width: 100%;
  transition: cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    border-radius: 5px;
    box-shadow: 2px 4px 22px 0px rgba(99, 87, 99, 0.57);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
      scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.01);
  }
  @media screen and (min-width: 1280px) {
    width: 350px;
  }
`;

export const ArticlesTitle = styled.p`
position: relative;
  width: revert;
  font-style: italic;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.02em;
  margin: 5 0;
  text-align: center;
  color: #565678;
  font-size: 15px;
  text-transform: uppercase;
`;

export const ArticlesDescription = styled.p`
position: relative;
width: revert;
font-style: italic;
font-weight: 400;
line-height: 1.1;
letter-spacing: 0.02em;
margin: 5 0;
text-align: center;
color: #565678;
font-size: 20px;
`;

export const ArticlesBtn = styled.button`
font-size: 18px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 140px;
  cursor: pointer;

  text-decoration: none;
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