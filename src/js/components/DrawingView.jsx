import React, { useState, useEffect, useRef } from 'react'

import { getSprites, postSprite } from '../api'
import { Drawing } from './Drawing'

const colors = ['',
    'hsl(140, 30%, 25%)',
    'hsl(140, 30%, 50%)',
    'hsl(140, 30%, 75%)']

export const DrawingView = () => {
    const [color, setColor] = useState(2)
    const [drawing, setDrawing] = useState(Array(16).fill(Array(16).fill(0)))

    const ref = useRef(null)

    const drawPixel = (x, y, c) => {
        if (x < 0 || x >= 16 || y < 0 || y >= 16 || x === undefined || y === undefined) return
        let drawing2 = Array(16)
        drawing.map((row, y) => {
            // Needed for React to re-render
            drawing2[y] = [...row]
        })
        drawing2[y][x] = c
        setDrawing(drawing2)
    }

    const onTouchMove = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        const element = ref.current
        element.addEventListener('touchmove', onTouchMove, { passive: false })
        return () => {
            element.removeEventListener('touchmove', onTouchMove, { passive: false })
        }
    }, [])

    useEffect(() => {
        const hash = window.location.hash.substring(1)
        if (hash.startsWith('sprite=')) {
            const drawingId = parseInt(hash.substring(7))
            getSprites().then(data => {
                setDrawing(data[drawingId].graphic)
            })
        }
    }, [])

    return (
        <>
            <button onClick={() => setColor(0)} className={color === 0 ? 'selected': ''}>Transparent</button>
            <button onClick={() => setColor(1)} style={{ background: colors[1] }} className={color === 1 ? 'selected': ''}>Color 1</button>
            <button onClick={() => setColor(2)} style={{ background: colors[2] }} className={color === 2 ? 'selected': ''}>Color 2</button>
            <button onClick={() => setColor(3)} style={{ background: colors[3] }} className={color === 3 ? 'selected': ''}>Color 3</button>
            <br/>
            <table cellSpacing="0" className="drawing" ref={ref}>
                <tbody>
                    {drawing.map((row, y) =>
                        <tr key={y}>
                            {row.map((cell, x) => 
                                <td
                                    key={[x, y]}
                                    data-x={x}
                                    data-y={y}
                                    onMouseDown={() => {drawPixel(x, y, color)}}
                                    onMouseMove={(event => {if (event.buttons === 1) drawPixel(x, y, color)})}
                                    onTouchMove={(event) => {
                                        event.preventDefault()
                                        const touch = event.touches[0]
                                        const x = touch.clientX
                                        const y = touch.clientY
                                        const element = document.elementFromPoint(x, y)
                                        const px = element.dataset.x
                                        const py = element.dataset.y
                                        drawPixel(px, py, color)
                                    }}
                                    style={{ background: colors[cell] }}
                                >
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
            <input type="text" value={JSON.stringify(drawing)} onChange={(event) => setDrawing(JSON.parse(event.target.value))}></input>
            <button onClick={() => { postSprite({ graphic: drawing }) } }>Publish</button>
            <br/>
            <br/>
            <table cellSpacing="0">
                <tbody>
                    {Array(4).fill(null).map((_, i) => i).map((y) =>
                        <tr key={y}>
                            {Array(4).fill(null).map((_, i) => i).map((x) =>
                                <td key={[x, y]}>
                                    <Drawing drawing={drawing} colors={colors} />
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}