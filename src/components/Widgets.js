import { Search } from "@material-ui/icons";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div>
      <div className="widgets">
        <div className="widgets__input">
          <Search className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="dreywesson"
            options={{ height: 400 }}
          />

          <TwitterTweetEmbed tweetId={"1320089767896285184"} />
          <TwitterTweetEmbed tweetId={"1321107935636971520"} />

          <TwitterShareButton
            url={"https://facebook.com/cleverprogrammer"}
            options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
