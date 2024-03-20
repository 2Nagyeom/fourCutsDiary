import React from "react";
import styles from './component.module.css';
//component
import VideoInput from "./VideoInput";
import WriteText from "./WriteText";

const LeftAlbumTool = () => {
    
    return (
        <article className="layout">
            <section className={styles.LefttoolPage__style}>
            <WriteText />
            {/* <div className={styles.fourVideoImg}>
                {/* <VideoInput />
                <VideoInput /> 
            </div> */}
            </section>
        </article>
    )
}

export default LeftAlbumTool;