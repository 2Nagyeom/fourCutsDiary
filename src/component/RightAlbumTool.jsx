import React, {useState, useEffect} from "react";
import {useLocation} from 'react-router-dom'
import styles from './component.module.css';

import VideoShow from "./VideoShow";
import VideoNotInput from "./VideoNotInput";
import WriteVideo from "./WriteVideo";

const RightAlbumTool = ({data}) => {

    const location = useLocation();
    const [isExist, setIsExsist] = useState(false);

    const isRoot = location.pathname === ('/')

    useEffect(() => {
        if(data && data.length > 0){
            setIsExsist(true);
        }else{
            setIsExsist(isExist);
        }
    }, [data]);

    return (
        <article className="layout">
            <section className={styles.RighttoolPage__style}>
                <div className={styles.fourVideoImg}>
                {
                        isRoot ? (
                            data && data.length > 0 ? (
                            <>
                                {data.map((item, index) => (
                                    <VideoShow key={index} data={item} />
                                ))}
                            </>
                        ) : (
                            <VideoNotInput />
                        )
                        ) : null
                    }  
                    <WriteVideo />
                </div>
            </section>
        </article>
    )
}

export default RightAlbumTool;