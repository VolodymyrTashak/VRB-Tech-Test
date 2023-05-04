import { NewsBox } from '../../components/TopNews/TopNews';
import { Text } from './TopNews.styled';

export const TopNews = () => {
  return (
    <div>
      <Text> Top News</Text>
      <NewsBox />
    </div>
  );
};

export default TopNews;