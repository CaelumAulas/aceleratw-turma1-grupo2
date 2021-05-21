import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import  userService  from '../../service/user/user.service'

let rows = []

const columns = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 }
]

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

export default function List() {
  const classes = useStyles()
  const [users,  setUser] = useState([])
  const [editRows, setEditRows] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);

  const handleRowSelection = (e) => {
    setDeletedRows([...deletedRows, ...users.filter((d) => d.id === e.data.id)]);
    setEditRows(e.data.id);
  }

  //Deletar
  const handleDelete = () => {
    // setVehicle(vehicle.filter((d) => deletedRows.filter((sr) => sr.id === d.id).length < 1))

    // const vehicleId = deletedRows[0];

    // vehicleService.deleteVehicle(vehicleId).then((response) => {
    //   setDeletedRows([])
    //   alert("Veículo deletado com sucesso!");
    // })
  }

  useEffect(() => 
  {
      userService.getUsers().then((response) => {
        console.log(response)
        rows = response
        setUser(response);
      })
  }, [])

<<<<<<< HEAD
=======
useEffect(() => {
  userService.getUsers().then((response) => {
    rows = response
    setUser(response);
  })
}, [])
  
>>>>>>> development
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={2}> <div/></Grid>
      <Grid item xs={12} lg={8} >
        <div id="dataGrid" style={{ height: 300, width: '100%' }}>
          <DataGrid
          onRowSelected={handleRowSelection}
          rows={rows} 
          columns={columns} />
        </div>
        <div>
          <Button variant="outlined" color="primary" id="btnDelete" data-testid="btnDelete">
            Excluir
          </Button>
          <Button variant="outlined" color="primary" id="btnEdit" data-testid="btnEdit" component={Link}  to={`/cadastro-usuario/${editRows}`}>
            Alterar
          </Button>
          <Button variant="outlined" color="primary" id="btnNewUser" data-testid="btnNewUser" component={Link}  to="/cadastro-usuario">
            Incluir
          </Button>
        </div>
       </Grid>
       <Grid item xs={2}><div/></Grid>
    </Grid>
  )
}
