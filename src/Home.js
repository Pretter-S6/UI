import React, {useState} from 'react';
import axios from "axios";

class Home extends React.Component {

    state = {
        tweets: []
    };

    componentDidMount() {
        var text = process.env.REACT_APP_API_GATEWAY + 'api/tweets';
        axios.get(text)
            .then(res => {
                const tweets = res.data;
                this.setState({ tweets });
            })
    }


    render() {
        const tweets = this.state.tweets;
        return (
            <div>
                <p>Rienk Engbrenghof</p>
                <div>
                    {tweets.map(tweet => {
                        return(
                            <p>{tweet.id + " " + tweet.text}</p>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default Home;
