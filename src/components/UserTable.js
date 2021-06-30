import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
// import users from '../fixture/users';

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: 752,
  },
  avatarCell: {
    height: '100%',
    padding: 5,
  },
  avatarImg: {
    height: '100%',
    width: 'auto',
    borderRadius: '50%',
  },
});

export default function UserTable({ users }) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const columns = [
    {
      field: 'avatar_url',
      headerName: 'Avatar',
      width: 300,
      editable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: (e) => {
        return (
          <a
            className={classes.avatarCell}
            href={e.row.avatar_url}
            target="_blank"
            rel="noreferrer"
          >
            <img className={classes.avatarImg} src={e.row.avatar_url} alt="" />
          </a>
        );
      },
    },
    {
      field: 'login',
      headerName: 'Login',
      headerAlign: 'center',
      align: 'center',
      width: 250,
      editable: false,
    },
    {
      field: 'type',
      headerName: 'Type',
      headerAlign: 'center',
      align: 'center',
      width: 200,
      editable: false,
    },
  ];

  useEffect(() => {
    if (users && users.length) {
      setRows(users);
    }
  }, [users]);

  return (
    <Paper className={classes.root} data-testid="usertable-root">
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        hideFooterSelectedRowCount={true}
        autoHeight
        pageSize={9}
        sortModel={[
          {
            field: 'login',
            sort: 'asc',
          },
        ]}
      />
    </Paper>
  );
}
