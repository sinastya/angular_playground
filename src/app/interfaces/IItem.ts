export interface IItemsDto {
  id: number;
  title: string;
  completed: boolean;
}

export interface IEditData {
  id: number;
  title: string;
}

export interface IItemsData extends IItemsDto {
  editable: boolean;
}
