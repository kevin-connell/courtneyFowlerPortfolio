import React, { useEffect, useState } from "react";
import NavCom from "../compnents/NavCom";
import PictureDisplay from "../compnents/PictureDisplay";

function getWidth() {
    const { innerWidth: width} = window;
    return width < 768 ? true : false ;
}

function Home() {

    const [isMobile, setIsMobile] = useState(getWidth());

    useEffect(() => {
        function handleResize() {
            setIsMobile(getWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <NavCom isMobile={isMobile} />
            <PictureDisplay isMobile={isMobile} />
        </>
    );
}

export default Home;