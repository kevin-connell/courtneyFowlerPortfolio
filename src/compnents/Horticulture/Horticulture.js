import React from 'react';
import Picture from '../Picture';

const Horticulture = () => {

    return (
        <>
            <section className="section" id="summer" /> 
            <div className="picture"></div>
            <div className="picture"></div>
            <div className="picture"></div>
            <div className="picture"></div>
            <section className="section" id="autumn" /> 
            <p>autumn</p>
            <div className="picture"></div>
            <div className="picture"></div>
            <div className="picture"></div>
            <div className="picture"></div>
            <section className="section" id="spring" /> 
            <p>spring</p>
            <div className="picture"></div>
            <div className="picture"></div>
            <div className="picture"></div>
            <div className="picture"></div>
            <Picture caption="This is a test caption" url="https://via.placeholder.com/350x150" fullSize="true"/>
        </>
    );
}

export default Horticulture;