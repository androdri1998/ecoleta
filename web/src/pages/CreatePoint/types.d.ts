export interface IItem {
  id: number;
  image_url: string;
  title: string;
}

export interface IUf {
  id: number;
  sigla: string;
  nome: string;
}

export interface ICity {
  id: number;
  name: string;
}

export interface ICityResponse {
  id: number;
  nome: string;
}
