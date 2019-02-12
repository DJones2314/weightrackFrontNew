import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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
             <div id="showQuestionAll">
               
                <div><TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Question</TableCell>
            <TableCell align="right">Answer</TableCell>
          </TableRow>
        </TableHead>
            <TableBody>
          
              <TableCell component="th" scope="row">
                { this.state.questions.map(question => <div id="questionName">{question.name}</div>) }
              </TableCell>
              <TableCell align="right">{ this.state.questions.map(question => <div id="questionEmail">{question.email}</div>) }</TableCell>
              <TableCell align="right">{ this.state.questions.map(question => <div id="questionDetail">{question.detail}</div>) }</TableCell>
             
            </TableBody>
          
        
            </div>
            </div>
        );
    }
};