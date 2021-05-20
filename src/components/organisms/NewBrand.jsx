import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link, useRouteMatch } from 'react-router-dom'
import useFormValidations from '../../hooks/useFormValidations.js'
import useErrors from '../../hooks/useErrors.js'
import brandService from '../../service/brand/brand.service'

export default function BrandsForm() {
  let [marca, setMarca] = useState('');
  let [update, setUpdate] = useState('');
  const route = useRouteMatch('/cadastro-marca/:id');
  const brandId = route ? route.params.id : '';


  //listar
  useEffect(() => {
    const brandId = route ? route.params.id : '';
    if (brandId) {
      setUpdate(true);
    }
  }, [])

  //Incluir e Editar
  const handleSubmit = event => {
    event.preventDefault()
    if (marca && send()) {
      if (brandId) {
        brandService.updateBrand(marca, brandId)
      } else {
        brandService.addBrand(marca)
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
      <form onSubmit={(event) => handleSubmit(event)}>
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
              onChange={(e) => setMarca({ id: marca.id, descricao: e.target.value })}
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
