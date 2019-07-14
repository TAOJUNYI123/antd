import React,{ Component } from 'react'
// import { BrowserRouter as Router,  Route, Redirect} from "react-router-dom";
/* react-router没有IndexRoute */
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Login from '../login'

const History = createBrowserHistory();
class RouterComponent  extends Component{
    render(){
        return(
            <Router history={History}>
                <Route>
                    <Redirect from="/" to="/login"/>
                    <Route path="/login" component={Login}/>
                </Route>
            </Router>
        )
    }
}

export default RouterComponent