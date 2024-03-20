import React from 'react';
import { useNavigate } from 'react-router-dom';
//styles
import styles from './component.module.css';
import VideoNotInput from './VideoNotInput';

const WriteVideo = () => {
    const navigate = useNavigate();
    const date = `${new Date().getMonth() + 1} 월 ${new Date().getDate()} 일`;

    const goBack = () => {
        console.log('arrived Home!');
        navigate('/');
    }

    return (
        <article className='layout'>
            <section className={styles.WriteVideo}>
                <section className={styles.WV__videoSection}>
                    <VideoNotInput />
                </section>
                <section className={styles.WV__btnSection}>
                    <button style={{backgroundColor : '#CE5959', color : '#fff',border : 'none', borderRadius : '10px', width : '200px', height : '40px'}}>작성완료</button>
                    <button onClick={goBack} style={{backgroundColor : '#2B4F60', color : '#fff', border : 'none', borderRadius : '10px', width : '200px', height : '40px'}}>뒤로가기</button>
                </section>
            </section>
        </article>
    )
}

export default WriteVideo;