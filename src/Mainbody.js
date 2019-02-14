import React, { Component } from 'react';
import Questionbox from './Questionbox';
import { Route } from 'react-router-dom';
import Home from './Home';
import Tips95 from './Tips95';
import Protips from './Protips';
import User from './User';
import Useranswer from './Useranswer';
import './WeightRoom.jpg';


class Mainbody extends Component {
    render() {
        return (
             <div id="mainBody">
                <Route exact path='/Home' component={Home} />
                <Route exact path='/question' component={Questionbox} />
                <Route exact path='/user' component={User} />
                <Route exact path='/useranswer' component={Useranswer} />
            </div>
        );
    }
}
export default Mainbody;