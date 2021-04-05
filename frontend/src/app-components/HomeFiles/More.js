
import React from 'react';
import ButtonAppBar from './Header';
import Footer from './Footer';
import MainBody from './MainBody';
import SignUp from '../UserValidation/SignUp';
import SignIn from '../UserValidation/SignIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function More() {
    return (
        <>
            <h1>More...</h1>
        </>
    );
}
export default More
