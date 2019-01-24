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
        this.state = {
            pager: {}
        }
    }

    componentWillMount() {
        //set page if items array isn't empty
        console.log(this.props.items, 'I am here')
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //Reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage = (page) => {
        const { items, pageSize } = this.props;
        let  pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {

            return;
        }

        //get new pager object for specified page

     pager = this.getPager(items.length, page, pageSize);

        //get new page of items from items array

        const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        //Update State

        this.setState({ pager: pager });

        //call change page function in parent Component
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {

        //default to first page

        currentPage = currentPage || 1;

        //default page size is 10 

        pageSize = pageSize || 10;

        //calculate total pages

        const totalPages = Math.ceil(totalItems / pageSize);

        var  startPage;
        var endPage;

        if (totalPages <= 10) {
            //Less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            //More than 10 total pages so calculate start and end pages 
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4
            }
        }

        //Calculate start and end item indexes

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        //Create an array of pages to ng-repeat in the pager control

        const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        //Return object with all pager properties required by the view

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

    //Render here

    render() {

        const pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            //don't display pager if there is only 1 page

            return null;
        }

        return (
            <div className="store-filter clearfix">
            <ul className="store-pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a href="#w" onClick={() => this.setPage(1) }>First</a>
                </li>

                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a href="#r" onClick={() => this.setPage(pager.currentPage - 1)}><i className="fa fa-angle-left"></i></a>
                </li>

                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <a href="#u" onClick={() => this.setPage(page)}> {page} </a>
                    </li>
                )}

                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                <a href="#j" onClick={ ()=> this.setPage(pager.currentPage + 1)}><i className="fa fa-angle-right"></i></a>
                </li>

                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a href="#l" onClick={ ()=> this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul></div>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;