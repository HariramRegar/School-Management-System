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
import Pagination from '@material-ui/lab/Pagination';

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
    pagination: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Notifications() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1)
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        axiosInstance
            .get(`/notifications/?skip=${(newPage-1)*10}&limit=10`)
            .then(res => {
                // console.log(res.data);
                setPosts(res.data.data);
                const pageCount = Number(res.data.count);
                const pageCount2 = parseInt(pageCount/10)
                const pageCount1 = pageCount%10==0 ? pageCount2:pageCount2+1;
                setTotalPages(pageCount1);
            })
            .catch(err => {
                // console.log(err);
                alert('You are not logged in, please login and check again.');
            })
    };

    useEffect(() => {
        axiosInstance
            .get(`/notifications/`)
            .then(res => {
                // console.log(res.data);
                setPosts(res.data.data);
                const pageCount = Number(res.data.count);
                const pageCount2 = parseInt(pageCount/10)
                const pageCount1 = pageCount%10==0 ? pageCount2:pageCount2+1;
                setTotalPages(pageCount1);
            })
            .catch(err => {
                // console.log(err);
                alert('You are not logged in, please login and check again.');
            })
    }, [])

    return (
        <>
        { posts.length &&
        <>
            <div className={classes.root}>
                {posts.map(post => (

                    <Paper className={classes.paper} key={post.id}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <a>Posted by: {post.created_by}</a>
                            </Grid>

                            <Grid item xs>
                                <h3>{post.title}</h3>
                                <Typography>{post.message}</Typography>
                            </Grid>
                            <Grid item>
                                <a>{post.created_at}</a>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </div>
            <div className={classes.root}>
                {/* <Pagination count={10} shape="rounded" /> */}
                <Pagination
                    count={totalPages}
                    variant="outlined"
                    shape="rounded"
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
        </>
        }
        {posts.length == 0 && 
            <div component={Paper}>
                <img src='https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png'></img>
            </div>}
        </>
    );
}