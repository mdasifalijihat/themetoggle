import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/shared/footer/Footer';
import Navbar from '../components/shared/navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;