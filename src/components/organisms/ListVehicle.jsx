import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid'
import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'

import  vehicleService  from '../../service/VehicleService'

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
    };

      //Deletar
  const handleDelete = () => {
    setVehicle(
      vehicle.filter((d) => deletedRows.filter((sr) => sr.id === d.id).length < 1)
    );

    const id = deletedRows[0];
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    
    try{
      fetch(`http://localhost:8081/veiculos/deletar/${id}`, requestOptions);
      alert("Veículo deletado com sucesso!");
      setDeletedRows([]);
    } catch(error){
      console.error(error);
      alert("Tente novamente.");
    }
  };

   //Listar
   useEffect(() => {
    vehicleService.getVehicles().then((response) => {
      setVehicle(response);
    })
  }, [])
  

    return (
      <Grid  container spacing={3} className={classes.root}>
        <Grid item xs={2}> <div/></Grid>
        <Grid item xs={12} lg={8} >
          <div id="dataGrid" style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} onRowSelected={handleRowSelection}/>
          </div>
          <div>
            <Button variant="outlined" color="primary" id="btnDelete"  data-testid="btnDelete">
              Excluir
            </Button>
            <Button to={`/cadastro-veiculo/${editRows}`} component={Link} variant="outlined" color="primary" id="btnEdit" data-testid="btnEdit">
              Alterar
            </Button>
            <Button to="/cadastro-veiculo" component={Link} variant="outlined" color="primary" id="btnNewVehicle" data-testid="btnNewVehicle">
              Incluir
            </Button>
          </div>
         </Grid>
         <Grid item xs={2}><div/></Grid>
      </Grid>
    )
  }