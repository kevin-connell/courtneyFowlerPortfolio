import React, { useEffect } from 'react';

import Picture from '../Picture';
import summer01 from "../../images/horticulture/summer/summer-01.jpg"
import summer02 from "../../images/horticulture/summer/summer-02.jpg"
import summer03 from "../../images/horticulture/summer/summer-03.jpg"
import summer04 from "../../images/horticulture/summer/summer-04.jpg"
import summer05 from "../../images/horticulture/summer/summer-05.jpg"
import summer06 from "../../images/horticulture/summer/summer-06.jpg"
import summer07 from "../../images/horticulture/summer/summer-07.jpg"
import summer08 from "../../images/horticulture/summer/summer-08.jpg"
import summer09 from "../../images/horticulture/summer/summer-09.jpg"
import summer10 from "../../images/horticulture/summer/summer-10.jpg"
import summer11 from "../../images/horticulture/summer/summer-11.jpg"

import autumn01 from "../../images/horticulture/autumn/autumn-01.jpg"
import autumn02 from "../../images/horticulture/autumn/autumn-02.jpg"
import autumn03 from "../../images/horticulture/autumn/autumn-03.jpg"
import autumn04 from "../../images/horticulture/autumn/autumn-04.jpg"
import autumn05 from "../../images/horticulture/autumn/autumn-05.jpg"
import autumn06 from "../../images/horticulture/autumn/autumn-06.jpg"
import autumn07 from "../../images/horticulture/autumn/autumn-07.jpg"
import autumn08 from "../../images/horticulture/autumn/autumn-08.jpg"
import autumn09 from "../../images/horticulture/autumn/autumn-09.jpg"
import autumn10 from "../../images/horticulture/autumn/autumn-10.jpg"
import autumn11 from "../../images/horticulture/autumn/autumn-11.jpg"
import autumn12 from "../../images/horticulture/autumn/autumn-12.jpg"

import winter01 from "../../images/horticulture/winter/winter-1.jpg"
import winter02 from "../../images/horticulture/winter/winter-2.jpg"
import winter03 from "../../images/horticulture/winter/winter-3.jpg"
import winter04 from "../../images/horticulture/winter/winter-4.jpg"
import winter05 from "../../images/horticulture/winter/winter-5.jpg"
import winter06 from "../../images/horticulture/winter/winter-6.jpg"
import winter07 from "../../images/horticulture/winter/winter-7.jpg"
import winter08 from "../../images/horticulture/winter/winter-8.jpg"
import winter09 from "../../images/horticulture/winter/winter-9.jpg"

import spring01 from "../../images/horticulture/spring/spring-1.jpg"
import spring02 from "../../images/horticulture/spring/spring-2.jpg"
import spring03 from "../../images/horticulture/spring/spring-3.jpg"
import spring04 from "../../images/horticulture/spring/spring-4.jpg"

import floral01 from "../../images/horticulture/floral/floral-1.jpg"
import floral02 from "../../images/horticulture/floral/floral-2.jpg"
import floral03 from "../../images/horticulture/floral/floral-3.jpg"
import floral04 from "../../images/horticulture/floral/floral-4.jpg"
import floral05 from "../../images/horticulture/floral/floral-5.jpg"
import floral06 from "../../images/horticulture/floral/floral-6.jpg"
import floral07 from "../../images/horticulture/floral/floral-7.jpg"
import floral08 from "../../images/horticulture/floral/floral-8.jpg"
import ContentTracker from '../ContentTracker';

const Horticulture = (props) => {

    useEffect(() => {
        document.getElementById(props.subcat).scrollIntoView()
    }, []);

    return (
        <>
            <ContentTracker changeSubcat={props.changeSubcat} above="summer" below="summer" />
            <p className="subcatTitle" id="summer">Summer</p>

            <Picture url={summer01} fullSize="true"/> 
            <div className="halfSizeContainer">
                <Picture url={summer03} fullSize="false"/>
                <Picture url={summer04} fullSize="false"/>
            </div>
            <Picture url={summer02} fullSize="true"/>
            <Picture url={summer11} fullSize="true"/>
            <div className="halfSizeContainer">
                <Picture url={summer07} fullSize="false"/>
                <Picture url={summer06} fullSize="false"/>
            </div>
            <Picture url={summer05} fullSize="true"/>
            <div className="halfSizeContainer">
                <Picture url={summer08} fullSize="false"/>
                <Picture url={summer10} fullSize="false"/>
            </div>
            <Picture url={summer09} fullSize="true"/>



            <ContentTracker changeSubcat={props.changeSubcat} above="summer" below="autumn" />
            <p className="subcatTitle" id="autumn">Autumn</p>
            
            <Picture url={autumn02} fullSize="true"/> 
            <div className="halfSizeContainer">
                <Picture url={autumn03} fullSize="false"/>
                <Picture url={autumn01} fullSize="false"/>
            </div>
            <Picture url={autumn09} fullSize="true"/>
            <div className="halfSizeContainer">
                <Picture url={autumn05} fullSize="false"/>
                <Picture url={autumn04} fullSize="false"/>
            </div>
            <Picture url={autumn11} fullSize="true"/>
            <div className="halfSizeContainer">
                <Picture url={autumn07} fullSize="false"/>
                <Picture url={autumn06} fullSize="false"/>
            </div>
            <Picture url={autumn12} fullSize="true"/>
            <div className="halfSizeContainer">
                <Picture url={autumn10} fullSize="false"/>
                <Picture url={autumn08} fullSize="false"/>
            </div>



            <ContentTracker changeSubcat={props.changeSubcat} above="autumn" below="winter" />
            <p className="subcatTitle" id="winter">Winter</p>
            
            <div className="halfSizeContainer">
                <Picture url={winter07} fullSize="false"/>
                <Picture url={winter06} fullSize="false"/>
            </div>
            <div className="halfSizeContainer">
                <Picture url={winter05} fullSize="false"/>
                <Picture url={winter02} fullSize="false"/>
            </div>
            <Picture url={winter01} fullSize="true"/> 
            <div className="halfSizeContainer">
                <Picture url={winter03} fullSize="false"/>
                <Picture url={winter04} fullSize="false"/>
            </div>
            <div className="halfSizeContainer">
                <Picture url={winter09} fullSize="false"/>
                <Picture url={winter08} fullSize="false"/>
            </div>


            <ContentTracker changeSubcat={props.changeSubcat} above="winter" below="spring" />
            <p className="subcatTitle" id="spring">Spring</p>


            <Picture url={spring04} fullSize="true"/>
            <div className="halfSizeContainer">
                <Picture url={spring01} fullSize="false"/>
                <Picture url={spring02} fullSize="false"/>
            </div>
            <Picture url={spring03} fullSize="true"/>




            <ContentTracker changeSubcat={props.changeSubcat} above="spring" below="floral" />
            <p className="subcatTitle" id="floral">Floral</p>
            <div className="halfSizeContainer">
                <Picture url={floral03} fullSize="false"/>
                <Picture url={floral04} fullSize="false"/>
            </div>
            <Picture url={floral01} fullSize="true"/>
            <div className="halfSizeContainer">
                <Picture url={floral02} fullSize="false"/>
                <Picture url={floral05} fullSize="false"/>
            </div>
            <Picture url={floral07} fullSize="true"/>
            <div className="halfSizeContainer">
                <Picture url={floral06} fullSize="false"/>
                <Picture url={floral08} fullSize="false"/>
            </div>
        </>
    );
}

export default Horticulture;