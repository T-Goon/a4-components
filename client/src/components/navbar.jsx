import React from "react";

const navbar = () => {

    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Navbar">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbars"
                    aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbars">
                </div>
                {/* Right navbar */}

                {
                    user &&
                    <div class="ms-auto">
                        <span class="navbar-text">Hello {user.username}!</span>
                    </div>
                }

                <div class="ms-auto">
                    <ul class="navbar-nav ms-auto">
                        {
                            user &&
                            <>
                                <li class="nav-item">
                                    <a class="nav-link" href="/register">Register</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Login</a>
                                </li>
                            </>
                        }
                        {
                            user &&
                            <li class="nav-item">
                                <a class="nav-link" href="/logout">Logout</a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default navbar;