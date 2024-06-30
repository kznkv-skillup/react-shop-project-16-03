import React from 'react'
import ReactDOM from 'react-dom/client'

// Arrow Function
const Title = () => <h1>Hello Title Component</h1>

const Content = () => (
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime hic
        facilis libero assumenda aperiam dolor animi nobis suscipit tempora vel,
        explicabo iusto laborum? Similique ratione rem quia. Consequuntur, nobis
        doloribus.
    </p>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
        <Content />
    </React.StrictMode>
)
