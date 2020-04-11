import React, { Component } from 'react';
import { Jumbotron, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import nameWritten from '../media/namewritten.png';

class Header extends Component {
    render() {
        return(
            <div className="container">
                <Jumbotron className="bg-transparent mt-2">
                    <Link to="/home" >
                        <img src={nameWritten} height="auto" className="" />
                    </Link>
                </Jumbotron>
                <hr class="my-1" />
                <header>
                    <div className="container">
                        <Nav className="navbar navbar-expand navbar-light justify-content-center">
                            <Navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">home </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/works">works </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">about </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/cv">cv </NavLink>
                                </NavItem>
                            </Navbar>
                        </Nav>
                    </div>
                </header>
                <hr class="my-1" />
            </div>
        )
    }
}

export default Header;