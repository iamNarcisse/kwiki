import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const myStyle = {
    fontSize : '28px !important',
    fontFamily : 'arial',
    fontWeight : 'bold'
}
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
                            <Modal.Body style={myStyle}>

                                <li className="active" ><Link style={myStyle} to="/">Home</Link></li>
                                <li><a href="#Categories" style={myStyle}>Categories</a></li>
                                <li><Link to="/food" style={myStyle}>Food</Link></li>
                                <li className="dropdown">
                                    <Link className="dropdown-toogle" data-toggle="dropdown" to="#men" style={myStyle}>Clothes
                                <span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/mencloth" style={myStyle}>Men</Link></li>
                                        <li><Link to="/femalecloth" style={myStyle}>Women</Link></li>

                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link className="dropdown-toogle" data-toggle="dropdown" to="#men" style={myStyle}>Shoes/Sandals
                                <span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/menshoe" style={myStyle}>Men</Link></li>
                                        <li><Link to="/femaleshoe" style={myStyle}>Women</Link></li>

                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toogle" data-toggle="dropdown" href="#Acessories" style={myStyle}>Accessories
                                <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/menaccessories" style={myStyle}>Men</Link></li>
                                        <li><Link to="/womenaccessories" style={myStyle}>Women</Link></li>

                                    </ul>
                                </li>
                                <li><Link to="/store" style={myStyle}>Store</Link></li>
                                <li><Link to="/pickup" style={myStyle}>Pickup & Delivery</Link></li>


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