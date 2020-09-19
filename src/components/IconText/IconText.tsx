import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';
import { createUseStyles } from 'react-jss';
import { theme } from '../../theme';
import { CustomTheme } from '../../theme/theme';

export interface IconTextProps {
  Icon: IconType;
  text: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  icon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 'small',
  },
  headerIcon: {
    display: 'flex',
    flexDirection: 'column',
    width: theme.spacing(12.5),
    cursor: 'pointer',
  },
}));

const IconText: React.FC<IconTextProps> = ({ Icon, text }) => {
  const classes = useStyles();
  const [showText, setShowText] = useState<boolean>(false);
  const handleTextVisibility = () => setShowText(!showText);
  return (
    <div onMouseOver={handleTextVisibility} onMouseOut={handleTextVisibility} className={classes.headerIcon}>
      <Icon className={classes.icon} size={theme.spacing(4)} />
      {showText && <p className={classes.text}>{text}</p>}
    </div>
  );
};

export { IconText };
