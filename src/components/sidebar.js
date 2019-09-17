import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//style
import '../styles/sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container col-3 col-md-2 m-0 d-none d-md-flex flex-sm-column align-items-center">
                <div className="logo-container my-sm-3">
                    DONASI APP
                </div>
                <div className="account-nav d-flex flex-column flex-md-row mb-sm-5 mb-md-0">
                    <div className="dropdown-account-container rounded">
                        <i className="fas fa-user fa-2x py-3 px-3"></i>
                    </div>
                    <div className="dropdown">
                        <a href="#" className="dropdown-trigger dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <p className="m-2">Administrator</p>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="/adminProfile">Profile</a>
                            <a className="dropdown-item" href="/setting">Setting</a>
                        </div>
                    </div>
                </div>
                <div className="menu-container">
                    <ul>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/donatur">Donatur</Link>
                        </li>
                        <li>
                            <Link to="/donasi">Donasi</Link>
                        </li>
                        <li>
                            <Link to="/notifikasi">Notifikasi</Link>
                        </li>
                    </ul>
                </div>
                <div className="signout-container">
                    <a className="d-flex align-items-center">
                        <i className="fas fa-sign-out-alt signout-icon"></i>
                        <p className="my-0 ml-2">Sign Out</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default Sidebar;