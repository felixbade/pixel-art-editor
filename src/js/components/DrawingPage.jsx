import React from 'react'
import { Link } from 'react-router-dom'

import { DrawingView } from './DrawingView'

export const DrawingPage = () => {
    return (
        <>
            <nav>
                <div className="nav-item nav-item-active">
                    Draw
                </div>
                <div className="nav-item">
                    <Link to="/feed">Feed</Link>
                </div>
            </nav>

            <div className="container">
                <DrawingView />
            </div>
        </>
    )
}