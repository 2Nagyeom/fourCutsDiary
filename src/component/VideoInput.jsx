import React from "react";
// styles
import styles from './component.module.css'

const VideoInput = () => {
    return (
        <section className={styles.VIpage__style}>
            <section className={styles.vI__style}>
            </section>
            <section className={styles.vT__style}>
                <div className={styles.videoDate}>{new Date().getDate()}</div>
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