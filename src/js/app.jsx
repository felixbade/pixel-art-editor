import React from 'react'
import ReactDOM from 'react-dom'

export default function App() {
    return (
        <h1>Hello there!</h1>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)