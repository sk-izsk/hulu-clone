import React from 'react';
import { createUseStyles } from 'react-jss';
import { Header } from './components';
import { CustomTheme } from './theme/theme';

export interface AppProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      background: theme.colors.primaryColor,
      fontFamily: theme.fontProperties.fontFamily,
      scrollBehavior: 'smooth',
    },
  },
  app: {
    width: '100vw',
  },
}));

const App: React.FC<AppProps> = () => {
  useStyles();
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
};

export { App };
