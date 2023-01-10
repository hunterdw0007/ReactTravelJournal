import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {
    const Cards = data.map(item => <Card key={item.id} {...item} />)
    return (
        <div>
            <Nav />
            <section>
                {Cards}
            </section>
        </div>
    )
}