export interface IItem {
  id: number;
  image_url: string;
  title: string;
}

export interface IPoints {
  id: number;
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
  latitude: number;
  longitude: number;
}

export interface IParams {
  city: string;
  uf: string;
}

export interface ILoadPoints {
  city: string;
  uf: string;
  items: number[];
}
