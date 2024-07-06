import React from 'react'
import ReactDOM from 'react-dom/client'

// Arrow Function
const Title = () => <h1>Hello Title Component</h1>

const Content = () => (
    <div>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime hic
            facilis libero assumenda aperiam dolor animi nobis suscipit tempora
            vel, explicabo iusto laborum? Similique ratione rem quia.
            Consequuntur, nobis doloribus.
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime hic
            facilis libero assumenda aperiam dolor animi nobis suscipit tempora
            vel, explicabo iusto laborum? Similique ratione rem quia.
            Consequuntur, nobis doloribus.
        </p>
    </div>
)

const App = () => {
    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
