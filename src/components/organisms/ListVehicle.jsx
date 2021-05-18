import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid'
import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'

import  vehicleService  from '../../service/vehicle/VehicleService'

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
    const [editRows, setEditRows] = useState([]);
    const [vehicle, setVehicle] = useState([])
    const [deletedRows, setDeletedRows] = useState([]);
  
    const handleRowSelection = (e) => {
      setDeletedRows([...deletedRows, ...vehicle.filter((d) => d.id === e.data.id)]);
      setEditRows(e.data.id);
    }

    //Deletar
    const handleDelete = () => {
      setVehicle(vehicle.filter((d) => deletedRows.filter((sr) => sr.id === d.id).length < 1))

      const vehicleId = deletedRows[0];

      vehicleService.deleteVehicle(vehicleId).then((response) => {
        setDeletedRows([])
        alert("Veículo deletado com sucesso!");
      })
    }

   //Listar
   useEffect(() => {
      vehicleService.getVehicles().then((response) => {
      setVehicle(response.content);
      })
   }, [])

    return (
      <Grid  container spacing={3} className={classes.root}>
        <Grid item xs={2}> <div/></Grid>
        <Grid item xs={12} lg={8} >
          <div id="dataGrid" style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} onRowSelected={handleRowSelection}/>
          </div>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="outlined" color="primary" id="btnDelete"  data-testid="btnDelete" onClick={handleDelete}>
              Excluir
            </Button>
            <Button to={`/cadastro-veiculo/${editRows}`} component={Link} variant="outlined" color="primary" id="btnEdit" data-testid="btnEdit">
              Alterar
            </Button>
            <Button to="/cadastro-veiculo" component={Link} variant="outlined" color="primary" id="btnNewVehicle" data-testid="btnNewVehicle">
              Incluir
            </Button>
          </Box>
         </Grid>
         <Grid item xs={2}><div/></Grid>
      </Grid>
    )
  }