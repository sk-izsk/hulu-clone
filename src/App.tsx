import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { endpoints } from './api';
import { Header, Nav } from './components';
import { Results } from './screens';
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
  const [selectedOption, setSelectedOption] = useState<string>(endpoints.trending);
  useStyles();
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
};

export { App };
