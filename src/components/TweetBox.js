import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "../firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    function addToDatabase(msg = tweetMessage, img = tweetImage) {
      db.collection("posts").add({
        displayName: "Drey Wesson",
        username: "dreywesson",
        verified: true,
        text: `${msg}`,
        image: `${img}`,
        avatar: "https://source.unsplash.com/400x300/?avatar",
      });
    }
    if (tweetMessage) {
      addToDatabase();
    } else {
      const tweet = prompt(
        "Message field cant be empty!",
        "Enter your tweet message..."
      );
      tweet && addToDatabase(tweet);
    }
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      {" "}
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://source.unsplash.com/400x300/?avatar" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
