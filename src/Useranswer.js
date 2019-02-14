import React, { Component } from 'react';
import axios from 'axios';
import Questionshow from './Questionshow';
import Questionvue from './Questionvue';
import Answervue from './Answervue';

export default class Useranswer extends Component {
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
                <div id="questionview">
                    <Answervue />
                </div>
                    
               </div>
        );
    }
};