import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/header-navigation.css';
import { Link, NavLink } from "react-router-dom";

const navLinks = [
    {
        path: '/cars',
        display: 'Vehiculos'
    },

    {
        path: '/serviceslist',
        display: 'Servicios'
    },

    {
        path: '/total',
        display: 'Factura'
    },
]

const HeaderNavigation = () => {
    return (
        <header className="header-navigation">
            <Container>
                <Row>
                    <Col>
                        <div className="navigation_heder">
                            <div className='menu'>
                                {
                                    navLinks.map((item, index) => (
                                        <NavLink to={item.path} className={navClass => navClass.isActive ? "nav_active_h nav_item_h" : "nav_item_h"}
                                            key={index}> {item.display} </NavLink>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default HeaderNavigation;