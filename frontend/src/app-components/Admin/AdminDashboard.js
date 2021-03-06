import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import UsersCard from './UsersCard';
import { Divider } from '@material-ui/core';
import UsersCardStudent from './UsersCardStudent';
import UsersCardTeacher from './UsersCardTeacher';
import Notification from '../Notification/Notifications'
import axiosInstance from '../axios'
import {
    Link
} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: '25%',
    },
    container1: {
        padding: '20px 10px',
        position: 'relative',
    },
    myButton:{
        // background:'green',
        color:'blue',
    }
});



function AdminDashboard() {
    const classes = useStyles();
    const [countDetails, setCountDetails] = useState({'totalStudent':0, 'totalTeacher':0})
    var userDetails = JSON.parse(localStorage.getItem('userDetails'));

    useEffect(() => {
        axiosInstance
            .get(`/countdetails/`)
            .then(res => {
                console.log(res.data);
                setCountDetails(res.data);
            })
            .catch(err => {
                console.log(err);
                alert('You are not logged in, please login and check again.');
            })
    }, [])
    return (
        <>
            <h3>Welcome {userDetails.first_name}</h3>
            <Grid container spacing={24} className={classes.container1}>
                {/* <Grid item md={4}>
                    <UsersCard />
                </Grid> */}
                <Grid item md={6}>
                    <UsersCardStudent value = {countDetails.totalStudent}/>
                </Grid>
                <Grid item md={6}>
                    <UsersCardTeacher value = {countDetails.totalTeacher}/>
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={24} className={classes.container1}>
                <Grid item md={6}>
                    <h2> Notice Board </h2>
                </Grid>
                <Grid item md={6}>
                    <Link to="/createNotifications">
                        <Button className ={classes.myButton}>Add Notification</Button>
                    </Link>
                </Grid>
            </Grid>
            <Divider />

            <Notification />
        </>
    );
}

export default AdminDashboard;
