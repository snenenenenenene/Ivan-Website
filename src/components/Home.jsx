import React, { Component } from 'react'
import picture1 from '../pictures/picture1.jpg'
export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="home-content">
                <img className="home-image" style={{opacity: "0.521", zIndex: 200}}src={picture1}/>
                </div>
                <div className="home-text">
                   <h2>PRIVEZWEMLESSEN</h2>
                   <p>Ivan Faes</p>
                </div>
            </div>
        )
    }
}
