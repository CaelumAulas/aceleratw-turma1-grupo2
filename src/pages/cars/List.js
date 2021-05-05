import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';

const rows = [
  { id: 1, marca: 'Fiat', modelo: 'Ford KA', ano: '2016', valor: '15.000,00' },
  { id: 2, marca: 'Fiat', modelo: 'Ford KA', ano: '2020', valor: '25.000,00' }
];

const columns = [
  { field: 'marca', headerName: 'Marca', width: 150 },
  { field: 'modelo', headerName: 'Modelo', width: 150 },
  { field: 'ano', headerName: 'Ano', width: 150 },
  { field: 'valor', headerName: 'Valor', width: 150 },
];

export default function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}> <div/></Grid>
      <Grid item xs={12} lg={8} >
        <div id="data-grid" style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
       </Grid>
       <Grid item xs={2}> <div/></Grid>
    </Grid>
  );
}