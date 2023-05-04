import { useDispatch, useSelector } from 'react-redux';

import { deleteArticles } from 'redux/slices/articlesSlice';
import { getFilteredArticles } from 'redux/selectors';

import { ArticlesList, ArticlesItem, ArticlesBtn, ArticlesTitle, ArticlesDescription } from './UserList.styled';

export const UserList = () => {
  const dispatch = useDispatch();
  const formatting = useSelector(getFilteredArticles);

  const onDelete = id => {
    dispatch(deleteArticles(id));
  };

  return (
    <ArticlesList>
      {formatting.map(({ id, title, description }) => (
        <ArticlesItem key={id}>
          <ArticlesTitle>{title}</ArticlesTitle>
          <ArticlesDescription>{description}</ArticlesDescription>
          <ArticlesBtn
            type="button"
            onClick={() => {
              onDelete(id)
            }}
          >
            Delete
          </ArticlesBtn>
        </ArticlesItem>
      ))}
    </ArticlesList>
  );
};