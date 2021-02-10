import { Suspense } from 'react';
import { usePassword } from 'contexts/password';
import Help from './Help';
import Steps from './Steps';
import { Router } from 'config/routing';
import { BrowserRouter } from 'react-router-dom';
import { baseURL } from 'config/config';

const Layout = () => {
  const [state]: any = usePassword();

  return (
    <>
      <div className="layout">
        <div className="inner">
          <Help />
          <Steps steps={3} stepCurrent={state.step} />
          <Suspense fallback="">
            <BrowserRouter basename={baseURL}>
              <Router />
            </BrowserRouter>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Layout;
