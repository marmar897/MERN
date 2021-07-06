import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import SearchField from './SearchField';

function Homepage(){
    return(
        <div>
        <h1>Welcome To Floreo Labs  </h1>
        <div >
        <SearchField/>
       </div>
       </div>
         
    );

}
export default Homepage;
