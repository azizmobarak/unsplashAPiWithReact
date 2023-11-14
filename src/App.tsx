import React, { useState } from 'react';
import './App.css';
import { usePhotoApi } from './hooks/usePhotoApi';
import Image from './components/Image';
import SearchInput from './components/SearchInput';
import FullScreenView from './components/FullScreenView';
import RemoteData from './components/RemoteData';
import SortPhotos from './components/SortPhotos';

function App() {
  const [inputValue, setInputValue] = useState('');
  const {data, photoApiSearch, sortPhotos} = usePhotoApi();
  const [selectedImage, setSelectedImage] = useState('');

  const onSearchValueChange = (v: string) => {
    setInputValue(v);
    photoApiSearch(v);
  }

  const getImages = (url: string, alt: string) => (
    <div onClick={() => setSelectedImage(url)}>
      <Image description={alt} url={url} />
    </div>
  );

  const renderImages = (url: string, id: string, alt: string) => 
  <RemoteData key={id} data={data} render={getImages(url,alt)} />


  const showImages = () => {
     if(data.length === 0) {
      return <p>No result</p>
     }
     return data.map(d => renderImages(d.urls.thumb,d.id,d.alt_description));
  }

  return (
    <div className="wrapper">
      <div className='input-wrapper'>
        <SearchInput inputText={inputValue} setInputText={onSearchValueChange}/>
        <SortPhotos onSort={sortPhotos}/>
      </div>
     <div className='images-container'>
      {showImages()}
     </div>
     <FullScreenView url={selectedImage}/>
    </div>
  );
}

export default App;
