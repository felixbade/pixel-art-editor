import React, { useEffect, useState } from 'react'

import { getSprites } from '../api'
import { Drawing } from './Drawing'


const colors = ['',
    'hsl(140, 30%, 25%)',
    'hsl(140, 30%, 50%)',
    'hsl(140, 30%, 75%)']

export const FeedView = () => {

    const [drawings, setDrawings] = useState([])

    useEffect(() => {
        getSprites().then((data) => {
            setDrawings(data)
        })
    }, [])

    return (
        <>
            <div className="feed-container">
                {drawings.map((drawing, i) =>
                    <div className="feed-item" key={i}>
                        <Drawing drawing={drawing.graphic} colors={colors} />
                    </div>
                )}
            </div>
        </>
    )
}