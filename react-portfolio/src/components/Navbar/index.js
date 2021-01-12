import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return ( 
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Brianna Hebeler</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="../../Contact/">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="../../Portfolio/">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="../../About/">About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navi;