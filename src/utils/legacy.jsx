import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

const defaultProps = {
    initialPage: 1,
    pageSize: 10
}

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        // Set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    //Using ES6 arrow function here inorder to avoid bind(this)
    setPage = (page) => {
        let { items, pageSize } = this.props;

        let pager = this.state.pager;

        if (page < 1 || page > pager.totolPages) {
            return;
        }

        //get new pager object for specified page
        pager = this.getPager(items.length, page, pageSize);

        //get new page of items from items array
        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        //update state ooo
        this.setState({ pager: pager });

        //call change page function in parent component
        this.props.onChangePage(pageOfItems);
    }

    getPager = (totalItems, currentPage, pageSize) => {
        //default to first page
        currentPage = currentPage || 1;

        //default page size is 10

        pageSize = pageSize || 10;

        //Calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage;
        let endPage;

        if (totalPages <= 10) {
            //less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            //more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        //Calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex * pageSize - 1, totalItems - 1);

        //Create an array of pages to ng-repeat in the pager control
        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        //return object with all pager properties required by the view

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    return() {
        let { pager } = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <div className="store-filter clearfix">
                <span className="store-qty">Showing 20-100 products</span>
                <ul className="store-pagination">
                    <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <a href="#m" onClick={() => this.setPage(1)}>First</a>
                    </li>
                    <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <a href="#m"  onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                    </li>
                    {pager.pages.map((page, index) =>
                        <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                            <a href="#m"  onClick={() => this.setPage(page)}>{page}</a>
                        </li>
                    )}
                    <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <a href="#m" onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                    </li>
                    <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <a href="#m"  onClick={() => this.setPage(pager.totalPages)}>Last</a>
                    </li>
                    { /*<li className="active" >1</li>
								<li><a href="#Two">2</a></li>
								<li><a href="#Three">3</a></li>
								<li><a href="#Four">4</a></li>
        <li><a href="#Five"><i className="fa fa-angle-right"></i></a></li> */}
                </ul>
            </div>
        );
    }
}

Pagination.PropTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;