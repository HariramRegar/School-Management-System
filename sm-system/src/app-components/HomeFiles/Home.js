
import React from 'react';
import ButtonAppBar from './Header'
import Footer from './Footer'
import MainBody from './MainBody'
import SignUp from '../UserValidation/SignUp';
import SignIn from '../UserValidation/SignIn';


function Home() {
    return (
        <>
            <ButtonAppBar />
            {/* <MainBody /> */}
            {/* <SignUp /> */}
            <SignIn />
            <Footer />
        </>
    );
}
export default Home
