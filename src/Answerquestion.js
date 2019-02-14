import React, { Component } from 'react';
import axios from 'axios';

export default class Answerquestion extends React.Component {
   state = {
    answerdetail: '',
    questionID: '',
    answeremail: '',
    answername: ''   
  }

    handleChange = event => {
    this.setState({ answerdetail: event.target.value,
                    });}
    handleChange1 = event => {
    this.setState({ answeremail: event.target.value,
                    });}
    handleChange2 = event => {
    this.setState({ questionID: event.target.value,
                    });}
    handleChange3 = event => {
    this.setState({ answername: event.target.value,
                    });}
   
    

  handleSubmit = event => {
    event.preventDefault();

    const answerdetail = {
      answerdetail: this.state.answerdetail
    }
    const questionID = {
      questionID: this.state.questionID
    }
    const answeremail = {
      answeremail: this.state.answeremail
    }
    const answername = {
      answername: this.state.answername
    }
    
         
  
    axios.post('http://localhost:8080/api/answer', { 
    answeremail: this.state.answeremail,
    answername: this.state.answername,
    answerdetail: this.state.answerdetail,
    questionID: this.state.questionID    
     }).then(res => {
        console.log(res);
        console.log(res.data);
      });
  }
  render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <label>
                            <input className="questione" name="questionID" type="text" placeholder="please enter question ID" onChange={this.handleChange2} />
                        </label>
                        <label>
                            <input className="questione" name="answeremail" type="text" placeholder="please enter your email" onChange={this.handleChange1} />
                        </label>
                        <label>
                            <input className="questionn" name="answername" type="text" placeholder="please enter your name" onChange={this.handleChange3} />
                        </label>
                        <label>
                            <textarea className="questionn" name="answerdetail" placeholder="please enter your answer" onChange={this.handleChange} />
                        </label>
                        
                            <button type="submit">GO!</button>
                    </form>
            </div>
            )
  }
}