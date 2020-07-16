import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";
import { bindActionCreators } from "redux";

import { formatTweet, formatDate } from "../utils/helpers";
import { handleLike } from "../actions/tweets";

class Tweet extends Component {
  state = {};

  handleLikeToggle = () => {
    const { tweet, authedUser, handleLike } = this.props;
    handleLike({
      id: tweet.id,
      authedUser,
      hasLiked: tweet.hasLiked,
    });
  };

  render() {
    const { tweet } = this.props;

    if (tweet === null) {
      return <p>This Tweet doesn't exist!</p>;
    }

    const {
      name,
      timestamp,
      text,
      avatar,
      likes,
      replies,
      hasLiked,
      parent,
    } = tweet;

    return (
      <div className="tweet">
        <img className="avatar" src={avatar} alt={`Avatar of ${name}`} />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            <button className="replying-to">
              {parent ? `Replying to @${parent.author}` : null}
            </button>
            <p>{text}</p>
          </div>

          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleLikeToggle}>
              {hasLiked ? (
                <TiHeartFullOutline className="tweet-icon" color="e0245e" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets, users, authedUser }, { tweetId }) => {
  const tweet = tweets[tweetId];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
    authedUser,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleLike }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
