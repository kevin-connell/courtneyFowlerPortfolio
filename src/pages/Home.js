import React, { useEffect, useState } from "react";
import Horticulture from "../compnents/Horticulture";
import NavContainer from "../compnents/NavContainer";
import Photography from "../compnents/Photography";

function getWidth() {
    const { innerWidth: width} = window;
    return width < 768 ? true : false ;
}

function Home() {

    const [isMobile, setIsMobile] = useState(getWidth());
    const [category, setCategory] = useState("horticulture");
    const [subcat, setSubcat] = useState("summer");

    const changeCategory = (newcat, newsubcat) => {
        console.log(`category changed to ${newcat}\nsubcat changed to ${newsubcat} `)
        setSubcat(newsubcat);
        setCategory(newcat);
    }

    const changeSubcat = (newsubcat) => {
        console.log(`subcat changed to ${newsubcat}`)
        setSubcat(newsubcat);
    }

    useEffect(() => {
        function handleResize() {
            setIsMobile(getWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <NavContainer category={category} subcat={subcat} changeCategory={changeCategory} isMobile={isMobile} />
            <main className="contentContainer">
                {category === "horticulture"? <Horticulture category={category} subcat={subcat} changeSubcat={changeSubcat}/>: ""}
                {category === "photography"? <Photography category={category} subcat={subcat} changeSubcat={changeSubcat}/>: ""}
            </main>
        </>
    );
}

export default Home;