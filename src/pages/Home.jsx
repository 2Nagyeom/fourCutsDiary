import React from "react";
// styles
import styles from '../css/Home.module.css';
// component
import LeftAlbumTool from '../component/LeftAlbumTool';
import RightAlbumTool from '../component/RightAlbumTool';
import Spring from "../component/Spring";

const Home = ({data}) => {
    //dummy
    const half = Math.ceil(data.length / 2);
    const leftData = data.slice(0, half);
    const rightData = data.slice(half);

    return (
        <article className="layout">
            <section className={styles.Home}>
                <LeftAlbumTool data={leftData} />
                <Spring />
                <RightAlbumTool data={rightData} />
            </section>
        </article>
    )
}

export default Home;