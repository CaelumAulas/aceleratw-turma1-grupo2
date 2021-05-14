import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function UserForm() {
  return (
    <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
            Cadastro de Usuário
        </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="user"
            name="user"
            data-testid="user"
            label="Usuário"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            data-testid="password"
            name="password"
            label="Senha"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="copyPassword"
            name="copyPassword"
            data-testid="copyPassword"
            label="Confirmação de Senha"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <Button
              type="submit"
              fullWidth
              name="btnSubmit"
              id="btnSubmit"
              data-testid="btnSubmit"
              variant="contained"
              color="primary"
            >
              Cadastrar
            </Button>
           
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <Link to="/listar-usuarios" >
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
    </React.Fragment>
  )
}
