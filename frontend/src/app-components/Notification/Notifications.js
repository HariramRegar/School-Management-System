import { computeHeadingLevel } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: '',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

export default function Notifications() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        axiosInstance
            .get(`/notifications/`)
            .then(res => {
                console.log(res.data);
                setPosts(res.data.data);
            })
            .catch(err => {
                console.log(err);
                alert('You are not logged in, please login and check again.');
            })
    }, [])

    return (
        <div className={classes.root}>
            {posts.map(post => (

                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <a>Posted by: {post.created_by}</a>
                        </Grid>
                        
                        <Grid item xs>
                        <h2>{ post.title }</h2>
                            <Typography>{post.message}</Typography>
                        </Grid>
                        <Grid item>
                            <a>{post.created_at}</a>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    );
}


