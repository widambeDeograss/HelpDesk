import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate, Outlet } from "react-router-dom";
import LoginPage from "../pages/Login";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Add from "@mui/icons-material/Add";
import {
  SubjectOutlined,
  Login,
  Logout,
  AddCircleOutlined,
} from "@mui/icons-material";
import Searchbar from "../components/Searchbar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const useStyles = makeStyles((theme) => {
  return {
    pages: {
      background: "#f9f9f9",
      width: "100%",
      marginLeft: "-69px",
    },
    title: {
      padding: theme.spacing(2),
    },
    avatar: {
      marginLeft: theme.spacing(2),
      backgroundColor: "blue",
    },
    toolbar: theme.mixins.toolbar,
    searchbar: {
      flexGrow: 1,
    },
    drawer: {
      width: "10%",
      background: "#f3f3f3",
    },
  };
});

export default function Layout() {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [archorEl, setArchorEl] = React.useState(null);
  const [openEl, setopenEl] = React.useState(false);
  const [loggedin, setloggedin] = React.useState(true);
  const [loggedUser, setloggedUser] = React.useState("wdambedeograss@gmal.com");

  // React.useEffect(() => {
  //   setloggedin(props.Loggedin);
  //   setloggedUser(props.user);
  //   console.log(props.loggedin);
  //   console.log(props.user);
  //  } , []);

  const handleClosePopover = () => {
    setArchorEl(null);
    setopenEl(false);
  };

  const handleOpenPopover = (event) => {
    const currentTarget = event;
    setArchorEl(currentTarget);
    setopenEl(true);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("i have been clicked");
    navigate("/register");
  };

  const handleLogout = () => {
    navigate("/");
    setloggedin(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (loggedin) {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.searchbar}>
              <Searchbar />
            </div>
            <Typography>{loggedUser}</Typography>
            <Avatar
              className={classes.avatar}
              style={{ backgroundColor: "green" }}
            >
              {loggedUser[0].toUpperCase()}
            </Avatar>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Typography variant="h5">HelpDesk</Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Button
            variant="contained"
            className={classes.title}
            onClick={() => {
              navigate("/askQestion");
            }}
          >
            <AddCircleOutlined color="secondary" />
            Ask A Question
          </Button>
          <List>
            <ListItem
              button
              onClick={() => {
                navigate("/all");
              }}
            >
              <ListItemIcon>
                <SubjectOutlined color="secondary" />
              </ListItemIcon>
              <ListItemText primary="All Questions" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                navigate("/YourQuestions");
              }}
            >
              <ListItemIcon>
                <SubjectOutlined color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Your Questions" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <Logout color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
        <LoginPage
          archorEl={archorEl}
          openEl={openEl}
          handleClose={handleClosePopover}
        />
        ;
        <div className={classes.pages}>
          <div className={classes.toolbar}></div>
          <Outlet />
        </div>
        <div
          open
          variant="permanent"
          className={classes.drawer}
          anchor="right"
        ></div>
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.searchbar}>
              <Searchbar />
            </div>
            <Typography>{loggedUser}</Typography>
            <Avatar className={classes.avatar}></Avatar>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Typography variant="h5">HelpDesc</Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Button
            variant="contained"
            className={classes.title}
            onClick={handleOpenPopover}
          >
            <AddCircleOutlined color="secondary" />
            Ask A Question
          </Button>
          <List>
            <ListItem
              button
              onClick={() => {
                navigate("/all");
              }}
            >
              <ListItemIcon>
                <SubjectOutlined color="secondary" />
              </ListItemIcon>
              <ListItemText primary="All Questions" />
            </ListItem>
            <ListItem button onClick={handleRegister}>
              <ListItemIcon>
                <Add color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
            <ListItem button onClick={handleOpenPopover}>
              <ListItemIcon>
                <Login color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
        
        <LoginPage
          archorEl={archorEl}
          openEl={openEl}
          handleClose={handleClosePopover}
        />
        
        <div className={classes.pages}>
          <div className={classes.toolbar}></div>
          <Outlet />
        </div>
        <div
          open
          variant="permanent"
          className={classes.drawer}
          anchor="right"
        ></div>
      </Box>
    );
  }
}
