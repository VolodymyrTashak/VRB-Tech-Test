import styled from 'styled-components';

export const NewsItemBox = styled.li`
max-width: 100%;
`;

export const NewsItem = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const TextAuthor = styled.p`
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

export const TextDescription = styled.p`
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

export const TextTitle = styled.p`
  position: relative;
  width: revert;
  font-style: italic;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.02em;
  margin: 5 0;
  text-align: center;
  color: #565678;
  font-size: 15px;
`;