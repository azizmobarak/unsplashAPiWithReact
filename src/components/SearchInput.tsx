import searchIcon from '../assets/search.png';
import styles from '../styles/search-input.module.css';
type Props = {
    setInputText: (v: string)=> void;
    inputText: string;
}

export default function SearchInput ({setInputText, inputText}: Props) {
    return <div className={styles.searchInputWrapper}>
        <input placeholder="type to start search" value={inputText} className={styles.searchInput} title="search input" type="text" onChange={(e)=>setInputText(e.target.value)} />
        <img width={20} src={searchIcon} alt="search Icon" />
    </div>
}