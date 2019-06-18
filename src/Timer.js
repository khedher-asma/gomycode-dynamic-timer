import React from 'react';
import { Button } from 'reactstrap'; 
import './Timer.css'

const milliSecondsToTime = (totalMilliSeconds) => {
    const seconds = totalMilliSeconds / 1000 % 60
    const minutes = Math.floor(totalMilliSeconds / 60000 % 60)//Math.floor enlève la virgule
    const hours = Math.floor(totalMilliSeconds/3600000)
    return {
        seconds,//in js prop-name == prop-values just write the value returned
        minutes,
        hours
    }
}
const formatTime = (totalMilliSeconds) => {
    const timeObject = milliSecondsToTime (totalMilliSeconds)
    return (
        String(timeObject.hours).padStart(2 , '0') + ':' +
        String(timeObject.minutes).padStart(2, '0') + ':' +
        String(timeObject.seconds).padStart(2,'0')
    )
}
class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            milliSeconds: 0
        };
        setInterval(() => {
            this.setState({
                milliSeconds: this.state.milliSeconds + 1000});
        },1000)
    }
    // 

    render(){
        return ( 
        <div className="d-flex flex-column border-container">
            <div className="d-flex justify-content-center counter">
                <h3>{formatTime(this.state.milliSeconds)}</h3>
            </div>
            <div className="d-flex justify-content-center counter-description">
                <p className="d-flex hours-description">Hour</p>
                <p className="d-flex minutes-description">Minute</p>
                <p className="d-flex seconds-description">Second</p>
            </div>
            <div className="d-flex justify-content-center btn-section">
                <Button outline className="first-btn">Start</Button>
                <Button outline className="second-btn">Reset</Button>
            </div>
        </div>
        )
    }
}
export default Timer;