import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/NavBar';

const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
            <Outlet> </Outlet>
        </>
    );
};

export default MainLayout;