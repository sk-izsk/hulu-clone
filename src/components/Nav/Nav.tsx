import React from 'react';
import { createUseStyles } from 'react-jss';
import { endpoints } from '../../api';
import { CustomTheme } from '../../theme/theme';
import { navBarData } from '../../utils';
import { NavBarData } from '../../utils/data';

export interface NavProps {
  setSelectedOption: any;
}

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

const Nav: React.FC<NavProps> = ({ setSelectedOption }) => {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      {navBarData.map((navData: NavBarData) => (
        <h2
          className={classes.navItem}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            //@ts-ignore
            setSelectedOption(endpoints[`${navData.id}`]);
          }}
          key={navData.name}
        >
          {navData.name}
        </h2>
      ))}
    </div>
  );
};
export { Nav };
