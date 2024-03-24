import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './component.module.css';
import VideoInput from './VideoInput';

const WriteVideo = () => {
    const navigate = useNavigate();
    const date = `${new Date().getMonth() + 1} 월 ${new Date().getDate()} 일`;

    return (
        <article className='layout'>
            <section className={styles.WriteVideo}>
                <section className={styles.WV__videoSection}>
                    <VideoInput />
                </section>
                <section className={styles.WV__btnSection}>
                    <button style={{backgroundColor : '#CE5959', color : '#fff',border : 'none', borderRadius : '10px', width : '200px', height : '40px'}}>네컷영상 추가하기</button>
                    <button style={{backgroundColor : '#2B4F60', color : '#fff', border : 'none', borderRadius : '10px', width : '200px', height : '40px'}}>네컷 이미지 등록하기</button>
                </section>
            </section>
        </article>
    )
}

export default WriteVideo;