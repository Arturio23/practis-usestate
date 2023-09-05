import React from "react";
import "./Tweet.css";

const Tweet = ({ text, onDelete }) => {
    return (
        <div className="tweet">
            <p className="tweet__text">{text}</p>
            <button className="tweet__delete" onClick={onDelete}>
                Видалити
            </button>
        </div>
    );
};

export default Tweet;
