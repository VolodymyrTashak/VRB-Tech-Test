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
        {data.author ? (<TextAuthor>{data.author}</TextAuthor>) : (<TextAuthor>"No author"</TextAuthor>)}
        {data.description ? (<TextDescription>{data.description}</TextDescription>) : (<TextDescription>"No description"</TextDescription>)}
        {data.title ? (<TextTitle>{data.title}</TextTitle>) : (<TextTitle>"No title"</TextTitle>)}
      </div>
    </NewsItemBox>
  );
};

// Як ключ я використав publishedAt , так як в деяких елементах id відсутній 
