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
import  VehicleService  from '../../service/VehicleService'

export default function VehicleForm() {
  
  let [vehicle, setVehicle] = useState({value: '', year: '', vehicleModel:'', brand:''});
  console.log('vehicle >>>>>',vehicle)
  let [update, setUpdate] = useState({value: '', year: '', vehicleModel:'', brand:''});
  const match = useRouteMatch('/cadastro-veiculo/:id');
  console.log('match.params.', match)
  
 useEffect(() => {
    const vehicleId =  match ? match.params.id : '';
    console.log('ID',vehicleId)
    if(!vehicleId !== '' && vehicleId !== undefined){ 
      setUpdate(true);
      VehicleService.getVehicles().then((response) => {
        setVehicle(response);
      })
      }
   }, []) 

  //Incluir e Editar
  const handleSubmit = evt => {
    console.log('update>>>',update)

    if(update){
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vehicle: vehicle })
      };
      
      try{
        fetch(`http://localhost:8081/veiculos/editar/${vehicle.id}`, requestOptions)
          .then(response => response.json());
          alert("Veículo cadastrado com sucesso!");
      } catch(error){
        alert("Tente novamente.");
        throw new Error(`Error`, error);
      }
    } else {
      alert('update POST>>>',update)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ marca: vehicle.brand , valor: vehicle.value, modelo: vehicle.vehicleModel, ano: vehicle.year} ) //editar
      };

      console.log('requestOptions***',requestOptions)
      alert('requestOptions***',requestOptions);
      try{
        fetch('http://localhost:8081/veiculos/incluir', requestOptions)
          .then(response => response.json());
          alert('requestOptions***',requestOptions);
          alert("Veículo incluída com sucesso!");
      } catch(error){
        alert("Tente novamente.");
        throw new Error(`Error`, error);
      }
    }        
  }

  const { isRequired } = useFormValidations()
  const validations = {
    vehicle: {value: isRequired('Valor é obrigatório !'), year: isRequired('Ano é obrigatória !'), vehicleModel: isRequired('Modelo é obrigatória !'), brand:isRequired('Marca é obrigatória !')}
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
            defaultValue=''
            data-testid="vehicleModel"
            name="vehicleModel"
            label="Modelo do Veículo"
            fullWidth
            value={vehicle.vehicleModel}
            onChange={(e) => setVehicle({vehicleModel: e.target.value})}
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
            label={vehicle.value ? '' : "Valor"}
            value={vehicle.value}
            onChange={(e) => setVehicle({value: e.target.value})}
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
