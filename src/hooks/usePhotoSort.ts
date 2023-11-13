import { useState } from "react";
import { Photo } from "../utils/api/photo.interface";

export enum Sort {
    color,
    likes,
    other,
}

export const usePhotoSort = (data: Photo[]) => {
  const [sortType, setSortType] = useState<Sort>(Sort.other);
  const [sortData, setSortData] = useState<Photo[]>(data);

  const getSortData  = () => {
    switch(sortType){
        case Sort.color :
          let newList = data.sort((a,b)=> a.color > b.color ? 1 : 0);
          setSortData(newList);
        return;

        case Sort.likes:
          newList = data.sort((a, b) => (a.likes > b.likes ? 1 : 0));
         setSortData(newList);
        return;

        default: 
          setSortData(data);
    }
  }

  return { setSortType, sortData }
};