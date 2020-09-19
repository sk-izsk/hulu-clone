import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme/theme';
import { headerIcons } from '../../utils';
import { HeaderIcon } from '../../utils/data';
import { IconText } from '../IconText/IconText';

export interface HeaderProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  header: {
    color: theme.colors.secondaryColor,
    display: 'flex',
    padding: theme.spacing(2.5),
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  headerIcons: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
  },
  huluLogo: {
    objectFit: 'content',
    height: theme.spacing(10),
  },
}));

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.headerIcons}>
        {headerIcons.map((headerIcon: HeaderIcon) => (
          <IconText {...headerIcon} key={headerIcon.text} />
        ))}
      </div>
      <img
        className={classes.huluLogo}
        src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png'
        alt='hulu-icon'
      />
    </div>
  );
};

export { Header };
