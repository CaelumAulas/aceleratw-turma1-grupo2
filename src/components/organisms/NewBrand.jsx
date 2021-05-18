import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link, useRouteMatch } from 'react-router-dom'
import useFormValidations from '../../hooks/useFormValidations.js'
import useErrors from '../../hooks/useErrors.js'


export default function BrandsForm() {
  let [marca, setMarca] = useState('');
  let [update, setUpdate] = useState('');
  const match = useRouteMatch('/cadastro-marca/:id');
  

  //listar
  useEffect(() => {
    
    const id =  match ? match.params.id : '';
    if(id !== '' && id !== undefined){
      setUpdate(true);
      fetch(`http://localhost:8081/marcas/listar/${id}`)
        .then(response => response.json())
        .then(data => setMarca(data))
      }
      // eslint-disable-next-line
   }, [])

  //Incluir e Editar
  const handleSubmit = evt => {
    if(update){
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao: marca.descricao })
      };
      
      try{
        fetch(`http://localhost:8081/marcas/editar/${marca.id}`, requestOptions)
          .then(response => response.json());
          alert("Marca alterada com sucesso!");
      } catch(error){
        alert("Tente novamente.");
        throw new Error(`Error`, error);
      }
    }else{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao: marca.descricao })
      };
    
      try{
        fetch('http://localhost:8081/marcas/incluir', requestOptions)
          .then(response => response.json());
          alert("Marca incluída com sucesso!");
      } catch(error){
        alert("Tente novamente.");
        throw new Error(`Error`, error);
      }
    }        
  }

  const { isRequired } = useFormValidations()
  const validations = {
    descricao: isRequired('Marca é obrigatória !')
  }

  const [errors, validateFields, send] = useErrors(validations)
  return (
    <React.Fragment>
      <form onSubmit={() => send() && handleSubmit()}>
        <Typography component="h1" variant="h4" align="center">
            Incluir / Editar Marca
        </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            data-testid="brand"
            name="descricao"
            fullWidth
            label={marca.descricao ? '' : "Marca"}
            value={marca.descricao ? marca.descricao : ''}
            onChange={(e) => setMarca({id: marca.id, descricao: e.target.value})}
            onBlur={validateFields}
            error={!errors.descricao.valid}
            helperText={errors.descricao.text}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
            <Button
                type="submit"
                fullWidth
                name="btnSave"
                id="btnSave"
                data-testid="btnSave"
                variant="contained"
                color="primary"
            >
                Salvar
            </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Link to="/listar-marcas" >
            <Button
                type="button"
                fullWidth
                name="btnCancel"
                id="btnCancel"
                data-testid="btnCancel"
                variant="contained"
                color="primary"
                >
                Voltar
            </Button>
          </Link>  
        </Grid>
      </Grid>
    </form>
    </React.Fragment>
  )
}
