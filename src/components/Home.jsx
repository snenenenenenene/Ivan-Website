import React, { Component } from 'react'
import picture1 from '../pictures/picture1.jpg'
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-content">
                <img className="home-image" style={{opacity: "0.8"}}src={picture1}/>
                </div>
            </div>
        )
    }
}
