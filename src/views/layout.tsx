import { useState } from 'react';
import Help from './Help';
import Steps from './Steps';

const Layout = () => {
  const [step] = useState(1);

  return (
    <>
      <main className="layout">
        <div className="inner">
          <Help />
          <Steps steps={3} stepCurrent={step} />
        </div>
      </main>
    </>
  );
};

export default Layout;
