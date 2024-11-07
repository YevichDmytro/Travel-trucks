// import axios from 'axios';
// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('../Layout/Layout'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const IndividualCamperPage = lazy(
  () => import('../../pages/IndividualCamperPage/IndividualCamperPage')
);

const App = () => {
  // useEffect(() => {
  //   const func = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers'
  //       );
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   func();
  // }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<IndividualCamperPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
