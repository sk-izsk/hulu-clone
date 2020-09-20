import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme/theme';
import { navBarData } from '../../utils';

export interface NavProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  nav: {
    display: 'flex',
    color: theme.colors.secondaryColor,
    overflowX: 'auto',
    padding: theme.spacing(1.25),
    paddingLeft: theme.spacing(5),
  },
  navItem: {
    cursor: 'pointer',
    marginLeft: theme.spacing(3.75),
    marginRight: theme.spacing(3.75),
    fontWeight: 500,
    opacity: 0.7,
    transition: 'transform 50ms ease-out',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.2)',
    },
  },
}));

const Nav: React.FC<NavProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      {navBarData.map((navData: string) => (
        <h2 className={classes.navItem} key={navData}>
          {navData}
        </h2>
      ))}
    </div>
  );
};
export { Nav };
