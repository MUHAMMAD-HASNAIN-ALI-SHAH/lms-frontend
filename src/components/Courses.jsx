import React, { useState } from 'react';
import Navbar from './features/Navbar';
import TopCourse from './features/TopCourse';
import Footer from './features/Footer';

function Courses() {
    

    return (
        <>
            <Navbar />
            <TopCourse/>
            <Footer/>
        </>
    );
}

export default Courses;
