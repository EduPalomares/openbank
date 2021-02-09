import { usePassword } from 'contexts/password';
import Help from './Help';
import Steps from './Steps';
import { Router } from 'config/routing';

const Layout = () => {
  const [state]: any = usePassword();

  return (
    <>
      <div className="layout">
        <div className="inner">
          <Help />
          <Steps steps={3} stepCurrent={state.step} />
          <Router />
        </div>
      </div>
    </>
  );
};

export default Layout;
