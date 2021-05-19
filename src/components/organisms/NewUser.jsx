import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import userService from '../../service/user/user.service'
import useFormValidations from '../../hooks/useFormValidations.js'
import useErrors from '../../hooks/useErrors.js'

export default function UserForm() {
    let [user, setUser] = useState({email: '', password: '', copyPassword:''})
    let [update, setUpdate] = useState({email: '', password: '', copyPassword:''})
    
    const route = useRouteMatch('/cadastro-usuario/:id');
    
    //listar
    useEffect(() => {
      const userId =  route ? route.params.id : '';
      console.log('ID PEGO NA ROTA', userId)
      if(userId){ 
        setUpdate(true)
        userService.getUsersById(userId).then((response) => {
          setUser(response)
        })
      } // eslint-disable-next-line 
    }, [])

    //Incluir e Editar
    const handleSubmit = evt => {
      if(update){
        userService.updateUser(user)
      } else {
        userService.addUser(user)
      }        
    }

    const { isRequired } = useFormValidations()

    const validations = {
      email: isRequired('Email é obrigatório!'), password: isRequired('Senha é obrigatória!'), copyPassword: isRequired('Senha é obrigatória!')
    }
    
    const [errors, validateFields, send] = useErrors(validations)

  return (
    <React.Fragment>
     <form onSubmit={() => send() && handleSubmit()}>
        <Typography component="h1" variant="h4" align="center">
            Cadastro de Usuário
        </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            data-testid="email"
            label="Email"
            fullWidth
            value={user.email}
            onChange={(e) => setUser({email: e.target.value})}
            onBlur={validateFields}
            error={!errors.email.valid}
            helperText={errors.email.text}
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
            value={user.password}
            onChange={(e) => setUser({password: e.target.value})}
            onBlur={validateFields}
            error={!errors.password.valid}
            helperText={errors.password.text}
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
            value={user.copyPassword}
            onChange={(e) => setUser({copyPassword: e.target.value})}
            onBlur={validateFields}
            error={!errors.copyPassword.valid}
            helperText={errors.copyPassword.text}
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
    </form>
    </React.Fragment>
  )
}
