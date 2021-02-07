import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
                    <Button color="">Admin</Button>
                    <Button color="">Teacher</Button>
                    <Button color="">Student</Button>

                    <Typography variant="h6" className={classes.title}>
                        School Management System
                    </Typography>

                    <Button color="">About Us</Button>
                    <Button color="">More</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ButtonAppBar
