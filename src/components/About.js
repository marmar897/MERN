import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';

function About(){
    return(
        <div> 
        <h1>Welcome To Floreo Labs  </h1>
        <p> I learned to make sure i prioritize my time to make sure i focus on the important parts of the project.</p>
        <ul>
            <li>
                I learned a lot about git and how to make sure i do not create git repos inside of each other :)
            </li>
            <lu> 
                I learned how to follow a tutorial and also how to restructure my code so it fits something found online.
            </lu>
            <li>
                I learned when to ask for help from others and when to sturggle with an issue.
            </li>
            <li> I need to impove on understanding what I am reading and how to ask better questions that will further my understanding!</li>
        </ul>
        </div>
    );

}
export default About;
