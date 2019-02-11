import React, { Component } from 'react';
import axios from 'axios';


export default class Tips95 extends Component {
    state = {
    answers: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/questions/`)
      .then(res => {
        const answers = res.data;
        this.setState({ answers });
      })
  }

    
    render() {
        return (
             <div id="tips95">
                <div id="answerBox">    
                    { this.state.answers.map(answer => <div id="answerWords">{answer.detail}</div>
        )}
                </div>
            </div>
        );
    }
};
