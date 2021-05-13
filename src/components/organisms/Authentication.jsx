import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import background from '../../assets/images/logo_carango_bom.jpeg';
import useFormValidations from '../../hooks/useFormValidations.js';
import useErrors from '../../hooks/useErrors.js';


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
}));

export default function Authentication() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isRequired } = useFormValidations();
  const validations = {
    email: isRequired('E-mail é obrigatório !'),
    password: isRequired('Senha é obrigatória !')
  }

  const [errors, validateFields, send] = useErrors(validations);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} onSubmit={() => email && password && send()}>
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
              href="/"
              className={classes.submit}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/cadastro-usuario" data-testid="linkOk" id="linkOk" variant="body2">
                  {"Não possui uma conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}