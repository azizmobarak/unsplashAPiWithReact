import searchIcon from '../assets/search.png';

type Props = {
    setInputText: (v: string)=> void;
    inputText: string;
}

export default function SearchInput ({setInputText, inputText}: Props) {
    return <div className="search-input-wrapper">
        <input placeholder="type to start search" value={inputText} className="search-input" title="search input" type="text" onChange={(e)=>setInputText(e.target.value)} />
        <img width={20} src={searchIcon} alt="search Icon" />
    </div>
}