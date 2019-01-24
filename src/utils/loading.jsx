import React from 'react';
import './loading.css';
const myStyle = {
    width : '60px',
    height: '60px'
}
class Loading extends React.Component {
    render() {
        return (
            <div className="lds-css ng-scope">
                <div style={myStyle} className="lds-dual-ring"><div></div>
                </div></div>
        );
    }
}
export default Loading;