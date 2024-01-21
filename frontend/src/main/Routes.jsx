import React from 'react'
import {Route, Redirect, Switch} from "react-router";
import {BrowserRouter} from 'react-router-dom'
import Home from '../components/home/home'
import UserCrud from '../components/user/UserCrud';



export default props => 
    <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/users" component={UserCrud} />
            <Redirect from="*" to='/' />
    </Switch>