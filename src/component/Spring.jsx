import React  from "react";
// styles
import styles from '../component/component.module.css';
// img
import ring from '../assets/icons/albumRingImg.png';
const Spring = () => {
    return (
        <div className={styles.albumRings}>
                    {Array.from({ length: 25 }).map((_, i) => (
                        <img key={i} className={styles.ring} src={ring} />
                    ))}
                </div>
    )
}

export default Spring;