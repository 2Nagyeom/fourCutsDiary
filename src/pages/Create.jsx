import React  from "react";

import Spring from "../component/Spring";
import LeftAlbumTool from "../component/LeftAlbumTool";
import RightAlbumTool from "../component/RightAlbumTool";

import WriteText from "../component/WriteText";

import styles from '../css/Create.module.css';
import WriteVideo from "../component/WriteVideo";

const Create = () => {
    return (
        <article className="layout">
            <section className={styles.Create}>
                <LeftAlbumTool writeText={WriteText}/>
                <Spring />
                <RightAlbumTool writeVideo={WriteVideo}/>
            </section>
        </article>
    )
}

export default Create;