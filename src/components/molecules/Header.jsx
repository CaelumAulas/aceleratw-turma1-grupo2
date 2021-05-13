import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TableChart from '@material-ui/icons/TableChart';
import LockOpen from '@material-ui/icons/LockOpen';
import Dashboard from '@material-ui/icons/Dashboard';
import Edit from '@material-ui/icons/Edit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            id="btnIcon"
            data-testid="btnIcon"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography id="header-title" variant="h6" noWrap>
            CARANGO BOM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        id="headerDrawer"
        data-testid="headerDrawer"
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton  data-testid="btnHeaderArrowIcon" id="btnHeaderArrowIcon" onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
         <ListItem to="/" component={Link} button key="Listar Veículos à Venda">
              <ListItemIcon><TableChart /></ListItemIcon>
              <ListItemText data-testid="linkListVehicle" id="linkListVehicle" primary="Listar Veículos à Venda" />
          </ListItem>
          <ListItem  to="/acesso" component={Link}  button key="Acesso Administrador">
              <ListItemIcon><LockOpen /></ListItemIcon>
              <ListItemText id="linkAdminAcess" data-testid="linkAdminAccess" primary="Acesso Administrador" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem to="/listar-marcas" component={Link} button key="Marcas">
              <ListItemIcon><TableChart /></ListItemIcon>
              <ListItemText id="linkListBrands" data-testid="linkListBrands" primary="Marcas" />
          </ListItem>
          <ListItem to="/listar-usuarios" component={Link} button key="Usuários">
              <ListItemIcon><TableChart /></ListItemIcon>
              <ListItemText id="linkUsers" data-testid="linkUsers" primary="Usuários" />
          </ListItem>
          <ListItem to="/dashboard" id="linkUsers" data-testid="linkUsers" component={Link} button key="Dashboard">
              <ListItemIcon><Dashboard /></ListItemIcon>
              <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem to="/editar-senha" id="linkEditPassword" data-testid="linkEditPassword" component={Link} button key="Editar Senha">
              <ListItemIcon><Edit /></ListItemIcon>
              <ListItemText primary="Editar Senha" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
      </main>
    </div>
  );
}