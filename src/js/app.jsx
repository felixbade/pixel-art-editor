import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { DrawingPage } from './components/DrawingPage'
import { FeedPage } from './components/FeedPage'
import { PageNotFound } from './components/PageNotFound'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route component={DrawingPage} exact path="/" />
                <Route component={FeedPage} exact path="/feed" />
                <Route component={PageNotFound} path="*" />
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)