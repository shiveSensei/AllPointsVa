import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
        <Navbar inverse fixedTop fluid collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={'/'}>VaHelpDesk.Web</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to={'/'} exact>
                        <NavItem>
                            <Glyphicon glyph='home' /> Home
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to={'/hardwares'}>
                      <NavItem>
                        <Glyphicon glyph='education' /> Hardwares
                      </NavItem>
                    </LinkContainer>

                    <LinkContainer to={'/addHardwares'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Add Hardwares
                      </NavItem>
                    </LinkContainer>

                    <LinkContainer to={'/facilities'}>
                      <NavItem>
                        <Glyphicon glyph='th-list' /> Facilities
                      </NavItem>
                    </LinkContainer>

                    <LinkContainer to={'/addfacilities'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Add Facilities
                      </NavItem>
                    </LinkContainer>
                </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
