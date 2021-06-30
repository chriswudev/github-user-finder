import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Searchbar from './components/Searchbar';
import UserTable from './components/UserTable';
import './App.css';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(8),
    },
    rowItem: {
      padding: theme.spacing(4),
      display: 'flex',
      justifyContent: 'center',
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  return (
    <div className="App" data-testid="app-root">
      <Container className={classes.container} maxWidth="md" data-testid="app-container">
        <div className={classes.rowItem} data-testid="row-item">
          <Searchbar setUsers={setUsers} />
        </div>
        <div className={classes.rowItem} data-testid="row-item">
          <UserTable users={users} />
        </div>
      </Container>
    </div>
  );
}

export default App;
