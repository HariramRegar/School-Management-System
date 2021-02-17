
import React from 'react';
import ButtonAppBar from './Header'
import Footer from './Footer'
import MainBody from './MainBody'
import SignUp from '../UserValidation/SignUp';
import SignIn from '../UserValidation/SignIn';
import AboutUs from './AboutUs'
import More from './More'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Notifications from '../Notifications';
import SignOut from '../UserValidation/SignOut';


function Home() {
    return (
        <>
            <ButtonAppBar />
            <Switch>
                <Route exact path="/" component={MainBody} />
                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signout" component={SignOut} />
                <Route path="/about" component={AboutUs} />
                <Route path="/notifications" component={Notifications} />
            </Switch>
            <Footer />
        </>
    );
}
export default Home
