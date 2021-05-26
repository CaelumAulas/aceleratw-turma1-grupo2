import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Dashboard from '@material-ui/icons/Dashboard'
import Edit from '@material-ui/icons/Edit'
import Commute from '@material-ui/icons/Commute'
import MenuIcon from '@material-ui/icons/Menu'
import Style from '@material-ui/icons/Style'
import LockOpen from '@material-ui/icons/LockOpen'
import PeopleAlt from '@material-ui/icons/PeopleAlt'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  root: {
    flexGrow: 1
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
  title: {
    flexGrow: 1,
  }
}))

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  let [isUserLogged, setIsUserLogged] = useState(localStorage.getItem('token'))
  const [anchorEl, setAnchorEl] = React.useState(null)

  useEffect(() => {
    const login = localStorage.getItem('token')
    if (isUserLogged || login) {
      isUserLogged = true
      setIsUserLogged(isUserLogged)
    } else {
      isUserLogged = false
      setIsUserLogged(isUserLogged)
    }

  }, [])

  const handleDrawerOpen = () => {
    isUserLogged = !!localStorage.getItem('token')
    setIsUserLogged(isUserLogged)
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleClickAvatar = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const history = useHistory()

  const handleCloseAndLogout = () => {
    setAnchorEl(null)
    localStorage.removeItem('token')
    isUserLogged = false
    setIsUserLogged(false)
    history.push('/login')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
          <Typography variant="h6" className={classes.title}>
            Carango Bom
          </Typography>
          {isUserLogged &&
            <Avatar className={classes.orange} onClick={handleClickAvatar}>U</Avatar>}
          {isUserLogged && <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
          >
            <MenuItem onClick={handleCloseAndLogout}>Logout</MenuItem>
          </Menu>}
        </Toolbar>
      </AppBar>
      {/* </div> */}
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
          <IconButton data-testid="btnHeaderArrowIcon" id="btnHeaderArrowIcon" onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
          <ListItem to="/" component={Link} button key="Listar Veículos à Venda">
            <ListItemIcon><Commute /></ListItemIcon>
            <ListItemText data-testid="linkListVehicle" id="linkListVehicle" primary="Listar Veículos à Venda" />
          </ListItem>
          <ListItem to="/login" component={Link} button key="Acesso Administrador">
            <ListItemIcon><LockOpen /></ListItemIcon>
            <ListItemText id="linkAdminAcess" data-testid="linkAdminAccess" primary="Acesso Administrador" />
          </ListItem>
        </List>
        <Divider />
        {isUserLogged &&
          <List>
            <ListItem to="/listar-marcas" component={Link} button key="Marcas">
              <ListItemIcon><Style /></ListItemIcon>
              <ListItemText id="linkListBrands" data-testid="linkListBrands" primary="Marcas" />
            </ListItem>
            <ListItem to="/listar-usuarios" component={Link} button key="Usuários">
              <ListItemIcon><PeopleAlt /></ListItemIcon>
              <ListItemText id="linkUsers" data-testid="linkUsers" primary="Usuários" />
            </ListItem>
            <ListItem to="/dashboard" id="linkDashboard" data-testid="linkDashboard" component={Link} button key="Dashboard">
              <ListItemIcon><Dashboard /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
        }
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>
    </div >
  )
}