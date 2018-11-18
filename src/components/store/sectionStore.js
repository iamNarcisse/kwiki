import React, {Component} from 'react';
import StoreFilter from './storeFilter';
import StoreProducts from './storeProducts';
import StorePagination from './storePagination';

class SectionStore extends Component {

    render() {

        return(

            <div id="store" className="col-md-9">
            <StoreFilter />
            <StoreProducts />
            <StorePagination />
            </div>

        )
    }
}
export default SectionStore;