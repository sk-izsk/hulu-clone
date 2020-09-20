import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme/theme';

export interface ResultsProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  results: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

const Results: React.FC<ResultsProps> = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  return <div className={classes.results}></div>;
};

export { Results };
