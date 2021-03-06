import React, { Component } from 'react';
import { LoginRequest } from "../../services/apiRequest";
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer : false
        }
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        
    }

    onClick = (e) => {
        e.preventDefault();
        console.log(this.state);
        LoginRequest(this.state.email, this.state.password)
            .then(axiosRes => {
                console.log(axiosRes.data.message);
                if (axiosRes && axiosRes.data && axiosRes.data.data) {
                    localStorage.setItem(
                        "user_token",
                        axiosRes.data.data.token
                    );
                    localStorage.setItem(
                        "user_details",
                        JSON.stringify(axiosRes.data.data)
                    );
                    this.setState({
                        redirectToReferrer : true
                    });
                   // window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({ response: 'Invalid Email/Password' }, () => { this.setState({ showError: true }) })
            });
    }

    render() {

        let { from } = this.props.location.state || {from : {pathname : "/pay"}};
        let { redirectToReferrer } = this.state;

        if(redirectToReferrer) return <Redirect to={from}/>
        return (
            <div className="row" >
                <div className="col-xs-11 col-md-6 col-sm-8 give" style={{ marginRight: '70px', marginTop: '40px' }}>
                    <form >
                        <h2>Login</h2>
                        {this.state.showError === true && (<p style={{ color: 'red' }}>{this.state.response}</p>)}
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" onChange={this.onChange} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" onChange={this.onChange} name="password" className="form-control" placeholder="Password" />
                        </div>

                        <center><button onClick={this.onClick} type="submit" className="btn" style={{ backgroundColor: '#ff0066', color: '#fff' }}>Login</button></center>

                    </form></div></div>

        )
    }
}
export default SignIn;