import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { Card, CardActions, CardText, CardTitle } from 'react-mdl';
export default (props) => {
    return (
        <LazyLoad height={100}><Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Search Result</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {props.products.map(item => {
                        return (
                            <div key={item._id}>

                                <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                    <CardTitle expand style={{ color: '#ff0066', height: '200px ', background: `url(${item.image}) bottom right 15% no-repeat #46B6AC` }}>{item.name}</CardTitle>
                                    <CardText style={{ color: '#ff0066' }}>
                                        {item.name}
                                    </CardText>
                                    <CardText>
                                        {item.details}
                                    </CardText>
                                    <CardText>&#8358;{item.price}</CardText>
                                    <CardActions border>
                                        <Link to={`/productview/${item._id}`} className="btn" style={{ backgroundColor: '#ff0066', color: '#fff' }}>View</Link>
                                    </CardActions>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal></LazyLoad>
    )
}

