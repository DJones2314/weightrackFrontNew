import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
             <div>
                <ol id="navBar">
                    <div className="pushNavItems">
                        <NavLink className="navItem" exact to="/Home">Home</NavLink>
                        <li id="journey" className="dropbtn"><a href="">Nine to Fiver</a>
                            
                                <div className="dropdown-content">
                                    <NavLink exact to="/question">Nutrition</NavLink>
                                    <NavLink exact to="/user">User Questions</NavLink>
                                    <NavLink exact to="/useranswer">User Answers</NavLink>
                                </div>
                            </li>
                            
                        <li id="journey" className="dropbtn"><a href="">Nightshift owl</a><div className="dropdown-content">
                                    <NavLink exact to="/url">Nutrition</NavLink>
                                    <NavLink exact to="/url">Routine</NavLink>
                                    <NavLink exact to="/url">Tips</NavLink>
                                </div>
                            </li>
                        <li id="journey" className="dropbtn"><a href="">Sloppy Student</a><div className="dropdown-content">
                                    <NavLink exact to="/url">Nutrition</NavLink>
                                    <NavLink exact to="/url">Routine</NavLink>
                                    <NavLink exact to="/url">Tips</NavLink>
                                </div>
                            </li>
                        <li id="journey" className="dropbtn"><a href="">Contact</a><div className="dropdown-content">
                                    <NavLink exact to="/url">Email</NavLink>
                                    <NavLink exact to="/url">Find Us</NavLink>
                                    <NavLink exact to="/url">GitHub</NavLink>
                                </div>
                            </li>
                    </div>
                </ol>
            </div>
        );
    }
};
