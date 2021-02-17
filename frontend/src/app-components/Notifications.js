import { computeHeadingLevel } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import axiosInstance from './axios';

function Notifications() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axiosInstance
            .get(`/userdetails/`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data.data)
            })
            .catch(err => {
                console.log(err)
                alert('You are not logged in, please login and check again.')
            })
    }, [])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <div>
                        <li key={post.id}>First Name - {post.first_name}</li>
                        <li key={post.id}>Last Name - {post.last_name}</li>
                        <li key={post.id}>Email - {post.email}</li>
                        <li key={post.id}>Username - {post.user_name}</li>
                        <li key={post.id}>User Created On - {post.start_date}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Notifications;

