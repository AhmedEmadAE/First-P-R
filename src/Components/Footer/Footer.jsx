import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <footer className="text-white text-center text-lg-start" style={{ backgroundColor: '#2C3E50' }}>
                <div className="container p-4 pb-0">
                    <div className="row text-center text-md-start">
                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase fw-bold">LOCATION</h5>
                            <p className="mb-1">2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>

                        <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
                            <h5 className="text-uppercase fw-bold mb-3">AROUND THE WEB</h5>
                            <div className="d-flex gap-3">
                                <a href="#" className="btn btn-outline-light rounded-circle">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="btn btn-outline-light rounded-circle">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="btn btn-outline-light rounded-circle">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" className="btn btn-outline-light rounded-circle">
                                    <FaGlobe />
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <h3 className="text-uppercase fw-bold">ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: '#1A252F' }}>
                    Copyright © Ahmed Emad 2025
                </div>
            </footer>
        </>
    );
}
