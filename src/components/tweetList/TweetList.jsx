import React from "react";
import "./TweetList.css";
import Tweet from "../tweet/Tweet";

const TweetList = ({ tweets, onDelete, onRefresh }) => {
    return (
        <form className="tweet-list">
            <button className="tweet-list__refresh" onClick={onRefresh}>
                Оновити
            </button>
            {tweets.map((tweet, index) => (
                <Tweet key={index} text={tweet} onDelete={() => onDelete(index)} />
            ))}
        </form>
    );
};

export default TweetList;
