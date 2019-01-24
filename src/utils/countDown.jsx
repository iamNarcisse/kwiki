import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    deadline: PropTypes.number,
    now: PropTypes.number
}

const timeVariables = {
    deadline: new Date('Jan 24, 2019 14:0:0 ').getTime(),
    now: new Date().getTime()
}

export default class Timer extends Component {

    state = {
    }

    componentDidMount() {
        this.counter();
    }

    counter = () => {
        const deadline = timeVariables.deadline;
        const x = setInterval( () => {
            //Calculating Remaining Time
            let now = timeVariables.now
            let time = deadline - now;
            let days = Math.floor(time / (1000 * 60 * 60 * 24));
            let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((time % (1000 * 60)) / 1000);

            // document.getElementById('demo').innerHTML = days + " d" + hours + ' h' + minutes + ' m' + seconds + "s";

           this.setState({
                display: days + " D " + hours + " H " + minutes + " M " + seconds + " S "
            })

            if (time < 0) {
                clearInterval(x);
                this.setState({
                    display: 'Expired'
                })
                // document.getElementById('demo').innerHTML = 'EXPIRED';
            }
        }, 1000);

    }

    render() {
        const { display } = this.state;

        return (
            <div>
                { display }
            </div>
        )
    }
}

Timer.propTypes = propTypes;