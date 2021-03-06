
import React from 'react';
import ButtonAppBar from './Header'
import Footer from './Footer'
import MainBody from './MainBody'
import SignUp from '../UserValidation/SignUp';
import SignIn from '../UserValidation/SignIn';
import AboutUs from './AboutUs';
import More from './More';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Notifications from '../Notification/Notifications';
import SignOut from '../UserValidation/SignOut';
import CreateNotification from '../Notification/CreateNotification';
import UsersCard from '../Admin/UsersCard';
import AdminDashboard from '../Admin/AdminDashboard';
import TeacherDashboard from '../Admin/TeacherDashboard';
import StudentDashboard from '../Admin/StudentDashboard';
import StudentsDetail from '../Admin/StudentsDetail';
import TeachersDetail from '../Admin/TeachersDetail';


function Home() {
    return (
        <>
            {/* <ButtonAppBar /> */}
            <Switch>
                <Route exact path="/" component={MainBody} />
                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signout" component={SignOut} />
                <Route path="/about" component={AboutUs} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/createNotifications" component={CreateNotification} />
                <Route path="/dashboard" component={AdminDashboard} />
                <Route path="/student" component={StudentDashboard} />
                <Route path="/teacher" component={TeacherDashboard} />
                <Route path="/teachers" component={TeachersDetail} />
                <Route path="/Students" component={StudentsDetail} />
            </Switch>
            {/* <Footer /> */}
        </>
    );
}
export default Home;
