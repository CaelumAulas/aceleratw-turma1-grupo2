import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function AddressForm() {
  return (
    <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
            Adicione o nome da marca
        </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="brand"
            name="brand"
            label="Marca"
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
                href="/list-brands"
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
