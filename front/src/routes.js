import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={Home} />


            </Switch>
        </BrowserRouter>
    );
}


export default Routes;
