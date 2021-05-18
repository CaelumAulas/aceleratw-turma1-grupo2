import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'

import useErrors from '../../hooks/useErrors.js'
import useFormValidations from '../../hooks/useFormValidations.js'
import  vehicleService  from '../../service/VehicleService'

export default function VehicleForm() {
  
  let [vehicle, setVehicle] = useState({value: '', year: '', vehicleModel:'', brand:''});
  let [update, setUpdate] = useState({value: '', year: '', vehicleModel:'', brand:''});
  const route = useRouteMatch('/cadastro-veiculo/:id');

 useEffect(() => {
    const vehicleId =  route ? route.params.id : '';
    console.log('ID PEGO NA ROTA', vehicleId)
    if(vehicleId){ 
      setUpdate(true)
      vehicleService.getVehiclesById(vehicleId).then((response) => {
        setVehicle(response)
      })
    }
      // eslint-disable-next-line 
   }, []) 

  //Incluir e Editar
  const handleSubmit = evt => {
    if(update){
      vehicleService.updateVehicle(vehicle)
    } else {
      vehicleService.addVehicle(vehicle)
    }        
  }

  const { isRequired } = useFormValidations()

  const validations = {
    value: isRequired('Valor é obrigatório!'), year: isRequired('Ano é obrigatório!'), vehicleModel: isRequired('Modelo é obrigatório!'), brand:isRequired('Marca é obrigatória!')
  }

  const [errors, validateFields, send] = useErrors(validations)
  return (
    <React.Fragment>
      <form onSubmit={() => send() && handleSubmit()}>
        <Typography component="h1" variant="h4" align="center">
            Cadastro de Veiculo
        </Typography>
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl >        
            <Select
                required
                labelId="brand" 
                id="brand"
                name="brand"
                data-testid="brand"
                value={vehicle.brand ? vehicle.brand : ''}
                onChange={(e) => setVehicle({brand: e.target.value})}
                >        
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
            defaultValue=''
            data-testid="vehicleModel"
            name="vehicleModel"
            label="Modelo do Veículo"
            fullWidth
            value={vehicle.vehicleModel}
            onChange={(e) => setVehicle({vehicleModel: e.target.value})}
            onBlur={validateFields}
            error={!errors.vehicleModel.valid}
            helperText={errors.vehicleModel.text}
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
            defaultValue=''
            value={vehicle.year}
            onChange={(e) => setVehicle({year: e.target.value})}
            onBlur={validateFields}
            error={!errors.year.valid}
            helperText={errors.year.text}
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
            autoComplete="value"
            defaultValue=''
            value={vehicle.value}
            onChange={(e) => setVehicle({value: e.target.value})}
            onBlur={validateFields}
            error={!errors.value.valid}
            helperText={errors.value.text}
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
      </form>
    </React.Fragment>
  )
}
