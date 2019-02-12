import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

class Table extends Component {

componentDidMount() {
    axios.get(`http://localhost:8080/api/questions/`)
      .then(res => {
        const questions = res.data;
        this.setState({ questions });
      })
  }


render() {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Question</TableCell>
            <TableCell align="right">Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );

 /*<div id="questionDetails">    
                    { this.state.questions.map(question => <div id="questionName">Name = {question.name}</div>) }
                    { this.state.questions.map(question => <div id="questionEmail">Email address = {question.email}</div>) }
                    { this.state.questions.map(question => <div id="questionDetail">Question = "{question.detail}"</div>) }
                </div>*/


}


};
export default withStyles(styles)(SimpleTable);