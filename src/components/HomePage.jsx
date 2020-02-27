import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar'
import { Link } from 'react-router-dom';

class HomePage extends Component {

    state = {
        currentStory: [],
        searchTerms: [],
        ready: false
    }


    showTheQuote = () => {
        return <p>{this.props.randomQuote}</p>
    }


    filterTheQuote = () => {
        let filteredQuote = this.props.randomQuote.toString().toLowerCase();
        let extraFilter = filteredQuote.replace(/[.…?!:;',‘’]/g, "");
        let uselessWordArray = [
            "a", "at", "be", "cant", "are", "could", "for",
            "do", "does", "how", "id", "i", "in", "is", "many", "much", "of",
            "on", "or", "should", "shouldnt", "so", "such", "the",
            "them", "they", "to", "us", "we", "what", "who", "why",
            "with", "wont", "would", "wouldnt", "you", "going", "less",
            "because", "no", "too", "only", "and", "its", "its", "me", "one", "get",
            "theres", "way", "an", "when", "from", "which", "about", "being",
            "that", "unless", "but", "every", "this", "if", "use", "some", "have",
            "all", "was", "have", "just", "my", "has", "then", "by", "try", "not",
            "doesnt", "had", "let", "dont", "really", "like", "will",
            "into", "under", "three", "wanna", "now", "things", "want",
            "here", "never", "your", "good", "youre", "puts", "put", "until", "im", "please",
            "thank", "without", "heres", "says", "ill", "go", "began", "before", "any",
            "over", "can", "been", "whats", "he", "his", "except", "still",
            "always", "am", "call", "same", "time", "there", "it", "youve",
            "ive", "their", "where", "people", "need", "four", "five", "six", "something",
            "anything", "everything", "zero", "dear", "got", "between", "each", "our", "good", 
            "great", "belong", "keep", "little", "name", "know", "anyone",
            "notice", "complete", "proper", "own", "bad", "word", "idea", "capable",
            "amount", "tom", "april", "andy", "andys", "leslie", "gary", "larry", "jerry",
            "donna", "believe", "acceptable", "other", "guy", "once",
            "ever", "official", "demonstrate", "simple", "man", "serve", "me...but",
            "people:"

        ];

        let expStr = uselessWordArray.join("|")
        let finalQuote = extraFilter.replace(new RegExp('\\b(' + expStr + ')\\b', 'gi'), ' ').replace(/\s{2,}/g, ' ');
        // console.log(finalQuote);
        let searchTerms = finalQuote.split(' ');
        if (searchTerms[0] === "") {
            searchTerms.splice(0, 1)
        }
        if (searchTerms[searchTerms.length - 1] === "") {
            searchTerms.splice(searchTerms.length - 1, 1)
        }
        if (searchTerms[0] === "[") {
            searchTerms.splice(0, 2)
        }
        console.log(searchTerms)

        if (searchTerms.length === 1) {
            axios.get(`https://content.guardianapis.com/search?q=(${searchTerms[0]})&api-key=f9d94560-e043-4ddc-ae02-fa498b85b806`).then(res => {
                console.log(res)
                this.setState({
                    currentStory: res.data.response.results,
                    ready: true
                })
            })
        }
        if (searchTerms.length === 2) {
            axios.get(`https://content.guardianapis.com/search?q=(${searchTerms[0]}%20${searchTerms[1]})&api-key=f9d94560-e043-4ddc-ae02-fa498b85b806`).then(res => {
                console.log(res)
                this.setState({
                    currentStory: res.data.response.results,
                    ready: true
                })
            })
        }
        if (searchTerms.length === 3) {
            axios.get(`https://content.guardianapis.com/search?q=(${searchTerms[0]}%20${searchTerms[1]}%20${searchTerms[2]})&api-key=f9d94560-e043-4ddc-ae02-fa498b85b806`).then(res => {
                console.log(res)
                this.setState({
                    currentStory: res.data.response.results,
                    ready: true
                })
            })
        }
        if (searchTerms.length >= 4) {
            axios.get(`https://content.guardianapis.com/search?q=(${searchTerms[0]}%20${searchTerms[1]}%20${searchTerms[2]}%20${searchTerms[3]})&api-key=f9d94560-e043-4ddc-ae02-fa498b85b806`).then(res => {
                console.log(res)
                this.setState({
                    currentStory: res.data.response.results,
                    ready: true
                })
            })
        }
    }

    showTheStories = () => {
        return this.state.currentStory.slice(0, 3).map(eachStory => {
            return (
                <>
                    <Link to={{ pathname: `article/${eachStory.webUrl}`, state: { url: eachStory.webUrl } }}>
                        <div className="storyLinks">{eachStory.webTitle}</div>
                    </Link>
                </>
            );
        });
    }



    render() {
        return (
            <div className="homeBody">
                <div className="nav">
                    <NavBar />
                </div>
                <div className="quote">
                    <img className="ronleft" alt="ronfacehere" src="./assets/ronface.png" />
                    <div className="innerquote">
                        <p>{this.showTheQuote()}</p>
                    </div>
                    <img className="ronright" alt="otherfacehere" src="./assets/ronface.png" />
                </div>
                {console.log(this.state.searchTerms)}
                {this.state.searchTerms && this.state.currentStory.length === 0 && this.filterTheQuote()}
                <div className="stories">
                    {this.state.ready ? (
                        this.showTheStories()

                    ) : ("loading...")}
                </div>
            </div>
        );
    }
}

export default HomePage;