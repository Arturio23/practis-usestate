import React, { useState } from "react";
import "./TweetForm.css";

const TweetForm = ({ onAdd }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== "") {
            onAdd(text);
            setText("");
        }
    };

    return (
        <div className="tweet-form" onSubmit={handleSubmit}>
      <input
          className="tweet-form__input"
          placeholder="Напишіть свій твіт..."
          value={text}
          onChange={(e) => setText(e.target.value)}
      />
            <button className="tweet-form__submit" type="submit">
                Додати твіт
            </button>
        </div>
    );
};

export default TweetForm;
