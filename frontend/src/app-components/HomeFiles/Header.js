import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import UserMenuList from './UserMenuList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'right'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navbar: {
        background: ''
    },
    floating: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    }
}));


function ButtonAppBar() {
    const classes = useStyles();
    var userDetails = JSON.parse(localStorage.getItem('userDetails'));


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ float: 'right' }}>
                    <Typography variant="h6" noWrap>
                        School Management System
                    </Typography>
                    <a style={{ display: "flex", marginLeft: "auto" }}>
                        {/* <Link to="/admin">
                        <Button color="">Admin</Button>
                    </Link>
                    <Link to="/teacher">
                        <Button color="">Teacher</Button>
                    </Link>
                    <Link to="/student">
                        <Button color="">Student</Button>
                    </Link> */}
                        <Link to="">
                            <Button color=""><HomeOutlinedIcon /></Button>
                        </Link>
                        {userDetails &&
                            <>
                                <Link to="/notifications">
                                    <Button color=""><NotificationsActiveIcon /></Button>
                                </Link>
                                <UserMenuList />
                                <Link to="/signout">
                                    <Button color="" className={useStyles.floating}><PowerSettingsNewIcon /></Button>
                                </Link>
                            </>
                        }
                        {userDetails == undefined &&
                            <>
                                <Link to="/signup">
                                    <Button color="">Resiter</Button>
                                </Link>
                                <Link to="/login">
                                    <Button color="">Sign In</Button>
                                </Link>
                            </>
                        }
                    </a>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ButtonAppBar;
