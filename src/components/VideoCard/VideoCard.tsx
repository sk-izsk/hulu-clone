import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme/theme';

export interface VideoCardProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  videoCard: {
    width: theme.spacing(62.5),
    height: theme.spacing(50),
    padding: theme.spacing(2.5),
    color: theme.colors.secondaryColor,
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
  title: {
    padding: theme.spacing(1.25),
  },
}));

const VideoCard: React.FC<VideoCardProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.videoCard}>
      <img src='' alt='mvi-logo' />
      <p></p>
      <h2 className={classes.title}></h2>
      <p></p>
    </div>
  );
};

export { VideoCard };
