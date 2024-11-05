/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../assets/css/header.css";

const HeaderAbout = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <i class="bi bi-alarm-fill"></i> 0 minutes
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="bi bi-star-half"></i> In-progress
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            You don't have any incomplete exercises!
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    <i class="bi bi-card-list"></i> Notes
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="bi bi-person-circle"></i> Users
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Public profile
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Account information
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Notification
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Comments
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Favorite lessons
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Change password
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Change Email
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Log out
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="bi bi-brightness-high-fill"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <i class="bi bi-brightness-high-fill"></i> Light
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <i class="bi bi-moon-fill"></i> Dark
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex" role="search"></form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderAbout;