import React from "react";

export default function Main(props) {
  return (
    <div className="main">
      <div className="div--image">
        <img src={props.imageUrl} alt="" className="image" />
      </div>
      <div className="content">
        <p><i class="material-icons">place</i>{props.location} &emsp; <a href={props.googleMapsUrl} className="link">Google Maps</a></p>
        <h1>{props.title}</h1>
        <p>{props.startDate} - {props.endDate}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
