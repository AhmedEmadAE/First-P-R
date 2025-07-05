import React from 'react'
import Navbar from '.././Navbar/Nav.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}