import React, {useState} from "react";
// styles
import styles from './component.module.css'

const VideoInput = () => {
    const date = `${new Date().getMonth() + 1} 월 ${new Date().getDate()} 일`;


    return (
        <section className={styles.VIpage__style}>
            <section className={styles.vI__style}>
            </section>
            <section className={styles.vT__style}>
                <div className={styles.videoDate}>{date}</div>
                <div className={styles.videoText}>
                    <text>오늘의 인생네컷</text>
                </div>
            </section>
            <section className={styles.vB__style}>
                <button>수정하기</button>
                <button>삭제하기</button>
            </section>
        </section>
    )
}

export default VideoInput;