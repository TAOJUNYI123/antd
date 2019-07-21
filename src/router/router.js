import React,{ Component } from 'react'
// import { BrowserRouter as Router,  Route, Redirect} from "react-router-dom";
/* react-router没有IndexRoute */
import { Router, Route, Redirect,Switch } from 'react-router-dom';
// import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Login from '../login'
import Register from '../pages/register'
import Home from '../pages/home'

const History = createBrowserHistory();
class RouterComponent  extends Component{
    render(){
        return(
            <Router history={History}>
                <Switch>
                    <Redirect exact from="/" to="/login"/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterComponent