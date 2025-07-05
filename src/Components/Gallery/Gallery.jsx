import React, { useState } from "react";

const images = [
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="container mt-5 text-center pb-5">
            <h2 className="fw-bold mb-4">PORTFOLIO COMPONENT</h2>
            <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="bg-dark" style={{ width: "60px", height: "2px" }}></div>
                <span className="mx-3 fs-4">★</span>
                <div className="bg-dark" style={{ width: "60px", height: "2px" }}></div>
            </div>

            <div className="row g-4">
                {images.map((src, idx) => (
                    <div className="col-md-4" key={idx}>
                        <div
                            style={{
                                height: "250px",
                                cursor: "pointer"
                            }}
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${idx + 1}`}
                                className="img-fluid w-100 h-100"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ height: "100px", backgroundColor: "#fff" }}></div>

            {selectedImage && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    onClick={() => setSelectedImage(null)}
                    style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
                >
                    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content bg-transparent border-0">
                            <button
                                type="button"
                                className="btn-close ms-auto mb-2"
                                onClick={() => setSelectedImage(null)}
                            ></button>
                            <img src={selectedImage} className="img-fluid" alt="Selected" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
