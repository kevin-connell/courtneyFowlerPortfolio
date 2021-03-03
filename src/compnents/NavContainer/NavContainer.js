import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import NavContent from '../NavContent';
import "./NavContainer.css"

const NavContainer = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleClick = (event) => {

        if(props.isMobile === true){
            toggle()
        }

        props.changeCategory(event.target.getAttribute("data-cat"), event.target.getAttribute("data-tag"))

        if(props.category === event.target.getAttribute("data-cat")){

            document.getElementById(event.target.getAttribute("data-tag")).scrollIntoView({ behavior: 'smooth'})

        }

    }

    return (
        <>
            {props.isMobile ?

                <div id="navigation">
                    <h4 style={{padding: "25px 0px 8px 25px"}}>Courtney Fowler</h4>
                    <div style={{position:"absolute", top: "10px", right: "15px"}}>
                        <Hamburger toggled={isOpen} toggle={setIsOpen}/>

                    </div>
                    <Collapse style={{padding: "0px 25px", overflow: "scroll"}} isOpen={isOpen}>
                        <NavContent isMobile={props.isMobile} handleClick={handleClick} category={props.category} subcat={props.subcat}/>
                    </Collapse>
                </div> :

                <>

                <div id="placeholderNav" />
                <div id="desktopNav">
                    <NavContent handleClick={handleClick} category={props.category} subcat={props.subcat}/>
                </div>

                </>
            }
        </>
    );
}

export default NavContainer;