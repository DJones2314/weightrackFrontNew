import React, { Component } from 'react';
import axios from 'axios';
import Questionshow from './Questionshow';

export default class Questionbox extends React.Component {
   state = {
    detail: '',
    name: '',
    email: ''
  }

    handleChange = event => {
    this.setState({ detail: event.target.value,
                    });}
    handleChange1 = event => {
    this.setState({ name: event.target.value,
                    });}
    handleChange2 = event => {
    this.setState({ email: event.target.value,
                    });}
    

  handleSubmit = event => {
    event.preventDefault();

    const detail = {
      detail: this.state.detail
    }
    const name = {
      name: this.state.name
    }
    const email = {
      email: this.state.email
    }     
  
    axios.post('http://localhost:8080/api/question', { 
    email: this.state.email,
    name: this.state.name,
    detail: this.state.detail    
     }).then(res => {
        console.log(res);
        console.log(res.data);
      });
  }
    render() {
        return (
            <div>
                <div id="nutrition">
                   <h1> GIVE FAT THE BOOT - LESS CARBS, MORE PROTEIN</h1>
                    <p>Successful muscle definition is the result of three elements: Building muscle, maintaining the newly built muscle and the right nutrition.

In many athletes, who have already built plenty of muscle mass, the individual muscle groups are often difficult to recognise. Muscle definition doesn’t mean increasing your weight training to build more muscles.

The key to muscle definition is actually the right diet. If you body fat percentage is too high, not even the best workout plan can help.

You need to burn body fat in combination with the right diet and additional endurance exercises. </p>
                </div>
                <div id="questionBox">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input className="questione" name="email" type="text" placeholder="please enter your email" onChange={this.handleChange2} />
                        </label>
                        <label>
                            <input className="questionn" name="name" type="text" placeholder="please enter your name" onChange={this.handleChange1} />
                        </label>
                        <label>    
                            <textarea name="detail" id="detail"             placeholder="What is your Question?" onChange=  {this.handleChange} />
                        </label>
                            <button type="submit">GO!</button>
                    </form>
                </div>
                    
            </div>
        );
    }
};
 