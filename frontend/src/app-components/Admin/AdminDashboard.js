import React from 'react';
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


const useStyles = makeStyles({
    root: {
        maxWidth: '25%',
    },
    container1:{
        padding: '20px 10px',
    }
});


function AdminDashboard() {
    const classes = useStyles();
    return (
        <>
        <h3>Admin Dashboard</h3>
        <Grid container spacing={24} className={classes.container1}>
            <Grid item md={3}>
                <UsersCard/>
            </Grid>
            <Grid item md={3}>
                <UsersCard/>
            </Grid>
            <Grid item md={3}>
                <UsersCard/>
            </Grid><Grid item md={3}>
                <UsersCard/>
            </Grid>
        </Grid>
        <Divider />
        </>
    );
}

export default AdminDashboard;
