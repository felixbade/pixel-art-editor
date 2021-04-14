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
                <div className="nav-item">
                    <Link to="/">Draw</Link>
                </div>
                <div className="nav-item">
                    <Link to="/feed">Feed</Link>
                </div>
            </nav>

            <div className="container">
                <Switch>
                    <Route component={DrawingView} exact path="/" />
                    <Route component={FeedView} exact path="/feed" />
                    <Route component={PageNotFound} path="*" />
                </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)