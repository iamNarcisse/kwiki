import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    deadline: PropTypes.number,
    now: PropTypes.number
}


const timeVariables = {
    deadline: new Date('Jan 24, 2019 14:0:0 ').getTime(),
    now: new Date().getTime()
}

class HotDeals extends Component {

    state = {
        display: {}
    }

    componentDidMount() {
        this.counter()
    }

    counter = () => {
        const deadline = timeVariables.deadline;
        const x = setInterval(() => {
            //Calculating Remaining Time
            let now = timeVariables.now
            let time = deadline - now;
            let days = Math.floor(time / (1000 * 60 * 60 * 24));
            let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((time % (1000 * 60)) / 1000);

            // document.getElementById('demo').innerHTML = days + " d" + hours + ' h' + minutes + ' m' + seconds + "s";

            let Timers = {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
            this.setState({
                display: Timers
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
        let { display } = this.state;
        if (display === 'Expired') {
            return (
                <div>
                    {/* HOT DEAL SECTION */}
                    <div id="hot-deal" className="section">
                        {/* container */}
                        <div className="container">
                            {/* row */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="hot-deal">
                                        <ul className="hot-deal-countdown">
                                            <li>
                                                <div>
                                                    <h3>{0}</h3>
                                                    <span>Days</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h3>{0}</h3>
                                                    <span>Hours</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h3>{0}</h3>
                                                    <span>Mins</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h3>{0}</h3>
                                                    <span>Secs</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <h2 className="text-uppercase">hot deal this week</h2>
                                        <p>New Collection Up to 10% OFF</p>
                                        <Link className="primary-btn cta-btn" to="/store">Shop now</Link>
                                    </div>
                                </div>
                            </div>
                            {/* /row */}
                        </div>
                        {/* /container */}
                    </div>
                    {/* /HOT DEAL SECTION */}
                </div>
            )
        }

        return (
            <div>
                {/* HOT DEAL SECTION */}
                <div id="hot-deal" className="section">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hot-deal">
                                    <ul className="hot-deal-countdown">
                                        <li>
                                            <div>
                                                <h3>{display.days}</h3>
                                                <span>Days</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h3>{display.hours}</h3>
                                                <span>Hours</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h3>{display.minutes}</h3>
                                                <span>Mins</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h3>{display.seconds}</h3>
                                                <span>Secs</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <h2 className="text-uppercase">hot deal this week</h2>
                                    <p>New Collection Up to 10% OFF</p>
                                    <Link className="primary-btn cta-btn" to="/store">Shop now</Link>
                                </div>
                            </div>
                        </div>
                        {/* /row */}
                    </div>
                    {/* /container */}
                </div>
                {/* /HOT DEAL SECTION */}
            </div>
        )
    }
}

export default HotDeals;
HotDeals.propTypes = propTypes;