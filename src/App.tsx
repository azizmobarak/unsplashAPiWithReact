import React, { useState } from 'react';
import './App.css';
import { usePhotoApi } from './hooks/usePhotoApi';
import Image from './components/Image';
import SearchInput from './components/SearchInput';
import FullScreenView from './components/FullScreenView';
import RemoteData from './components/RemoteData';
import SortPhotos from './components/SortPhotos';
// import { usePhotoSort } from './hooks/usePhotoSort';

function App() {
  const [value, setValue] = useState('');
  const {data, photoApiSearch} = usePhotoApi();
  const [selectedImage, setSelectedImage] = useState('');
  // const {setSortType, sortData} = usePhotoSort(data);

  const onSearchValueChange = (v: string) => {
    setValue(v);
    photoApiSearch(v);
  }

  const getImages = (url: string, alt: string) => (
    <div onClick={() => setSelectedImage(url)}>
      <Image description={alt} url={url} />
    </div>
  );

  const renderImages = (url: string, id: string, alt: string) => 
  <RemoteData key={id} data={data} render={getImages(url,alt)} />

  return (
    <div className="container">
      <div className='input-area'>
        <SearchInput inputText={value} setInputText={onSearchValueChange}/>
        <SortPhotos/>
      </div>
     <div className='image-container'>
      {data.map(d => renderImages(d.urls.full,d.id,d.alt_description))}
     </div>
     <FullScreenView url={selectedImage}/>
    </div>
  );
}

export default App;
