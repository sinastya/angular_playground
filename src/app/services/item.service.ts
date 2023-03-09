import { IItemsData, IItemsDto, IEditData } from 'src/app/interfaces/IItem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsDto: Array<IItemsDto> = [
    { id: 0, title: 'todo0', completed: false },
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
  ];
  itemsData: Array<IItemsData> = [];
  currentID = 0;

  // constructor(private HttpClient: HttpClient) {}

  constructor() {
    this.getData();
  }

  getData() {
    this.itemsData = this.itemsDto.map((data) => {
      return { ...data, editable: false };
    });
    this.currentID = this.itemsData.length;
  }

  addNewItem(inputText: string) {
    if (inputText !== '') {
      // this.HttpClient.post('/', { id: this.currentID, text: inputText })
      //   .pipe()
      //   .subscribe();
      this.itemsData.push({
        id: this.currentID,
        title: inputText,
        editable: false,
        completed: false,
      });
      this.currentID++;
    }
  }

  deleteItem(id: number) {
    const index = this.itemsData.findIndex((el) => el.id === id);
    this.itemsData.splice(index, 1);
  }

  editItem(id: number) {
    const item = this.itemsData.find((el) => el.id === id);
    if (item) item.editable = true;
  }

  cancelEdit() {
    this.itemsData.map((el) => (el.editable = false));
  }

  editSubmitItem(obj: IEditData) {
    const item = this.itemsData.find((el) => el.id === obj.id);
    if (item) {
      item.title = obj.title;
      item.editable = false;
    }
  }

  deleteAll() {
    this.itemsData.splice(0, this.itemsData.length);
  }

  toggleDone(id: number) {
    const item = this.itemsData.find((el) => el.id === id);
    if (item) item.completed = !item.completed;
  }
}
