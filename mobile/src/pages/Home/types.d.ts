export interface IHandleToPoints {
  city: string;
  uf: string;
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
