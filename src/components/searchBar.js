import React, {  Suspense, Component, lazy } from 'react';
import { category, searchMeQuery } from '../services/apiRequest';
import Loading from '../utils/loading';
const SearchModal = lazy(()=> import('../modals/searchModal'));
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

        const { show, products } = this.state;
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
                            show && (
                                <div>
                                    <Suspense fallback={<Loading />}>
                                    <SearchModal products={products} show={show} handleClose={this.handleClose} />
                                    </Suspense>
                                </div>
                            )}
                    </form>
                </div>

            </div>
        )
    }
}

export default SearchBar;