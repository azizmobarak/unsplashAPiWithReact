export interface Photo {
  id: string;
  urls: {
    thumb: string;
  };
  name: string;
  color: string;
  alt_description: string;
  likes: number;
}