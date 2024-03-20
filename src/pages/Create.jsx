import React  from "react";
//componenet
import LeftAlbumTool from "../component/LeftAlbumTool";
import RightAlbumTool from '../component/RightAlbumTool';
import Spring from "../component/Spring";
//styles
import styles from '../css/Create.module.css';

const Create = () => {
    return (
        <article className="layout">
            <section className={styles.Create}>
                <LeftAlbumTool />
                <Spring />
                <RightAlbumTool />
            </section>
        </article>
    )
}

export default Create;