import React from 'react';
export default class Timer extends React.Component {
    constructor (v) {
        super(v)
        this.state = {
            seconds: 0
        };
    }
    
    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>타이머에요!!</h1>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}