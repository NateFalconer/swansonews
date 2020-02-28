import React, { Component } from 'react';
import NavBar from './NavBar'
class About extends Component {
    render() {
        return (
            <div className="aboot">
            <NavBar />
            <div className="abtext">
            <h2>Swansonews is a single-page application built in React.</h2>
            <br />
            <p>It works by fetching a random quote from a Ron Swanson quote API, then filtering the quote into searchable terms and plugging those terms into a search in The Guardian's API. It then scrapes the news article data and formats the article text.</p>
            <p>This project was developed by Nate Falconer.</p>
            <a href="https://github.com/jamesseanwright/ron-swanson-quotes" target="_blank">Ron Swanson Quotes API</a> <br />
            <a href="https://open-platform.theguardian.com/" target="_blank">The Guardian Open Platform</a> <br />
            <a href="https://github.com/NateFalconer/swansonews" target="_blank">GitHub</a>
            </div>
            <img className="pyr" alt="pyra" src="./assets/pyramid.png" /> <br />
            <img className="dance" alt="dancin" src="./assets/dancin.gif" />
            </div>
        );
    }
}

export default About;