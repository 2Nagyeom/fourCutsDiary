import React from 'react'

import styles from './component.module.css';
import videoIcon from '../assets/icons/videoIcon.png';

const VideoInput = () => {
    return (
        <section className='layout'>
            
            <section className={styles.VIpage__style}>
                <section className={styles.VideoPlay}>
                <img src={videoIcon} style={{width : 50, height : 50}}/>
                </section>
            </section>
        </section>
    )
}

export default VideoInput;