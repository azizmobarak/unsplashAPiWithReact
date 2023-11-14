export interface Photo {
  id: string;
  urls: {
    regular: string;
  };
  name: string;
  color: string;
  alt_description: string;
  likes: number;
}