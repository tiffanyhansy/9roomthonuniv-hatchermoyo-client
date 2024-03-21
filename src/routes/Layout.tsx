import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={'w-[390px] h-dvh mx-auto border-2 border-hc-blue-light'}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
