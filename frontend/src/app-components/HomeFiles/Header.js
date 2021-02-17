import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navbar: {
        background: ''
    }
}));

function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="">
                        <Button color="">Admin</Button>
                    </Link>
                    <Link to="#">
                        <Button color="">Teacher</Button>
                    </Link>
                    <Link to="#">
                        <Button color="">Student</Button>
                    </Link>
                    <Link to="">
                        
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        School Management System
                    </Typography>
                    {/* <Link to="/about">
                        <Button color="">About Us</Button>
                    </Link> */}
                    <Link to="/notifications">
                        <Button color="">Notifications</Button>
                    </Link>
                    <Link to="/signup">
                        <Button color="">Resiter</Button>
                    </Link>
                    <Link to="/login">
                        <Button color="">Sign In</Button>
                    </Link>
                    <Link to="/signout">
                        <Button color="">Log Out</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ButtonAppBar
