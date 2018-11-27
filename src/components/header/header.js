import React from "react";

import{Navbar, NavItem, Row} from 'react-materialize';
import{NavLink} from 'react-router-dom';

const Header = () => (
    <Row>
        <Navbar className="grey darken-2">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/contact">Contato</NavItem>
        </Navbar>
    </Row>
);

export default Header;