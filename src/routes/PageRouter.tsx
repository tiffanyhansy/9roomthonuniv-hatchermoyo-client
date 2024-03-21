import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import HFLayout from '@/routes/HFLayout.tsx';
import HLayout from '@/routes/HLayout.tsx';
import DdeepCreate from '@/pages/Ddeep/DdeepCreate.tsx';
import DdeepDetail from '@/pages/Ddeep/DdeepDetail.tsx';
import Message from '@/pages/Message';
import MyPage from '@/pages/MyPage';

const PageRouter = () => {
  return (
    <Routes>
      <Route element={<HFLayout headerVariant={'default'} />}>
        <Route
          path="/"
          element={<Home />}
        />
      </Route>
      <Route
        element={
          <HFLayout
            headerVariant={'back'}
            backPath={'/'}
            headerTitle={'띱 만들기'}
          />
        }>
        <Route
          path={'/ddeep/create'}
          element={<DdeepCreate />}
        />
      </Route>
      <Route
        element={
          <HFLayout
            headerVariant={'back'}
            backPath={'/'}
            headerTitle={'알림'}
          />
        }>
        {/* TODO: 알림 라우트로 변경*/}
        <Route
          path={'/message'}
          element={<Message />}
        />
      </Route>
      <Route
        element={
          <HFLayout
            headerVariant={'back'}
            backPath={'/'}
            headerTitle={'마이페이지'}
          />
        }>
        <Route
          path={'/mypage'}
          element={<MyPage />}
        />
      </Route>
      <Route element={<HLayout />}>
        <Route
          path={'/ddeep/:id'}
          element={<DdeepDetail />}
        />
      </Route>
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  );
};

export default PageRouter;
