import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const rows = [
  { id: 1, name: 'Luana'},
  { id: 2, name: 'Juliana'},
  { id: 3, name: 'Gisele'},
  { id: 4, name: 'Izalena'}
]

const columns = [
  { field: 'name', headerName: 'Nome', width: 150 }
]

export default function List() {
  const classes = useStyles()
  
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={2}> <div/></Grid>
      <Grid item xs={12} lg={8} >
        <div id="dataGrid" style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
        <div>
          <Button variant="outlined" color="primary" id="btnDelete" data-testid="btnDelete">
            Excluir
          </Button>
          <Button variant="outlined" color="primary" id="btnEdit" data-testid="btnEdit">
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
