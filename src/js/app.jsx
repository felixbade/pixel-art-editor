import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { DrawingView } from './components/DrawingView'
import { FeedView } from './components/FeedView'
import { PageNotFound } from './components/PageNotFound'

export default function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Draw</Link>
                    </li>
                    <li>
                        <Link to="/feed">Feed</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route component={DrawingView} exact path="/" />
                <Route component={FeedView} exact path="/feed" />
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