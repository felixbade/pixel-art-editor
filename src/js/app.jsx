import React, {useState} from 'react'
import ReactDOM from 'react-dom'

export default function App() {
    const [color, setColor] = useState(0)

    return (
        <>
            <button onClick={() => setColor(0)}>Empty</button>
            <button onClick={() => setColor(1)}>Color 1</button>
            <button onClick={() => setColor(2)}>Color 2</button>
            <button onClick={() => setColor(3)}>Color 3</button>
            <br/>
            <div>{color}</div>
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)