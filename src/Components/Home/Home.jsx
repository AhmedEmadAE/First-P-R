import React from "react";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={`vh-100 d-flex flex-column justify-content-center align-items-center text-dark ${styles.fontCustom}`} style={{ backgroundColor: "#1abc9c" }}>
            <div
                className="p-5 text-center"
                style={{
                    color: "#fff",
                    paddingTop: "80px",
                    paddingBottom: "80px"
                }}
            >
                <img
                    src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
                    className="rounded-circle mb-4 shadow"
                    alt="Section Icon"
                    width="130"
                    height="130"
                />
                <h1 className="fw-bold mb-3">Ahmed Emad</h1>
                <div className="d-flex align-items-center justify-content-center mb-3">

                    <div className="bg-light" style={{ height: "5px", width: "80px" }}></div>
                    <span className="mx-3 fs-4">★</span>
                    <div className="bg-light" style={{ height: "5px", width: "80px" }}></div>
                </div>
                <p className="mb-0 fs-5">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    );
}

export default Home;