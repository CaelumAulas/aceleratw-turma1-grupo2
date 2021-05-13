import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const rows = [
  { id: 1, brand: 'Ford KA', totalVehicles: '10', value: 'R$ 50.000,00' },
  { id: 2, brand: 'RENAULT', totalVehicles: '3', value: 'R$ 20.000,00' },
  { id: 3, brand: 'GM', totalVehicles: '2', value: 'R$ 80.000,00' }
];

const columns = [
  { field: 'brand', headerName: 'Marca', width: 150 },
  { field: 'totalVehicles', headerName: 'Quantidade de Veículos', width: 250 },
  { field: 'value', headerName: 'Valor', width: 150 },
];

export default function List() {
    const classes = useStyles();
    
    return (
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={2}> <div/></Grid>
        <Grid item xs={12} lg={8} >
          <div id="data-grid" data-testid="data-grid" style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
         </Grid>
         <Grid item xs={2}><div/></Grid>
      </Grid>
    );
  }