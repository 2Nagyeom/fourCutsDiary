import React from 'react';
//styles
import styles from './component.module.css';

const WriteText = () => {
    const date = `${new Date().getMonth() + 1} 월 ${new Date().getDate()} 일`;

    return (
        <article className='layout'>
            <section className={styles.WriteText}>
                <section className={styles.WT__dateSection}>
                    <h2>오늘의 날짜 : {date}</h2>
                    <p style={{ color: '#9D9B9B', textAlign : 'right'}}>오늘이 아닌가요?</p>
                </section>
                <section className={styles.WT__textSection}>
                    <textarea className={styles.WT__text} placeholder='글을 작성해주세요!' />
                </section>
                <section className={styles.WT__btnSection}>
                    <button style={{backgroundColor : '#CE5959', border : 'none', borderRadius : '10px', width : '200px', height : '40px'}}>작성완료</button>
                    <button style={{backgroundColor : '#B5C0D0', border : 'none', borderRadius : '10px', width : '200px', height : '40px'}}>뒤로가기</button>
                </section>
            </section>
        </article>
    )
}

export default WriteText;