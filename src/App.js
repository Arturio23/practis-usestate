import React, { useState } from "react";
import "./App.css";
import TweetForm from "./components/tweetForm/TweetForm";
import TweetList from "./components/tweetList/TweetList";


function App() {
    const [tweets, setTweets] = useState([]);

    const addTweet = (text) => {
        setTweets([...tweets, text]);
    };

    const deleteTweet = (index) => {
        const updatedTweets = [...tweets];
        updatedTweets.splice(index, 1);
        setTweets(updatedTweets);
    };

    return (
        <div className="App">
            <h1>Міні-копія Twitter</h1>
            <TweetForm onAdd={addTweet} />
            <TweetList tweets={tweets} onDelete={deleteTweet} />
        </div>
    );
}

export default App;
