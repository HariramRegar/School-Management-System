
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
import EditDetailsPage from '../Admin/EditDetailsPage';


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
                {/* for admin */}
                <Route path="/admin-notifications" component={Notifications} />
                <Route path="/createNotifications" component={CreateNotification} />
                <Route path="/admin-dashboard" component={AdminDashboard} />
                <Route path="/admin-student" component={StudentDashboard} />
                <Route path="/admin-teacher" component={TeacherDashboard} />
                <Route path="/admin-teachers" component={TeachersDetail} />
                <Route path="/admin-Students" component={StudentsDetail} />
                <Route path="/admin-attendance" component={StudentsDetail} />
                {/* for teacher */}
                <Route path="/teacher-notifications" component={Notifications} />
                <Route path="/teacher-createNotifications" component={CreateNotification} />
                <Route path="/teacher-dashboard" component={AdminDashboard} />
                <Route path="/teacher-student" component={StudentDashboard} />
                <Route path="/teacher-Students" component={StudentsDetail} />
                <Route path="/teacher-attendance" component={StudentsDetail} />
                {/* for student */}
                <Route path="/student-notifications" component={Notifications} />
                <Route path="/student-createNotifications" component={CreateNotification} />
                <Route path="/student-dashboard" component={AdminDashboard} />
                <Route path="/student-student" component={StudentDashboard} />
                <Route path="/student-attendance" component={StudentsDetail} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/editmydetails" component={EditDetailsPage} />
            </Switch>
            {/* <Footer /> */}
        </>
    );
}
export default Home;
