import React from "react";

const Photo = props => (
    <div>
        <h3>{props.photo.title}</h3>
        <img src={props.photo.hdurl} alt={props.photo.title} />
        <p>{props.photo.explanation}</p>
    </div>
);

export default Photo