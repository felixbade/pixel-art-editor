import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const colors = ['',
    'hsl(140, 30%, 25%)',
    'hsl(140, 30%, 50%)',
    'hsl(140, 30%, 75%)']

// eslint-disable-next-line react/prop-types
const Drawing = ({ drawing }) => {
    return (
        <table cellSpacing="0" className="small">
            <tbody>
                {/* eslint-disable-next-line react/prop-types */}
                {drawing.map((row, y) =>
                    <tr key={y}>
                        {row.map((cell, x) => 
                            <td key={[x, y]} style={{ background: colors[cell] }}></td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    )
}

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
            <button onClick={() => setColor(0)} className={color === 0 ? 'selected': ''}>Transparent</button>
            <button onClick={() => setColor(1)} style={{ background: colors[1] }} className={color === 1 ? 'selected': ''}>Color 1</button>
            <button onClick={() => setColor(2)} style={{ background: colors[2] }} className={color === 2 ? 'selected': ''}>Color 2</button>
            <button onClick={() => setColor(3)} style={{ background: colors[3] }} className={color === 3 ? 'selected': ''}>Color 3</button>
            <br/>
            <table cellSpacing="0" className="drawing">
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
            <input type="text" value={JSON.stringify(drawing)} onChange={(event) => setDrawing(JSON.parse(event.target.value))}></input>

            <br/>
            <br/>
            <table cellSpacing="0">
                <tbody>
                    {Array(4).fill(null).map((_, i) => i).map((y) =>
                        <tr key={y}>
                            {Array(4).fill(null).map((_, i) => i).map((x) =>
                                <td key={[x, y]}>
                                    <Drawing drawing={drawing} />
                                </td>
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