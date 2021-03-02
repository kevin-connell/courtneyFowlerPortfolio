import React from 'react';
import "./Picture.css"

const PictureDisplay = (props) => {

    return (
        <>
        <img className={props.fullSize ? "fullSize" : "halfSize"} src={props.url} alt={props.caption} ></img>
        <p>{props.caption}</p>
        </>
    );
}

export default PictureDisplay;