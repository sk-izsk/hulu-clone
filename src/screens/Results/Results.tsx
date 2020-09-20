import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import { createUseStyles } from 'react-jss';
import { VideoCard } from '..';
import { fetchData } from '../../api';
import { CustomTheme } from '../../theme/theme';

export interface ResultsProps {
  selectedOption: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  results: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

const Results: React.FC<ResultsProps> = ({ selectedOption }) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchData(selectedOption).then((req) => {
      setMovies(req?.data.results);
      return req;
    });
  }, [selectedOption]);

  return (
    <div className={classes.results}>
      <FlipMove appearAnimation='fade' className={classes.results}>
        {movies.map((movie: any, index: number) => (
          <VideoCard key={index} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export { Results };
