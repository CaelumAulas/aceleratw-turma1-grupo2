import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            label="Usuário"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
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
              variant="contained"
              color="primary"
            >
              Cadastrar
            </Button>
           
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <Button
              type="button"
              fullWidth
              name="btnCancel"
              id="btnCancel"
              variant="contained"
              color="primary"
            >
              Cancelar
            </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
