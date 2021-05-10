import React, { useReducer } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

export default function UserForm() {

  function submitAddUser(value){
    console.log(`SUBMIT USER`, value)
  }

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      invalidField: true
    }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };
    console.log('SUBMIT >>>',data);

    fetch("ENDPOINT", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };
  
  const invalidField = true;

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    const email = evt.target.email;
    const password = evt.target.password;
    const confirmPassword = evt.target.confirmPassword;
    
    console.log('handleInput >', evt.target.name, evt.target.value, evt.target.email, evt.target.confirmPassword)
    setFormInput({ [name]: newValue });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
      <Typography component="h1" variant="h4" align="center">
            Cadastro de Usuário
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              helperText="Campo obrigatório"
              required
              id="user"
              name="user"
              defaultValue={formInput.user}
              label="Usuário"
              fullWidth
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Senha"
              fullWidth
              defaultValue={formInput.email}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="confirmPassword"
              name="confirmPassword"
              label="Confirmação de Senha"
              fullWidth
              defaultValue={formInput.confirmPassword}
              onChange={handleInput}
            />
          </Grid>
          <FormControl disabled>
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
          </FormControl>
        </Grid>
      </form>
    </React.Fragment>
  );
}
