import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.js';

import { fetchAllCampers } from '../redux/operations.js';
import { AppDispatch } from '../redux/store.js';

const Layout = lazy(() => import('./Layout.js'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage.js'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.js'));
const MoreInfoPage = lazy(
  () => import('../pages/MoreInfoPage/MoreInfoPage.js')
);

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/campers' element={<CatalogPage />} />
          <Route path='/campers/:id' element={<MoreInfoPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
