import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';

import { Layout } from "../Layout/Layout";
import { newsApiService } from "API/AxiosCreate";

const HomePage = lazy(() => import('../../pages/Home/Home'));
const UserArticlesPage = lazy(() => import('../../pages/UserArticles/UserArticles'));
const TopNewsPage = lazy(() => import('../../pages/TopNews/TopNews'));

export const App = () => {

  newsApiService();
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/userArticles" element={<UserArticlesPage />} />
        <Route path="/topNews" element={<TopNewsPage />} />
      </Route>
    </Routes>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   <Layout />
    // </div>
  );
};
