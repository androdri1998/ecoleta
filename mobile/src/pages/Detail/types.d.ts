export interface IParams {
  pointId: number;
}

export interface IPoint {
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

export interface IData {
  point: IPoint;
  items: {
    title: string;
  }[];
}
