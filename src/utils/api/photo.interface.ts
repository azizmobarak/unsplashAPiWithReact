export interface Photo {
  id: string;
  urls: {
    full: string,
  };
  name: string;
  color: string;
  alt_description: string;
  likes: number;
}