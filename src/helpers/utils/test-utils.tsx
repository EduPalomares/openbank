import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { theme } from '../../styles/theme';

// import { TranslationProvider } from 'my-i18n-lib';
// import defaultStrings from process.env.PUBLIC_URL + 'assets/locales/es/translation.json';

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <TranslationProvider messages={defaultStrings}> */}
      {children}
      {/* </TranslationProvider> */}
    </ThemeProvider>
  );
};

const customRender = (ui: any, options: any) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
