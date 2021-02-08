import { ThemeProvider } from 'react-jss';
import { PasswordProvider } from 'contexts/password';
import { theme } from 'styles/theme';
import Layout from 'views/layout';
import './config/i18n';
import './styles/base.scss';
import './styles/app.scss';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PasswordProvider>
          <Layout />
        </PasswordProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
