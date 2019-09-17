import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

class BurgerNav extends Component {

    state = {
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    render() {
        return (
            <Router>
                <MDBContainer className="d-md-none">
                    <MDBNavbar color="lighten-4" style={{ marginTop: '20px', background: 'transparent' }} light>
                        <MDBContainer>
                            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
                            <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
                                <NavbarNav left>

                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                                <span className="mr-2">Administrator</span>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem>
                                                    <MDBNavLink to="/adminProfile">Profile</MDBNavLink>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem>
                                                    <MDBNavLink to="/setting">Setting</MDBNavLink>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem>
                                                    <MDBNavLink to="">
                                                        <div className="d-flex ">
                                                            {/* <i className="fas fa-sign-out-alt"></i> */}
                                                            <p className="my-0">Sign Out</p>
                                                        </div>
                                                    </MDBNavLink>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBNavLink to='/'>Dashboard</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to='/donatur'>Donatur</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to='/donasi'>Donasi</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to='/notifikasi'>Notifikasi</MDBNavLink>
                                    </MDBNavItem>
                                </NavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </MDBContainer>
            </Router>
        )
    }
}

export default BurgerNav;