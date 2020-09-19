import React from 'react';
import { ThemeProvider } from 'react-jss';
import { theme } from './theme';

export interface AppProviderProps {}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { AppProvider };
