import React, {Component} from 'react'; 
import NavBar from '../navBar';
import DatatablePage from './dataTable';
class Orders extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                <h2>Customer Order History</h2>
                <DatatablePage />
                
                </div>
            </div>

        )
    }
}

export default Orders