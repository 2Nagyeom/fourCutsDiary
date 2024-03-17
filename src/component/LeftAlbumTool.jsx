import React from "react";
import styles from './component.module.css';
import VideoInput from "./VideoInput";

const LeftAlbumTool = () => {
    
    return (
        <article className="layout">
            <section className={styles.LefttoolPage__style}>
            <div className={styles.fourVideoImg}>
                <VideoInput />
                <VideoInput />
            </div>
            </section>
        </article>
    )
}

export default LeftAlbumTool;