import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const params = 'country=us&pageSize=10&page=';
const API_Key = 'apiKey=85ace8a1aa2b4a2086b7c17eefe532f1';

export const newsApiService = async (
  page,
) => {
  try {
    const res = await axios.get(
      `${BASE_URL}?${params}${page}&${API_Key}`
    );
    console.log(res.data.articles);
    return res.data.articles;
  } catch (error) {
    console.log(error);
  } finally {
    
  }
};
