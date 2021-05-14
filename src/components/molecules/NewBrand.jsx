import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import useErrors from '../../hooks/useErrors.js'
import useFormValidations from '../../hooks/useFormValidations.js'

export default function BrandsForm() {
  const { id } = useParams();

  console.log(id);

  //Incluir
  const handleSubmit = evt => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao: descricao })
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

  const [descricao, setDescricao] = useState('')
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
            id="descricao"
            data-testid="descricao"
            name="descricao"
            label="Marca"
            fullWidth
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
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
