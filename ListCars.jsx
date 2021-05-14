import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const rows = [
  { id: 1, marca: 'Fiat', modelo: 'Ford KA', ano: '2016', valor: '15.000,00' },
  { id: 2, marca: 'Fiat', modelo: 'Ford KA', ano: '2020', valor: '25.000,00' }
]

const columns = [
  { field: 'marca', headerName: 'Marca', width: 150 },
  { field: 'modelo', headerName: 'Modelo', width: 150 },
  { field: 'ano', headerName: 'Ano', width: 150 },
  { field: 'valor', headerName: 'Valor', width: 150 },
]

export default function List() {
    const classes = useStyles()
    
    return (
      <Grid  container spacing={3} className={classes.root}>
        <Grid item xs={2}> <div/></Grid>
        <Grid item xs={12} lg={8} >
          <div id="dataGrid" style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
          <div>
            <Button variant="outlined" color="primary" id="btnDelete"  data-testid="btnDelete">
              Excluir
            </Button>
            <Button href="/cadastro-veiculo" variant="outlined" color="primary" id="btnEdit" data-testid="btnEdit">
              Alterar
            </Button>
            <Button href="/cadastro-veiculo" variant="outlined" color="primary" id="btnNewVehicle" data-testid="btnNewVehicle">
              Incluir
            </Button>
          </div>
         </Grid>
         <Grid item xs={2}><div/></Grid>
      </Grid>
    )
  }