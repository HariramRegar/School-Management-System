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

function Notifications() {
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

    const handleClick = () => {
        setIdFromButtonClick(id);
    }

    return (
        <div>
            <Link to="/createNotifications">
                <Button color=""> + Create Notice</Button>
            </Link>
            <ul>
                {posts.map(post => (
                    <div>
                        <li key={post.id}><h3>Title - {post.title} </h3><p>Message - {post.message}</p></li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Notifications;

