import React, {useState} from "react";
// styles
import styles from './component.module.css'

const VideoShow = ({data}) => {

    const displayFormattedDate = (e) => {
        const dateObj = new Date(e);
        return `${dateObj.getMonth() + 1} 월 ${dateObj.getDate()} 일`;
    }

    return (
        <section className={styles.VIpage__style}>
            <section className={styles.VI__style}>
                <img src={data.image} alt="이미지" style={{width : '100%', heigth : '100%'}}/>
            </section>
            <section className={styles.VT__style}>
                <div className={styles.videoDate}>
                    {displayFormattedDate(data.date)}
                </div>
                <div className={styles.videoText}>
                    <text>{data.content}</text>
                </div>
            </section>
            <section className={styles.VB__btnSection}>
                <button style={{backgroundColor : '#CE5959', color : '#fff'}}>수정하기</button>
                <button style={{backgroundColor : '#B1B1B1'}}>삭제하기</button>
            </section>
        </section>
    )
}

export default VideoShow;