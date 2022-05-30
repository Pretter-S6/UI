import React, {useState} from 'react';
import axios from "axios";

class Home extends React.Component {

    state = {
        tweets: ""
    };

    async componentDidMount() {
        var text = process.env.REACT_APP_API_GATEWAY + 'api/tweets';
        const resp = await axios.get(text);
        this.state.tweets = resp.data;

    }

    render() {
        return (
            <div>
                <p>Rienk Engbrenghof</p>
                {this.state.tweets.length > 0 && (
                    <ul>
                        {this.state.tweets.map(tweet => (
                            <li key={tweet.id}>{tweet.text}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default Home;
