import React, { forwardRef } from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import TextTruncate from 'react-text-truncate';
import { imageURL } from '../../api';
import { CustomTheme } from '../../theme/theme';

export interface VideoCardProps {
  movie?: any;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  videoCard: {
    width: theme.spacing(62.5),
    height: theme.spacing(50),
    padding: theme.spacing(2.5),
    color: theme.colors.secondaryColor,
    cursor: 'pointer',
    transition: 'transform 100m ease-out',
    '&:hover': {
      transform: 'scale(1.09)',
    },
  },
  videoImg: {
    height: theme.spacing(37.5),
    objectFit: 'contain',
    width: theme.spacing(62.5),
  },
  title: {},
  videoCardStats: {},
  movieDetails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const VideoCard: React.FC<VideoCardProps> = forwardRef(({ movie }, ref?: any) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.videoCard}>
      <img src={`${imageURL}${movie.backdrop_path || movie.poster_path}`} alt='mvi-logo' />
      <TextTruncate line={1} element='p' truncateText='...' text={movie.overview} />
      {movie.release_date || movie.first_air_date}
      <div className={classes.movieDetails}>
        <h2 className={classes.title}>{movie.title || movie.original_name}</h2>
        <p className={classes.videoCardStats}>
          {movie.media_type && `${movie.media_type}`}
          <FiThumbsUp />
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
});

export { VideoCard };
