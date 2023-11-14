import { useEffect, useState } from 'react';
import { getData } from '../utils/api/get';
import { Photo } from '../utils/api/photo.interface';

export enum Sort {
  color,
  likes,
  other,
}

export const  usePhotoApi = () => {
    const [data, setData] = useState<Photo[]>([]);
    const [searchResult, setSearchResult] = useState<Photo[]>([]);
    const [sortResult, setSortResult] = useState<Photo[]>([]);
    const [isSorted, setIsSorted] = useState<boolean>(false);

    const photosApiCall = () => {
      getData("photos").then((d: Photo[]) => {
        setData(d);
      });
    };

    const photoApiSearch = (query: string) => {
      if(!query) return photosApiCall();
      getData("search/photos",query).then((d) => {
        setSearchResult(d.results);
      });
    }

    const sortData  = (sortType: Sort) => {
        let sortedData = [];
       switch (sortType) {
         case Sort.color:
            sortedData = data.sort((a, b) => (a.color > b.color ? 1 : -1));
            setSortResult(sortedData);
            setIsSorted(true);
           return;

         case Sort.likes:
             sortedData = data.sort((a, b) => (a.likes > b.likes ? 1 : -1));
             setSortResult(sortedData);
             setIsSorted(true);
           return;

         default:
            setIsSorted(false);
           setSortResult(data);
       }
    }

 useEffect(() => {
   photosApiCall();
 }, []); 

 useEffect(() => {
   setData(searchResult);
 }, [searchResult]);

 useEffect(() => {
   setData(sortResult);
 }, [isSorted,sortResult]);

 return { data, photoApiSearch, sortData };
}