import { ButtonBox, Button } from './Button.styled';

export const LoadMore = ({ onClickLoadMore }) => {
  return (
    <ButtonBox>
    <Button onClick={onClickLoadMore}>Load More</Button>
  </ButtonBox>
  );
};