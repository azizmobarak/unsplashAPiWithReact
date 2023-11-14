import React, { useState } from 'react';
import './App.css';
import { usePhotoApi } from './hooks/usePhotoApi';
import Image from './components/Image';
import SearchInput from './components/SearchInput';
import FullScreenView from './components/FullScreenView';
import RemoteData from './components/RemoteData';
import SortPhotos from './components/SortPhotos';

function App() {
  const [value, setValue] = useState('');
  const {data, photoApiSearch, sortData} = usePhotoApi();
  const [selectedImage, setSelectedImage] = useState('');

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
    <div className="wrapper">
      <div className='input-wrapper'>
        <SearchInput inputText={value} setInputText={onSearchValueChange}/>
        <SortPhotos onSort={sortData}/>
      </div>
     <div className='images-container'>
      {data.map(d => renderImages(d.urls.regular,d.id,d.alt_description))}
     </div>
     <FullScreenView url={selectedImage}/>
    </div>
  );
}

export default App;
