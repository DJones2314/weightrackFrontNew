import React from 'react';

import axios from 'axios';

export default class Questionshow extends React.Component {
  state = {
    questions: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/questions/`)
      .then(res => {
        const questions = res.data;
        this.setState({ questions });
      })
  }

  render() {
    return (
      <div id="questions">
        <p>{this.state.questions.map(question => <div>{question.detail}</div>)}</p>
      </div>
    )
  }
};
