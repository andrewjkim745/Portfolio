import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Portfolio2 from '../Portfolio2'
import Resume from '../Resume'


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio2}/>
            <Route exact path="/resume" component={Resume}/>
        </Switch>
    )
}