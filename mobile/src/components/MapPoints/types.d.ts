export interface IPropsIndex {
  city?: string;
  uf?: string;
  items?: number[];
}

export interface IPropsRender {
  initialPosition: [number, number];
  points: IPoint[];
  handleNavigationToDetail: Function;
}

export interface IPoint {
  id: number;
  image: string;
  image_url: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
  latitude: number;
  longitude: number;
}

export interface ILoadPoints {
  city?: string;
  uf?: string;
  items?: number[];
}
