import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

class MenuToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="menu-toggle" data-toggle="modal" data-target="#myModal" >
                <a href="#menu" onClick={this.handleShow} >
                    <i className="fa fa-bars"></i>
                    <span>Menu</span>
                </a>
                {this.state.show && (
                    <div>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Categories</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <li className="active"><Link to="/">Home</Link></li>
                                <li><a href="#Categories">Categories</a></li>
                                <li><Link to="/cakes">Cakes</Link></li>
                                <li className="dropdown">
                                    <Link className="dropdown-toogle" data-toggle="dropdown" to="#men">Clothes
                                <span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/mencloth">Men</Link></li>
                                        <li><Link to="/femalecloth">Women</Link></li>

                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link className="dropdown-toogle" data-toggle="dropdown" to="#men">Shoes/Sandals
                                <span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/menshoe">Men</Link></li>
                                        <li><Link to="/femaleshoe">Women</Link></li>

                                    </ul>
                                </li>
                                <li><Link to="/food">Food</Link></li>
                                <li className="dropdown">
                                    <a className="dropdown-toogle" data-toggle="dropdown" href="#Acessories">Accessories
                                <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/menaccessories">Men</Link></li>
                                        <li><Link to="/womenaccessories">Women</Link></li>

                                    </ul>
                                </li>
                                <li><Link to="/store">Store</Link></li>
                                <li><Link to="/pickup">Pickup & Delivery</Link></li>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )}
            </div>
        )
    }
}

export default MenuToggle;