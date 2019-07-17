import React,{ Component } from 'react'
// import { BrowserRouter as Router,  Route, Redirect} from "react-router-dom";
/* react-router没有IndexRoute */
import { Router, Route, Redirect } from 'react-router-dom';
// import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Login from '../login'
import Register from '../pages/register'

const History = createBrowserHistory();
class RouterComponent  extends Component{
    render(){
        return(
            <Router history={History}>
                <Route>
                    <Redirect from="/" to="/login"/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Route>
            </Router>
        )
    }
}

export default RouterComponent