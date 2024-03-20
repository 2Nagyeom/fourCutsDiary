import React from "react";
import styles from './component.module.css';
import VideoNotInput from "./VideoNotInput";
import WriteVideo from "./WriteVideo";

const LeftAlbumTool = () => {
    return (
        <article className="layout">
            <section className={styles.RighttoolPage__style}>
                <WriteVideo />
            {/* <div className={styles.fourVideoImg}>
                <VideoNotInput />
                <VideoNotInput />
            </div> */}
            </section>
        </article>
    )
}

export default LeftAlbumTool;