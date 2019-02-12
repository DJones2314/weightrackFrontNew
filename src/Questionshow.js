import React from 'react';

import axios from 'axios';

export default class Questionshow extends React.Component {
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
                 {this.state.answers.map((rowdata,i)=>
        <div>{(typeof(rowdata.answers)=='object')?
              
              <div>
                {
                    rowdata.answers.map((subrowdata,k)=>
             <div id="moveText">
              Answer = "{subrowdata.answerdetail}."
              </div>
            )
            }
              </div>
              :
              null
             }
             
             
        
        </div>
                )}</div>
        
               
        );
    }
};