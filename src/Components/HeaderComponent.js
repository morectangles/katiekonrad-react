import React, { Component } from 'react';
import { Jumbotron, Nav, Navbar, NavItem } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <div className="container">
                <Jumbotron />
                <hr class="my-1" />
                <header>
                    <div className="container">
                        <Nav className="navbar navbar-expand navbar-light justify-content-center">
                            <Navbar>
                                <NavItem>
                                    <a class="nav-link" href="#">home </a>
                                </NavItem>
                                <NavItem>
                                    <a class="nav-link" href="#">works </a>
                                </NavItem>
                                <NavItem>
                                    <a class="nav-link" href="#">about </a>
                                </NavItem>
                                <NavItem>
                                    <a class="nav-link" href="#">cv </a>
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