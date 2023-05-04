import styled from 'styled-components';

export const NewsGalleryBox = styled.ul`
  display: grid;
  justify-items: center;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 32px;
  }
`;