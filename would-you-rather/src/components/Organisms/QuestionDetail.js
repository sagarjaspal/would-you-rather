import React, { Component } from "react";
import { connect } from "react-redux";

import UserCard from "../Atoms/UserCard";
import { withRouter } from "react-router-dom";

class QuestionDetail extends Component {
  state = {};

  componentDidMount() {
    const { user } = this.props;
    if (user === null) {
      const { history } = this.props;
      return history.push("/login");
    }
  }

  render() {
    const { user, question } = this.props;

    return (
      <div className="home-container">
        <UserCard avatar={user.avatarURL}>
          <div className="column">
            <h3>Would You Rather</h3>
            <div className="row">
              <input
                className="option-btn column-md-12"
                type="button"
                name="optionOne"
                value={question.optionOne.text}
              />
            </div>
            <div className="row">
              <input
                className="option-btn column-md-12"
                type="button"
                name="optionTwo"
                value={question.optionTwo.text}
              />
            </div>
          </div>
        </UserCard>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions }, { match }) => {
  const id = match.params.id;
  const authedUser = "sarahedo";

  return {
    user: authedUser !== null ? users[authedUser] : null,
    question: questions[id],
    authedUser: authedUser,
    id: id,
  };
};

export default withRouter(connect(mapStateToProps, null)(QuestionDetail));
