import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { searchUsers } from '../utils/api';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    error: {
      marginTop: 10,
      color: 'red',
    },
  })
);

export default function Searchbar({ setUsers }) {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setSearchKey(e.target.value);
    setError('');
  };

  const onKeyPress = async (e) => {
    if (e.key === 'Enter') {
      await performSearch();
    }
  };

  const performSearch = async () => {
    const validSearchKey = searchKey.trim();
    if (validSearchKey) {
      const users = await searchUsers(validSearchKey);
      if (users === false) {
        setError('Something went wrong. Try again later!');
        return;
      }
      if (users && users.items && users.items.length) {
        setUsers(users.items);
        setError('');
      }
    }
  };

  return (
    <div data-testid="searchbar-root">
      <Paper component="div" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Github Users"
          inputProps={{ 'aria-label': 'search github users' }}
          onChange={handleChange}
          value={searchKey}
          onKeyPress={onKeyPress}
        />
        <Divider
          className={classes.divider}
          orientation="vertical"
          data-testid="searchbar-divider"
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={performSearch}
          data-testid="searchbar-button"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
}
