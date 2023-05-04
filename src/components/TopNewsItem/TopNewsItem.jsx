import React from 'react';

import Default from '../../images/Default.jpg'
import {
    NewsItemBox,
    NewsItem,
    TextAuthor,
    TextDescription,
    TextTitle
} from './TopNewsItem.styled';

export const NewsItems = ({ data }) => {

  return (
    <NewsItemBox>
      {data.urlToImage ? (<NewsItem src={data.urlToImage} alt={data.title} key={data.publishedAt}></NewsItem>) : (<NewsItem src={Default} alt={data.title} key={data.publishedAt}></NewsItem>) }
      <div>
       <TextAuthor>{data.author}</TextAuthor>
       <TextDescription>{data.description}</TextDescription>
       <TextTitle>{data.title}</TextTitle>
      </div>
    </NewsItemBox>
  );
};

