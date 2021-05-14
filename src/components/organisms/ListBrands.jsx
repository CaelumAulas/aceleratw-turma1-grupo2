import React, { useState, useEffect } from 'react'
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

const columns = [
  { field: 'descricao', headerName: 'Marca', width: 150 }
]

export default function List() {
  const [descricao, setDescricao] = useState([])
  const [deletedRows, setDeletedRows] = useState([]);
  const [editRows, setEditRows] = useState([]);

  const handleRowSelection = (e) => {
    setDeletedRows([...deletedRows, ...descricao.filter((d) => d.id === e.data.id)]);
    setEditRows(e.data.id);
  };

  //Deletar
  const handleDelete = () => {
    setDescricao(
      descricao.filter((d) => deletedRows.filter((sr) => sr.id === d.id).length < 1)
    );

    const marcaId = deletedRows[0].id;
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    
    try{
      fetch(`http://localhost:8081/marcas/deletar/${marcaId}`, requestOptions);
      alert("Marca deletada com sucesso!");
      setDeletedRows([]);
    } catch(error){
      console.error(error);
      alert("Tente novamente.");
    }
  };

  //Listar
  useEffect(() => {
    fetch('http://localhost:8081/marcas/listar')
      .then(response => response.json())
      .then(data => setDescricao(data))
  }, [])

  const classes = useStyles()

  return (
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={2}> <div/></Grid>
        <Grid item xs={12} lg={8} >
          <div id="dataGrid" style={{ height: 300, width: '100%' }}>
            <DataGrid rows={descricao} columns={columns} onRowSelected={handleRowSelection}/>
          </div>
          <div>
            <Button variant="outlined" color="primary" id="btnDelete" data-testid="btnDelete" onClick={handleDelete}>
              Excluir
            </Button>
            <Button to={`/cadastro-marca/${editRows}`} component={Link} variant="outlined" color="primary" id="btnEdit" data-testid="btnEdit">
              Alterar
            </Button>
            <Button to="/cadastro-marca" component={Link} variant="outlined" color="primary" id="btnNewBrand" data-testid="btnNewBrand">
              Incluir
            </Button>
          </div>
         </Grid>
         <Grid item xs={2}><div/></Grid>
      </Grid>
    )
  }