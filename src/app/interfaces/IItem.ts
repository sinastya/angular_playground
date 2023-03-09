export interface IItemsDto {
  id: number;
  text: string;
}

export interface IEditData {
  id: number;
  text: string;
}

export interface IItemsData extends IItemsDto {
  editable: boolean;
}
