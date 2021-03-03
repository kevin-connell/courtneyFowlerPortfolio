import React from 'react';
import "./Picture.css"

const PictureDisplay = (props) => {

    return (
        <>
        <img className={props.fullSize == "true" ? "fullSize" : "halfSize"} src={props.url} alt={props.caption} ></img>
        {props.caption? <p>{props.caption}</p> : ""}
        </>
    );
}

export default PictureDisplay;