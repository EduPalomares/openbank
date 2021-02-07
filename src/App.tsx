import { ThemeProvider } from 'react-jss';
import { theme } from 'styles/theme';
import Layout from './views/layout';
import './config/i18n';
import './styles/base.scss';
import './styles/app.scss';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default App;
