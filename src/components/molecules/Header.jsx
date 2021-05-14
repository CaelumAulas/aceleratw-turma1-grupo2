import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Dashboard from '@material-ui/icons/Dashboard'
import Edit from '@material-ui/icons/Edit'
import LockOpen from '@material-ui/icons/LockOpen'
import MenuIcon from '@material-ui/icons/Menu'
import TableChart from '@material-ui/icons/TableChart'
import clsx from 'clsx'
import { createBrowserHistory } from "history"
import React, { Fragment, useState } from 'react'
import { Link, Route, Router } from "react-router-dom"

import Authentication from "../../pages/authentication/Authentication.js"
import ListBrands from "../../pages/brands/ListBrands.js"
import NewBrand from "../../pages/brands/NewBrand.js"
import DashboardPage from "../../pages/dashboard/Dashboard.js"
import EditPassword from "../../pages/user/EditUserPassword.js"
import ListUsers from "../../pages/user/List.js"
import NewUser from "../../pages/user/NewUser.js"
import ListOfCars from "../../pages/vehicle/List.js"
import NewVehicle from "../../pages/vehicle/NewVehicle.js"

const drawerWidth = 240;
const history = createBrowserHistory();

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  }
});

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
    <Fragment>
      <AppBar className={classes.aboveDrawer}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.flex}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
);

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Router history={history}>
    <Drawer variant={variant} open={open} onClose={onClose}
                classes={{
                  paper: classes.drawerPaper
                }}
    >
      <div
        className={clsx({
          [classes.toolbarMargin]: variant === 'persistent'
        })}
      />
      <List>
         <ListItem to="/" component={Link} button key="Listar Veículos à Venda" onClick={onItemClick('Home')}>
              <ListItemIcon><TableChart /></ListItemIcon>
              <ListItemText data-testid="linkListVehicle" id="linkListVehicle" primary="Listar Veículos à Venda" />
          </ListItem>
          <ListItem  to="/acesso" component={Link} button key="Acesso Administrador" onClick={onItemClick('Acesso Administrador')}>
              <ListItemIcon><LockOpen /></ListItemIcon>
              <ListItemText id="linkAdminAcess" data-testid="linkAdminAccess" primary="Acesso Administrador" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem to="/listar-marcas" component={Link} button key="Marcas" onClick={onItemClick('Marcas')}>
              <ListItemIcon><TableChart /></ListItemIcon>
              <ListItemText id="linkListBrands" data-testid="linkListBrands" primary="Marcas" />
          </ListItem>
          <ListItem to="/listar-usuarios" component={Link} button key="Usuários" onClick={onItemClick('Usuários')}>
              <ListItemIcon><TableChart /></ListItemIcon>
              <ListItemText id="linkUsers" data-testid="linkUsers" primary="Usuários" />
          </ListItem>
          <ListItem to="/dashboard" id="linkDashboard" data-testid="linkDashboard" component={Link} button key="Dashboard" onClick={onItemClick('Dashboard')}>
              <ListItemIcon><Dashboard /></ListItemIcon>
              <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem to="/editar-senha" id="linkEditPassword" data-testid="linkEditPassword" component={Link} button key="Editar Senha" onClick={onItemClick('Editar Senha')}>
              <ListItemIcon><Edit /></ListItemIcon>
              <ListItemText primary="Editar Senha" />
          </ListItem>
        </List>
    </Drawer>
    <main className={classes.content}>
        <Route exact path="/" component={ListOfCars} />
        <Route path="/acesso" component={Authentication} />
            <Route path="/cadastro-usuario" component={NewUser} />
            <Route path="/listar-marcas"  component={ListBrands} />
            <Route path="/cadastro-marca" component={NewBrand} />
            <Route path="/cadastro-marca/:id" component={NewBrand} />
            <Route path="/cadastro-veiculo" component={NewVehicle} />
            <Route path="/listar-usuarios" component={ListUsers} />
            <Route path="/editar-senha" component={EditPassword} />
            <Route path="/dashboard" component={DashboardPage} />
    </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState('Home');

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === 'temporary' ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);
