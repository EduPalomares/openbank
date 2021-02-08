import { useState } from 'react';
import Help from './Help';
import Steps from './Steps';
import { Router } from 'config/routing';

const Layout = () => {
  const [step] = useState(1);

  return (
    <>
      <div className="layout">
        <div className="inner">
          <Help />
          <Steps steps={3} stepCurrent={step} />
          <Router />
        </div>
      </div>
    </>
  );
};

export default Layout;
