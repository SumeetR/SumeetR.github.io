import { images } from './constants';

export interface ImageMeta {
  id: string;
  img: string;
  place: string;
  country: string;
  region: string;
  tags: string[];
}

export const getMetadata = (img: string): ImageMeta => {
  const base = 'https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/';
  const items = ((img.split(base)[1]).split('.jp')[0]).split('_');
  return {
    id: items[0],
    img,
    place: items[1],
    country: items[2],
    region: items[3],
    tags: [items[1], items[2], items[3]]
  };
};

export const getImages = (tag?: string) => {
  const images_with_meta = images.map(getMetadata);
  if (!tag) {
    return images_with_meta;
  }
  return images_with_meta.filter((image_meta: ImageMeta) => image_meta.tags.includes(tag));
}