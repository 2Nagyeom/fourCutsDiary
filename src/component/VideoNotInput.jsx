import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
// styles
import styles from './component.module.css'

const VideoNotInput = () => {
    const navigate = useNavigate();
    const date = `${new Date().getMonth() + 1} 월 ${new Date().getDate()} 일`;

    const goCreate = () => {
        navigate('./create');
    }

    return (
        <section className={styles.VIpage__style}>
            <section className={styles.VIinput__style}>
                <button className={styles.VIGoBtn} onClick={goCreate}>동영상 추가하러 가기!</button>
            </section>
           
        </section>
    )
}

export default VideoNotInput;