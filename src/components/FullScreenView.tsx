import { useEffect, useState } from "react";
import styles from '../styles/fullScreenView.module.css';

type Props = {
    url: string;
}

export default function FullScreenView ({url}: Props){
    const [img, setImg] = useState<string>('');

    useEffect(()=>{
      setImg(url)
    },[url]);

    if(!img) return null;

    return  <div className={styles.fullScreen}>
          <button onClick={() => setImg('')} className={styles.closeButton}>X</button>
          <img width={'100%'} height={'100%'} alt='' src={url} />
          </div>
}