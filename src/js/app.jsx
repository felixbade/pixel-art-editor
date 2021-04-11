import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export default function App() {
    const [color, setColor] = useState(0)
    const [drawing, setDrawing] = useState(Array(16).fill(Array(16).fill(0)))

    const drawPixel = (x, y, c) => {
        let drawing2 = Array(16)
        drawing.map((row, y) => {
            // Needed for React to re-render
            drawing2[y] = [...row]
        })
        drawing2[y][x] = c
        setDrawing(drawing2)
    }

    return (
        <>
            <button onClick={() => setColor(0)}>Empty</button>
            <button onClick={() => setColor(1)}>Color 1</button>
            <button onClick={() => setColor(2)}>Color 2</button>
            <button onClick={() => setColor(3)}>Color 3</button>
            <br/>
            <div>Drawing with color: {color}</div>
            <table>
                <tbody>
                    {drawing.map((row, y) =>
                        <tr key={y}>
                            {row.map((cell, x) => 
                                <td key={[x, y]} onClick={() => {drawPixel(x, y, color)}}>{cell}</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)