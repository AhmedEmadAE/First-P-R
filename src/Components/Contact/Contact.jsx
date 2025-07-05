import React from "react";


export default function Contact() {
    return (
        <section className="py-5 text-center">
            <h2 className="fw-bold text-uppercase text-dark">CONATCT SECTION</h2>
            <div className="d-flex justify-content-center align-items-center my-3">
                <div className="border-top border-2 border-dark w-25 mx-2" />
                <span className="text-dark fs-5">★</span>
                <div className="border-top border-2 border-dark w-25 mx-2" />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="userName" placeholder="userName" />
                                <label htmlFor="userName">userName</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="userAge" placeholder="userAge" />
                                <label htmlFor="userAge">userAge</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="userEmail" placeholder="userEmail" />
                                <label htmlFor="userEmail">userEmail</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input type="password" className="form-control" id="userPassword" placeholder="userPassword" />
                                <label htmlFor="userPassword">userPassword</label>
                            </div>

                            <button type="submit" className="btn btn-success px-4 py-2">
                                send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
