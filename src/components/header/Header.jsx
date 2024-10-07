import React, { useState, useEffect } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cardProducts = useSelector(state => state.cart);
    const [cartAnimation, setCartAnimation] = useState(false);

    useEffect(() => {
        if (cardProducts.length > 0) {
            setCartAnimation(true); // Trigger animation when products are added
            setTimeout(() => setCartAnimation(false), 1000); // Remove animation class after 1 second
        }
    }, [cardProducts]);

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand href="#" className="brand-logo">Raees Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link to="/" as={Link} className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link to="/products" as={Link} className="nav-link-custom">Products</Nav.Link>
                        <Nav.Link to="/contact" as={Link} className="nav-link-custom">Contact</Nav.Link>
                        <Nav.Link to="/about" as={Link} className="nav-link-custom">About</Nav.Link>
                    </Nav>

                    <div className="d-flex align-items-center">
                        {/* Cart Link with animated badge */}
                        <Nav.Link to="/cart" as={Link} className={`nav-link-custom cart-link ${cartAnimation ? 'cart-animated' : ''}`}>
                            Cart <span className="cart-count">{cardProducts.length}</span>
                        </Nav.Link>

                        {/* Search Form */}
                        <Form className="d-flex search-form">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 search-input"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" className="search-btn">Search</Button>
                        </Form>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
