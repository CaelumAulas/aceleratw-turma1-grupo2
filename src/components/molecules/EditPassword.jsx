import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function EditPasswordForm() {
  return (
    <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
            Editar senha
        </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="old_pwd"
            name="old_pwd"
            label="Senha anterior"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="new_pwd"
            name="new_pwd"
            label="Nova senha"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="conf_pwd"
            name="conf_pwd"
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
                variant="contained"
                color="primary"
            >
                Salvar
            </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
            <Button
                href="/"
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
