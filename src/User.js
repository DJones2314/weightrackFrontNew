import React, { Component } from 'react';
import axios from 'axios';
import Questionvue from './Questionvue';

export default class User extends Component {
    state = {
    answers: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/answers/`)
      .then(res => {
        const answers = res.data;
        this.setState({ answers });
      })
  }

    
    render() {
        return (
             <div id="tips95">
                <div id="questionview">
                    <Questionvue />
                </div>
                <div id="answerBox">    
                    { this.state.answers.map(answer => <div id="answerWords">{answer.detail}</div>
        )}
                </div>
            </div>
        );
    }
};