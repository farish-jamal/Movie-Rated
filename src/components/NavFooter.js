import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: "#fff",
    boxShadow: '-1px -1px 7px rgba(0, 0, 0, 0.493)',
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Trending Now" icon={<TrendingUpIcon />} />
      <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction label="Tv Shows" icon={<TvIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
