import React, { Component } from 'react';
import { category, searchMeQuery } from '../services/apiRequest';
import { Modal, Button } from 'react-bootstrap';
import { Card, CardActions, CardText, CardTitle } from 'react-mdl';
import { Link } from 'react-router-dom';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            show: false,
            products: []
        }
    }

    handleClose = () => {
        this.setState({ show: false });
    }
    onChange = (e) => {
        this.setState({
            query: e.target.value.trim()
        })
    }

    onHandleShow = (e) => {
        e.preventDefault();
        searchMeQuery(this.state.category, this.state.query)
            .then(AxiosRes => {
                this.setState({
                    products: AxiosRes.data.data
                }, () => this.setState({ show: true }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    getCategory = (e) => {
        let category = e.target.value;
        this.setState({
            category: category
        })
    }


    render() {
        return (
            <div className="col-md-6">
                <div className="header-search">
                    <form>
                        <select className="input-select" onChange={this.getCategory}>
                            {category.map((item, index) => {
                                return (
                                    <option key={index} value={item} > {item} </option>
                                )
                            })}

                            {/*<option value="1">Food</option>
                            <option value="1">Shoes</option>
                            <option value="1">Sandals</option>
                            <option value="1">Cakes</option>
                            <option value="1">Clothes</option>
                            <option value="1">Accessories</option> */}
                        </select>
                        <input onChange={this.onChange} className="input" placeholder="Search here" />
                        <button onClick={this.onHandleShow} className="search-btn">Search</button>
                        {
                            this.state.show && (
                                <div>
                                    <Modal show={this.state.show} onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Search Result</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>
                                                {this.state.products.map(item => {
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
                                            <Button onClick={this.handleClose}>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            )}
                    </form>
                </div>

            </div>
        )
    }
}

export default SearchBar;