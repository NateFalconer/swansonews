import React, { Component } from 'react';
import cheerio from 'cheerio'
import axios from 'axios'
import NavBar from './NavBar'

class Article extends Component {
    state={
        text:'',
        title:'',
        lede:'',
        imgUrl:'',
    }
    componentDidMount() {
        console.log(this.props)
        axios.get(`https://cors-anywhere.herokuapp.com/${this.props.location.state.url}`)
            .then((response) => {
                if (response.status === 200) {
                    const html = response.data;
                    const $ = cheerio.load(html);
                    let title = $('.content__headline').text();
                    let lede = $('.content__standfirst > p').text();
                    let imgUrl = $('img.responsive-img')[0].attribs.src;
                    let pArray = []
                    $('.content__article-body > p').each(function(i, e){
                        pArray.push(<p key={i}>{$(this).text()}</p>);
                    });
                    this.setState({title: title, imgUrl: imgUrl, lede: lede, text: pArray})
                }
            }, (error) => console.log(error));
    }
    render() {
        return (
            <div>
            <div className="nav">
            <NavBar />
            </div>
            <div className="articleText">
                {/* <h1>{this.state.title}</h1> */}
                <h2>{this.state.lede}</h2>
                <br />
                <div className="apic">
                <img className="articlePic" src={this.state.imgUrl} />
                </div>
                {this.state.text}
            </div>
            </div>
        );
    }
}

export default Article;