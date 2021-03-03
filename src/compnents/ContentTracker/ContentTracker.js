import React from 'react';
import useInView from "react-cool-inview";

const ContentTracker = (props) => {

    const { ref } = useInView(
        {
          onLeave: ({ scrollDirection }) => {
            if(scrollDirection.vertical === "up"){
                console.log(`${props.below}`);
                props.changeSubcat(props.below)
            } else{
                console.log(`${props.above}`)
                props.changeSubcat(props.above)
            }
          },
          // More useful options...
        }
    );

    return (
        <>
            <section ref={ref} className="section" data-below={props.below} data-above={props.above}/>
        </>
    );
}

export default ContentTracker;