import React from 'react'
import ReactDOM from 'react-dom/client'

const h1 = <h1 id="title">Hello App</h1>
const p = (
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, nemo a
        nihil ea adipisci veniam debitis eligendi nostrum at, possimus aliquid
        qui mollitia quibusdam illum blanditiis dolore cupiditate sequi! Fugiat!
    </p>
)

const ul = (
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
)

const app = (
    <div>
        {h1}
        {p}
        {ul}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
