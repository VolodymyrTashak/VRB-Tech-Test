import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from 'components/AppBar/AppBar';

import { LayoutBox } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutBox>
        {/* <p>VRB-Tech-Test62626226</p> */}
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};