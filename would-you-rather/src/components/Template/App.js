import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../Organisms/Login";
import Home from "../Organisms/Home";
import QuestionDetail from "../Organisms/QuestionDetail";

function App() {
  return (
    <div className="container-fluid">
      <Login />

      {/* <Question
        avatar="https://avatars.dicebear.com/api/female/sarahedo.svg"
        author="Sagar Jaspal"
        text="Be an early riser or night owl"
      /> */}
      <Switch>
        <Route exact path="/">
          <Home authedUser="sarahedo" />
        </Route>
        <Route exact path="/questions/:id" component={QuestionDetail} />
      </Switch>
    </div>
  );
}

export default App;
