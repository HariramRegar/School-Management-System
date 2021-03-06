import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ButtonAppBar from './Header';
import Home from './Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import axiosInstance from '../axios'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function SideBar() {
    const classes = useStyles();
    // const [user, setUser] = useState('')
    var userDetails = JSON.parse(localStorage.getItem('userDetails'));

    // console.log('retrievedObject: ', JSON.parse(userDetails));
    let user = '';
    if (userDetails == undefined) {
        user = 'Anonymous';
    }
    else {
        user = userDetails.first_name + ' ' + userDetails.last_name;
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <ButtonAppBar />
            </AppBar>
            {userDetails &&
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem button >
                                <ListItemIcon><DashboardIcon /></ListItemIcon>
                                <Link to="/dashboard">
                                    <ListItemText >DashBoard</ListItemText>
                                </Link>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><SupervisedUserCircleIcon /></ListItemIcon>
                                <Link to="/teachers">
                                    <ListItemText >Teachers</ListItemText>
                                </Link>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><PeopleAltRoundedIcon /></ListItemIcon>
                                <Link to="/Students">
                                    <ListItemText >Students</ListItemText>
                                </Link>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><NotificationsActiveIcon /></ListItemIcon>
                                <Link to="/notifications">
                                    <ListItemText >Notice board</ListItemText>
                                </Link>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            }
            <main className={classes.content}>
                <Toolbar />
                <Home />
            </main>
        </div>
    );
}
