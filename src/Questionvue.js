import React, { Component } from 'react';
import axios from 'axios';


export default class Questionvue extends Component {
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
             <div id="answerBox">
                <div id="">    
                    { this.state.questions.map(question => <div id="answerWords">{question.detail}</div>) }
                </div>
            </div>
        );
    }
};