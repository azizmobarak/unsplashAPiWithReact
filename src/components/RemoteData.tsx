import React from "react"
import { Photo } from "../utils/api/photo.interface";
import styles from '../styles/remoteData.module.css';

type Props = {
    data: Photo[],
    render: React.ReactElement,
}

export default function RemoteData({data, render}: Props){
    console.log('data long ', data)
  if(data.length === 0) return <p className={styles.imagePlaceHolder}>loading .. </p>
  return render;
}