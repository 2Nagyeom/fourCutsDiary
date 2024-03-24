import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './component.module.css';

import VideoShow from "./VideoShow";
import VideoNotInput from "./VideoNotInput";
import WriteText from "./WriteText";

const LeftAlbumTool = ({ data }) => {
    // 현재 경로를 확인
    const location = useLocation();
    const [isExist, setIsExsist] = useState(false);

    const isRoot = location.pathname === '/';

    useEffect(() => {
        if (data && data.length > 0) {
            setIsExsist(true);
        } else {
            setIsExsist(isExist);
        }
    }, [data]);

    return (
        <article className="layout">
            <section className={styles.LefttoolPage__style}>
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
                    <WriteText />
                </div>
            </section>
        </article>
    )
}

export default LeftAlbumTool;