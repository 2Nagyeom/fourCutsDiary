import React from "react";
// styles
import styles from '../css/Home.module.css';
// component
import LeftAlbumTool from '../component/LeftAlbumTool';
import RightAlbumTool from '../component/RightAlbumTool';
import Spring from "../component/Spring";

const Home = () => {
    return (
        <article className="layout">
            <section className={styles.Home}>
                <LeftAlbumTool />
                <Spring />
                <RightAlbumTool />
            </section>
        </article>
    )
}

export default Home;