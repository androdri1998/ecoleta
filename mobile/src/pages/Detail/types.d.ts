export interface IParams {
  pointId: number;
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

export interface IData {
  point: IPoint;
  items: {
    title: string;
  }[];
}

export interface IPropsIndex {}

export interface IPropsRender {
  handlerNavigationBack: (event: GestureResponderEvent) => void;
  data: {
    point: {
      image_url: string;
      name: string;
      city: string;
      uf: string;
      whatsapp: string;
    };
    items: {
      title: string;
    }[];
  };
  handleWhatsapp: (pointerInside: boolean) => void;
  handleComposerMail: (pointerInside: boolean) => void;
}
