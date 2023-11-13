import { useEffect, useState } from "react";

type Props = {
    url: string;
}

export default function FullScreenView ({url}: Props){
    const [img, setImg] = useState<string>('');

    useEffect(()=>{
      setImg(url)
    },[url]);

    if(!img) return null;
    return <div className="full-screen">
          <button onClick={() => setImg('')} className="close-icon">X</button>
          <img width={'100%'} height={'100%'} alt='' src={url} />
          </div>
}