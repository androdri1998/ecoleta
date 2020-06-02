export interface IItemsController {
  index: Function;
}

export interface IItem {
  id: number;
  image: string;
  title: string;
  deleted: boolean;
  created_at: string;
  updated_at: string;
}

export interface IResponseItem {
  results: IItem[];
}
