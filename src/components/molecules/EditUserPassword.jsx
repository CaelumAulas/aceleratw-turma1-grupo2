import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

export default function EditUserPasswordForm() {
  return (
    <React.Fragment>
      <Router>
        <Typography component="h1" variant="h4" align="center">
            Editar senha
        </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="oldPassword"
            name="oldPassword"
            data-testid="oldPassword"
            label="Senha anterior"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="newPassword"
            name="newPassword"
            data-testid="newPassword"
            label="Nova senha"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="confirmPassword"
            data-testid="confirmPassword"
            name="confirmPassword"
            label="Confirmar nova senha"
            fullWidth
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
            <Button
                component={Link}
                to="/"
                type="button"
                fullWidth
                name="btnCancel"
                id="btnCancel"
                data-testid="btnCancel"
                variant="contained"
                color="primary"
                >
                Cancelar
            </Button>
        </Grid>
    </Grid>
    </Router>
    </React.Fragment>
  )
}
