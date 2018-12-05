import React, {Component} from 'react';
import Axios from 'axios';

class Distance extends Component {
    constructor (props) {
        super(props);
        this.state = {
            start : '',
            destination: ''
        }
    }

    onChangeStart = (e) => {
        e.preventDefault()
        this.setState({
         [e.target.name] : e.target.value
        })
        
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        const API_KEY = 'AIzaSyBYtOM1_lTN5-8Z6R355rqFanOcqtptQSo'
        const url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Ibadan&destinations=lagos&key=" + API_KEY;
        Axios.get(url)
        .then(axiosResonse => {
            console.log(axiosResonse)
        })
        .catch(err => {console.log(err)})
    }
    render () {
        return(
            <div>

                <h2>Pick & Delivery</h2>
                <form>
                  <p>Start : <input type="text" name="start" value={this.state.start} onChange={this.onChangeStart}/></p>  
                    <p>Destination : <input type="text" name="destination" id="" value={this.state.destinantion} onChange={this.onChangeStart}/></p>
                    <button type="submit" onClick={ this.onSubmit}>Submit</button>
                </form>

            </div>
        )
    }
}
export default Distance;