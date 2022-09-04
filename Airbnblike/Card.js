import React from 'react'

export default function Card(props){
    return(
        <section className="cardSection">
            <img src={props.item.imageUrl} className="cardImg"/>
            <div className="cardContent">
                <div className="cardTitle">
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className="cardUrl">View on Google Maps</a>
                </div>
                <h1 className="cardMainTitle">{props.item.title}</h1>
                <h2 className="cardMainDate">{props.item.startDate} - {props.item.endDate}</h2>
                <p className="cardMainDes">{props.item.description}</p>
            </div>
        </section>
    )
} 