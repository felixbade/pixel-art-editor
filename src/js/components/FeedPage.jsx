import React from 'react'
import { Link } from 'react-router-dom'

import { FeedView } from './FeedView'

export const FeedPage = () => {
    return (
        <>
            <nav>
                <div className="nav-item">
                    <Link to="/">Draw</Link>
                </div>
                <div className="nav-item nav-item-active">
                    Feed
                </div>
            </nav>

            <div className="container">
                <FeedView />
            </div>
        </>
    )
}