import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from './theme/theme';

export interface AppProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      backgroundColor: theme.colors.primaryColor,
      fontFamily: theme.fontProperties.fontFamily,
      scrollBehavior: 'smooth',
    },
  },
}));

const App: React.FC<AppProps> = () => {
  useStyles();
  return <div>hello</div>;
};

export { App };
