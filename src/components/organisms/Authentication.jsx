import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useState } from 'react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { useHistory } from "react-router-dom"

import background from '../../assets/images/logo_carango_bom.jpeg'
import useErrors from '../../hooks/useErrors.js'
import useFormValidations from '../../hooks/useFormValidations.js'
import AuthService from '../../service/auth/auth.service'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url("${background}")`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Authentication() {
  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  const { isRequired } = useFormValidations()



  const validations = {
    email: isRequired('E-mail é obrigatório!'),
    password: isRequired('Senha é obrigatória!')
  }

  const history = useHistory();

  const [errors, validateFields, send] = useErrors(validations)



  const handleSubmit = event => {
    if ((email && password && send())) {
      event.preventDefault()
      const login = AuthService.login(email, password).then((response) => {
        if (login && localStorage.getItem('token')) {
          window.location.reload()
          history.push('/')
        }
      })
    }
  }

  useEffect(() => {
    const login = localStorage.getItem('token')
    if (login) { history.push('/') }
  }, [])

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} onSubmit={(event) => handleSubmit(event)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              data-testid="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateFields}
              error={!errors.email.valid}
              helperText={errors.email.text}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              data-testid="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validateFields}
              error={!errors.password.valid}
              helperText={errors.password.text}
            />
            <Button
              type="submit"
              fullWidth
              name="btnClick"
              data-testid="btnClick"
              id="btnClick"
              variant="contained"
              color="primary"
              //to="/"
              //component={Link}
              className={classes.submit}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/cadastro-usuario" data-testid="linkOk" id="linkOk" variant="body2">
                  {"Não possui uma conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}