import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const rows = [
  { id: 1, nome: 'admin' },
  { id: 2, nome: 'Paulo' }
];

const columns = [
  { field: 'nome', headerName: 'Nome', width: `100%` }
];

export default function List() {
  const classes = useStyles();
  
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={2}> <div/></Grid>
      <Grid item xs={12} lg={8} >
        <div id="data-grid" style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
        <div>
          <Button variant="outlined" color="primary" id="delete">
            Excluir
          </Button>
          <Button variant="outlined" color="primary" id="edit">
            Alterar
          </Button>
          <Button variant="outlined" color="primary" id="new" href="/cadastro-usuario">
            Incluir
          </Button>
        </div>
       </Grid>
       <Grid item xs={2}><div/></Grid>
    </Grid>
  );
}
