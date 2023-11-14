import { Sort } from "../hooks/usePhotoApi";
import styles from '../styles/sort-photos.module.css'

const getSortValue = (sort: string) => {
    switch(sort){
        case 'color' :
            return Sort.color;
        case 'likes':
            return Sort.likes;
        default: 
            return Sort.other;
    }
}

type Props = {
    onSort: (v: Sort) => void
}

export default function SortPhotos ({onSort}: Props) {
   return (
    <select onChange={(e) => onSort(getSortValue(e.target.value))} 
            className={styles.sortSelect} title='selected'>
          <option disabled value={'other'}>Sort</option>
          <option value={'color'}>color</option>
          <option value={'likes'}>likes</option>
    </select>
   )
}