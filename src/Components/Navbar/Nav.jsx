import React from "react";
import { Link, useLocation } from "react-router";

export default function Nav() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#2C3E50" }}>
            <div className="container">
                <Link className="navbar-brand fw-bold text-white" to="">
                    <h2>Ahmed Emad</h2>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ms-auto d-flex gap-2">
                        <Link to="/about">
                            <button
                                className={`btn ${location.pathname === "/about" ? "btn-success" : "btn-outline-light"}`}
                            >
                                About
                            </button>
                        </Link>

                        <Link to="/gallery">
                            <button
                                className={`btn ${location.pathname === "/gallery" ? "btn-success" : "btn-outline-light"}`}
                            >
                                Portfolio
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button
                                className={`btn ${location.pathname === "/contact" ? "btn-success" : "btn-outline-light"}`}
                            >
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
