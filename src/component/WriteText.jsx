import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//styles
import styles from './component.module.css';

const WriteText = ({onSubmit}) => {
    const initialDate = `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`;
    
    const navigate = useNavigate();

    const [state, setState] = useState({
        date : initialDate,
        content : ''
    });
    const [showDateInput, setShowDateInput] = useState(false);
    const [showDateBtn, setShowDateBtn] = useState(true);

    const displayFormattedDate = (e) => {
        const dateObj = new Date(e);
        return `${dateObj.getMonth() + 1} 월 ${dateObj.getDate()} 일`;
    }
    const handleChangeDate = (e) => {
        setState({
            ...state,
            date : e.target.value,
        })
    }

    const handleChangeText = (e) => {
        setState({
            ...state,
            content : e.target.value,
        })
    }


    const handleBtnClick = () => {
        setShowDateInput(true);
        setShowDateBtn(false);
    }

    const goBack = () => {
        console.log('arrived Home!');
        navigate('/');
    }
    
    const goSubmit = () => {
        onSubmit(state);
        navigate('/');
    }


    return (
        <article className='layout'>
            <section className={styles.WriteText}>
                <section className={styles.WT__dateSection}>
                    <h2>오늘의 날짜 : {displayFormattedDate(state.date)}</h2>
                    {showDateBtn && <button onClick={handleBtnClick} style={{ color: '#9D9B9B'}}>오늘이 아닌가요?</button>}
                    {showDateInput && <input type='date' value={state.date} onChange={handleChangeDate} />}
                </section>
                <section className={styles.WT__textSection}>
                    <textarea value={state.content} onChange={handleChangeText} className={styles.WT__text} placeholder='글을 작성해주세요!' />
                </section>
                <section className={styles.WT__btnSection}>
                    <button onClick={goSubmit} style={{backgroundColor : '#CE5959', border : 'none', borderRadius : '10px', width : '200px', height : '40px'}}>작성완료</button>
                    <button onClick={goBack} style={{backgroundColor : '#B1B1B1', border : 'none', borderRadius : '10px', width : '200px', height : '40px'}}>뒤로가기</button>
                </section>
            </section>
        </article>
    )
}

export default WriteText;