import React, { useState, useEffect } from 'react';

import { newsApiService } from '../../API/AxiosCreate';
import { NewsItems } from '../TopNewsItem/TopNewsItem';
import { Loader } from '../Loader/Loader';
import { LoadMore } from '../Button/Button';

import { NewsGalleryBox } from './TopNews.styled';

export const NewsBox = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);

  const hideLoader = () => {
    setIsLoader(false);
  };

  const showLoader = () => {
    setIsLoader(true);
  };

  const onClickLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setPage(1);
    setData([]);
    newsApiService(1, hideLoader, showLoader).then(res => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    newsApiService(page, hideLoader, showLoader).then(res => {
      setData(prevData => {
        return [...prevData, ...res];
      });
    });
  }, [page]);

  return (
    <>
      {isLoader && <Loader />}
      <NewsGalleryBox>
        {data.map(item => {
          return <NewsItems data={item}  />;
        })}
      </NewsGalleryBox>
      {data.length > 9 && <LoadMore onClickLoadMore={onClickLoadMore} />}
    </>
  );
};

// Як ключ я використав publishedAt , так як в деяких елементах id відсутній 
