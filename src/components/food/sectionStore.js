import React, {Component} from 'react';
import StoreFilter from './storeFilter';
import StoreProducts from './storeProducts';

class SectionStore extends Component {

    render() {
        return(

            <div id="store" className="col-md-9">
            <StoreFilter />
            <StoreProducts />
           
            </div>

        )
    }
}
export default SectionStore;