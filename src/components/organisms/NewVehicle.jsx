import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'

export default function VehicleForm() {
  return (
    <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
            Cadastro de Veiculo
        </Typography>
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl >        
            <Select 
                labelId="brand" id="brand" data-testid="brand">        
                    <MenuItem select value={10}>Volks</MenuItem>
                    <MenuItem value={20}>Ford</MenuItem>
                    <MenuItem value={30}>Fiat</MenuItem>
                </Select>
                <FormHelperText>Selecione a Marca do Veículo </FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="vehicleModel"
            data-testid="vehicleModel"
            name="vehicleModel"
            label="Modelo do Veículo"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="year"
            data-testid="year"
            name="year"
            label="Ano"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="value"
            data-testid="value"
            name="value"
            label="Valor"
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
              color="primary">
              Cadastrar
            </Button>
           
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <Button
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
    </React.Fragment>
  )
}
