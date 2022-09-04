import React from "react"
import Title from "./Navb.js"
import Data from "./data.js"
import Card from "./Card.js"
export default function App(){
    let cards = Data.map(item=>{
        return(
            <Card item={item}/>
        )
    })
    console.log(cards)
    return(
        <div className="appDiv">
            <Title/>
            {cards}
        </div>
    )
}