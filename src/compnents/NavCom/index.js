import React, { useState } from 'react';
import {
    Collapse,
    NavbarBrand,
} from 'reactstrap';
import "./NavCom.css"

const NavCom = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleClick = (event) => {
        document.getElementById(event.target.getAttribute("data-tag")).scrollIntoView();
    }

    return (
        <>
            {props.isMobile ?

                <div id="navigation">
                    <NavbarBrand href="/">Mobile</NavbarBrand>
                    <div onClick={toggle}>Expand</div>
                    <Collapse isOpen={isOpen}>
                        <h5>Number One</h5>
                        <h5>Number Two</h5>
                        <h5>Number Three</h5>
                        <h5>Number 4</h5>
                    </Collapse>
                </div> :

                <>

                <div id="placeholderNav">

                </div>

                <div id="desktopNav">
                    <div>
                        <h4>Courtney Fowler</h4>
                        <h5 class="category">Horticulture</h5>
                        <h6 class="subcat">Summer</h6>
                        <h6 class="subcat">Autumn</h6>
                        <h6 class="subcat">Winter</h6>
                        <h6 class="subcat">Spring</h6>
                        <h6 onClick={handleClick} data-tag="bottomPic" class="subcat">Floral</h6>

                        <h5 class="category">Photography</h5>
                        <h6 class="subcat">Smiles Beach Photo</h6>

                        <h5 class="category">Filmmaking</h5>
                        <h6 class="subcat">eSteem</h6>
                        <h6 class="subcat">Hard Nipples</h6>
                        <h6 class="subcat">Relapse</h6>
                        <h6 class="subcat">Time</h6>
                        <h6 class="subcat">Trendy</h6>
                        <h6 class="subcat">Production Design</h6>
                        <h6 class="subcat">Art Direction</h6>

                        <h5 class="category">Contact</h5>
                    </div>
                </div>

                </>
            }
        </>
    );
}

export default NavCom;