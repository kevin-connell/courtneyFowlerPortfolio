import React, { useEffect } from 'react';
import Picture from '../Picture';

import smiles01 from "../../images/photography/smiles/smiles-01.jpg"
import smiles02 from "../../images/photography/smiles/smiles-02.jpg"
import smiles03 from "../../images/photography/smiles/smiles-03.jpg"
import smiles04 from "../../images/photography/smiles/smiles-04.jpg"
import smiles05 from "../../images/photography/smiles/smiles-05.jpg"
import smiles06 from "../../images/photography/smiles/smiles-06.jpg"
import smiles07 from "../../images/photography/smiles/smiles-07.jpg"
import smiles08 from "../../images/photography/smiles/smiles-08.jpg"
import smiles09 from "../../images/photography/smiles/smiles-09.jpg"
import smiles10 from "../../images/photography/smiles/smiles-10.jpg"
import smiles11 from "../../images/photography/smiles/smiles-11.jpg"
import smiles12 from "../../images/photography/smiles/smiles-12.jpg"
import smiles13 from "../../images/photography/smiles/smiles-13.jpg"
import smiles14 from "../../images/photography/smiles/smiles-14.jpg"
import smiles15 from "../../images/photography/smiles/smiles-15.jpg"
import smiles16 from "../../images/photography/smiles/smiles-16.jpg"
import smiles17 from "../../images/photography/smiles/smiles-17.jpg"
import smiles18 from "../../images/photography/smiles/smiles-18.jpg"
import smiles19 from "../../images/photography/smiles/smiles-19.jpg"
import smiles20 from "../../images/photography/smiles/smiles-20.jpg"

const Photography = (props) => {

    useEffect(() => {
        document.getElementById(props.subcat).scrollIntoView()
    }, []);

    return (
        <>
            <section className="section" id="smiles" />
            <p>Smiles Beach Photo</p>

            <Picture url={smiles01} fullSize="true"/> 
            <Picture url={smiles02} fullSize="true"/> 
            <Picture url={smiles03} fullSize="true"/> 
            <Picture url={smiles04} fullSize="true"/> 
            <Picture url={smiles05} fullSize="true"/> 
            <div className="halfSizeContainer">
                <Picture url={smiles06} fullSize="false"/>
                <Picture url={smiles14} fullSize="false"/>
            </div>
            <Picture url={smiles07} fullSize="true"/> 
            <Picture url={smiles08} fullSize="true"/> 
            <Picture url={smiles09} fullSize="true"/> 
            <div className="halfSizeContainer">
                <Picture url={smiles10} fullSize="false"/>
                <Picture url={smiles16} fullSize="false"/>
            </div>
            <Picture url={smiles11} fullSize="true"/> 
            <Picture url={smiles12} fullSize="true"/> 
            <Picture url={smiles13} fullSize="true"/> 
            <Picture url={smiles15} fullSize="true"/> 
            <Picture url={smiles17} fullSize="true"/> 
            <Picture url={smiles18} fullSize="true"/> 
            <div className="halfSizeContainer">
                <Picture url={smiles19} fullSize="false"/>
                <Picture url={smiles20} fullSize="false"/>
            </div>
        </>
    );
}

export default Photography;