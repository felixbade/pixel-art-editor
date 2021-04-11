import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const colors = ['', '#444', '#777', '#bbb']

export default function App() {
    const [color, setColor] = useState(2)
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
            <button onClick={() => setColor(0)}>Transparent</button>
            <button onClick={() => setColor(1)} style={{ background: colors[1] }}>Color 1</button>
            <button onClick={() => setColor(2)} style={{ background: colors[2] }}>Color 2</button>
            <button onClick={() => setColor(3)} style={{ background: colors[3] }}>Color 3</button>
            <br/>
            <div>Drawing with color: {color}</div>
            <table cellSpacing="0">
                <tbody>
                    {drawing.map((row, y) =>
                        <tr key={y}>
                            {row.map((cell, x) => 
                                <td key={[x, y]} onMouseDown={() => {drawPixel(x, y, color)}} onMouseMove={(event => {if (event.buttons === 1) drawPixel(x, y, color)})} style={{ background: colors[cell] }}></td>
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