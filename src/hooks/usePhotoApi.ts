import { useEffect, useState } from 'react';
import { getData } from '../utils/api/get';
import { Photo } from '../utils/api/photo.interface';


export const  usePhotoApi = () => {
    const [data, setData] = useState<Photo[]>([]);
    const [searchResult, setSearchResult] = useState<any[]>([])

    const photosApiCall = () => {
      getData("photos").then((d) => {
        setData(d);
      });
    };

    const photoApiSearch = (query: string) => {
      if(!query) return photosApiCall();
      getData("search/photos",query).then((d) => {
        setSearchResult(d.results);
      });
    }

 useEffect(() => {
   photosApiCall();
 }, []); 

 useEffect(() => {
   setData(searchResult ?? []);
 }, [searchResult]);

 return { data, photoApiSearch };
}