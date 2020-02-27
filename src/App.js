import React, {Component} from 'react';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Article from './components/Article'
import About from './components/About'

class App extends Component {
  
  state = {
    topStories: [],
    popularStories: [],
    randomQuote: [],
    ready: false
  }

  // guardian api key: f9d94560-e043-4ddc-ae02-fa498b85b806

  componentDidMount() {
    //   axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YRBTUrHKNAXud2ybgqO5kVXXfBPF8zzA`).then(res => {
    //       this.setState({
    //       newsStories: res.data,
    //       ready: true
    //     });
    //   });
    
    // axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=YRBTUrHKNAXud2ybgqO5kVXXfBPF8zzA`).then(res => {
    //   this.setState({
    //     popularStories: res.data,
    //     ready: true
    //   });
    // });
    
    axios.get(`http://ron-swanson-quotes.herokuapp.com/v2/quotes`).then(res => {
        this.setState({
        randomQuote: res.data,
        ready: true
      })
    })
  }
  
  render() {
    //  console.log(this.state.newsStories)
    //  console.log(this.state.popularStories)
    //  console.log(this.state.randomQuote)
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" render={props => 
            <HomePage {...props} randomQuote={this.state.randomQuote}/>} />
        <Route path="/article" 
              render={props => 
            <Article {...props}/>
          }
         />
        <Route path="/about" 
              render={props => 
            <About {...props}/>
          }
         />
        </Switch>
      </div>
  );
}
}
export default App;
