import React from "react"

export default function Card(props) {
    return (
        <div className="card--outer">
            <img src={`../images/${props.imageUrl}`} className="card--image" />
            <div className="card--inner">
                <div className="card--top">
                    <i className="fa-solid fa-location-dot fa-2xs"></i>
                    <span className="card--location">{props.location.toUpperCase()}</span>
                    <a className="card--link" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h4 className="card--date">{props.startDate} - {props.endDate}</h4>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}