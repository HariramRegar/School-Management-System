import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';

function SignOut() {
    const history = useHistory();

    useEffect(() => {
        const response = axiosInstance.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        }).catch((error) => {
            console.log(error);
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('userDetails');
        axiosInstance.defaults.headers['Authorization'] = null;
        history.push('/login');
        window.location.reload(); 
    });
    return <div>Logout</div>;
}
export default SignOut;